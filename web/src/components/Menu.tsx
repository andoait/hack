import { useNavigate } from 'react-router'

const Menu = () => {
  const navigator = useNavigate()

  return (
    <>
      <div className="grid grid-cols-12 gap-6 p-8">
        {/* LEFT COLUMN */}
        {/* <aside className="col-span-3 bg-gray-50 rounded-lg p-4 shadow">
          <h3 className="font-bold text-lg mb-2">Left Column</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>Navigation link</li>
            <li>Helper text</li>
            <li>Status info</li>
          </ul>
        </aside> */}

        {/* CENTER COLUMN */}
        <main className="col-span-8">
          <div className="max-w-2xl mx-auto">
            <a href='#' onClick={() => navigator('/login')}>Login</a>
            <br/>
            <a href='#' onClick={() => navigator('/verifier')}>Verifier</a>
          </div>
        </main>

        {/* RIGHT COLUMN */}
        {/* <aside className="col-span-3 bg-gray-50 rounded-lg p-4 shadow">
          <div>
            RIGHT
          </div>
        </aside> */}
      </div>
    </>
  )
}

export default Menu