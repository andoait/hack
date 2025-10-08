import { createContext, useContext, useState } from 'react'
import { identitiesSought } from './constants'

// 1. Define a type for your context
interface AppContextType {
  isLoggedIn: boolean
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
  isToggled: boolean[]
  setIsToggled: React.Dispatch<React.SetStateAction<boolean[]>>
}

// 2. Create the context with `undefined` (so we can inject real values later)
const AppContext = createContext<AppContextType | undefined>(undefined)

const useAppContext = () => {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useAppContext must be used within AppProvider')
  return ctx
}

// 3. Build the provider with real state
const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isToggled, setIsToggled] = useState<boolean[]>(Array(identitiesSought.length).fill(false))

  return (
    <AppContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        isToggled,
        setIsToggled,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider

export {
  // AppContext,
  useAppContext
}