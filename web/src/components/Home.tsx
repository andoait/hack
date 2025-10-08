import { useNavigate } from 'react-router'
import { funds } from '../constants'

const Home = () => {
  const navigate = useNavigate()

  return (
    <>
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Welcome to the Stockhome Token Exchange (STEX) platform
          </h2>
          
          <p className="text-md text-gray-700 mb-6">
            Securely trade regulated tokenized funds
          </p>

          <p className="text-gray-600 mb-8">
            While ERC-1400 is the unified standard for security tokens, it lacks the foundation to support all details of the asset on-chain; forcing issuers to maintain data and actions off-chain.

            Our platform reduces risk and operational complexities by improving on the basic ERC-1400 standard. We enable users to keep the entire asset lifecycle on-ledger, including ownership of assets, compliance components like KYC and whitelisting, document handling, and notifications.
          </p>

          {/* Call to Action Section */}
          <div className="bg-blue-50 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Get Started
            </h3>
            <p className="text-blue-700 mb-4">
              Ready to begin? Explore the features and start using the application.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition-colors cursor-pointer"
              onClick={() => { navigate('/login')}}>
              Start Now
            </button>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {funds.map((fund, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm border">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {fund.name}
                </h4>
                <p className="text-gray-600 mb-3">
                  {fund.name}
                </p>
                {fund.symbol && (
                  <p className="text-sm text-green-600 font-medium">
                    <a href={`https://hashscan.io/${fund.network}/token/${fund.address}`} target="_blank" rel="noopener noreferrer">
                      {fund.address}
                    </a>
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}

export default Home
