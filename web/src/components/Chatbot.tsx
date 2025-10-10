import { useState } from 'react'

const Chatbot = () => {
  const [showChat, setShowChat] = useState(false)
  const [chatMessages, setChatMessages] = useState<Array<{role: 'user' | 'bot', message: string}>>([])
  const [currentMessage, setCurrentMessage] = useState('')

  const handleSendMessage = async () => {
    if (!currentMessage.trim()) return
    
    const newMessages = [...chatMessages, { role: 'user' as const, message: currentMessage }]
    setChatMessages(newMessages)
    
    setTimeout(() => {
      setChatMessages(prev => [...prev, { 
        role: 'bot' as const, 
        message: 'I can help you gather the required credential AIDs. Please provide contact information for the client you are onboarding and I\'ll guide you through the verification process.' 
      }])
    }, 1000)
    
    setCurrentMessage('')
  }

  return (
    <div>
      {!showChat && (
        <button
          type="button"
          className="w-full px-4 py-2 mt-4 rounded text-white font-bold transition-colors bg-blue-700 hover:bg-blue-600 cursor-pointer"
          onClick={() => setShowChat(!showChat)}
        >
          Chat with Credential Assistant
        </button>
      )}

      {showChat && (
        <div className="mt-4 border rounded-lg bg-white w-120 max-w-120">
          <div className="p-3 border-b bg-gray-50 rounded-t-lg flex justify-between items-center">
            <div>
              <h4 className="font-semibold text-sm">p2p Credential Assistant (hypothetical)</h4>
              <p className="text-xs text-gray-600">Get help gathering the required credential AIDs</p>
            </div>
            {/* X button in top right */}
            <button
              onClick={() => setShowChat(false)}
              className="text-gray-500 hover:text-gray-700 text-lg font-bold w-6 h-6 flex items-center justify-center"
            >
              ×
            </button>
          </div>
          
          <div className="h-64 overflow-y-auto p-3 space-y-2">
            {chatMessages.length === 0 && (
              <div className="text-sm text-gray-500 italic">
                Hello! I'm here to help you gather the required credential AIDs from the client. Do you have the contact details of the client so I can chat with them to elicit their credential information?
              </div>
            )}
            {chatMessages.map((msg, idx) => (
              <div key={idx} className={`text-sm p-2 rounded ${
                msg.role === 'user' 
                  ? 'bg-blue-100 text-blue-900 ml-4' 
                  : 'bg-gray-100 text-gray-900 mr-4'
              }`}>
                <span className="font-semibold text-xs">{msg.role === 'user' ? 'You:' : 'Assistant:'}</span>
                <div>{msg.message}</div>
              </div>
            ))}
          </div>
          
          <div className="p-3 border-t flex gap-2">
            <textarea
              className="flex-1 p-2 border rounded text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
              rows={2}
              placeholder="Ask about credential requirements..."
              value={currentMessage}
              onChange={(e) => setCurrentMessage(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault()
                  handleSendMessage()
                }
              }}
            />
            <button
              onClick={handleSendMessage}
              className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded text-sm font-medium transition-colors"
              disabled={!currentMessage.trim()}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Chatbot
