import { useNavigate } from 'react-router'
import { funds } from '@shared/constants'

const Home = () => {
  const navigate = useNavigate()
  
  return (
    <>
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Welcome to the Stockhome Token Exchange (STEX) platform
          </h2>
          
          <div className="text-md text-gray-700 mb-6">
            <p className='mb-6'>
              A venue to securely trade regulated tokenized funds with transaction finality in less than 3 seconds.
            </p>

            <p className='mb-6'>
              STEX uses <b>next-generation digital identity</b> (<a href='https://github.com/WebOfTrust/keri' className='text-blue-600 hover:text-blue-800 underline'>KERI</a>), featuring public keys anchored to a DLT and verifiable key chains, the gold standard for compliance, for all of its tokenized securities.
            </p>

            <p className='mb-6'>
              Holders of STEX-issued tokens can be assured that their investments are compliant with regulations in all tradeable jurisdictions and that their identity information is secure and private. Unlike current-generation tokenization platforms, STEX's next-generation identity protection layer makes it impossible for unregulated entities to transfer tokens.
            </p>
          </div>

          {/* Call to Action Section */}
          <div className="bg-blue-50 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Get Started
            </h3>
            <p className="text-blue-700 mb-4">
              Ready to begin? Explore the features and start using the application.
            </p>
            <button className="btn-primary"
              onClick={() => { navigate('/menu')}}>
              Start Now
            </button>
          </div>

          {/* Features Grid */}
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Available tokenized funds
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {funds.map((fund, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm border">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {fund.name}
                </h4>
                <p className="text-gray-600 mb-3">
                  {fund.description}
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

          {/* Why KERI Section */}
          <h3>Why use KERI for identity?</h3>
          <div className="border-blue-600 rounded-lg shadow-md border p-8 mb-8">
            <p className="text-gray-700 mb-4">
              KERI (Key Event Receipt Infrastructure) is a cryptographic protocol for managing identifiers and keys in a decentralized way.
            </p>

            <p className="text-gray-700 mb-3">Core idea: instead of relying on a central registry, the control of an identifier is expressed as a sequence of cryptographically verifiable "events".</p>

            <p className="text-gray-700 mb-3">Key features:</p>

            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
              <li>Decentralized key management — rotation, revocation, and recovery are all verifiable</li>
              <li>Event-sourced identifiers — each key change is recorded as a verifiable event</li>
              <li>No need for a blockchain or central ledger — the chain of events itself provides cryptographic proof of control</li>
            </ul>

            <p className="text-gray-600 mt-3">
              KERI provides a robust foundation for identity management in tokenized securities, ensuring that identity verification and key management are both secure and compliant with regulatory requirements.
            </p>
          </div>

          {/* Why Hedera Section */}
           <h3>
            Why native Hedera tokens?
          </h3>
          <div className="border-blue-600 rounded-lg shadow-md border p-8 mb-8">
           

            <p className="text-gray-700 mb-4">
              Hedera's Token Service (HTS) provides native fungible tokens without needing a smart contract.
            </p>

            <p className="text-gray-700 mb-3">HTS tokens exhibit the following features:</p>

            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
              <li>Integrated at the protocol level</li>
              <li>Comprehensively tested and verified using formal methods</li>
              <li>Managed via API calls (REST, gRPC)</li>
              <li>Low-cost, USD-denominated, predictable transaction fees that execute in finality within seconds</li>
              <li>Hedera isn't governed by anonymous miners or token whales. Only known, regulated, global-scale organisations can provide consensus to the network</li>
              <li>Hedera is governed by a global council of up to 39 major organizations, each from different industries and global regions</li>
            </ul>

            {/* <p className="text-gray-600 border-t pt-4">
              While ERC-1400 is the unified standard for security tokens, it lacks the foundation to support all details of the asset on-chain; forcing issuers to maintain data and actions off-chain.
            </p> */}

            <p className="text-gray-600 mt-3">
              STEX reduces risk and operational complexities by improving on the basic ERC-1400 standard. The entire asset lifecycle is kept private while being verifiable against a public ledger; including ownership of assets and compliance components such as KYC, whitelisting, document handling and event notifications.
            </p>
          </div>

        </div>
      </main>
    </>
  )
}

export default Home
