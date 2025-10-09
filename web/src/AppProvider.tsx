import { createContext, useContext, useState } from 'react'
import { identitiesSought } from '@shared/constants'

// 1. Define a type for your context
interface AppContextType {
  isLoggedIn: boolean
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
  isToggled: boolean[]
  setIsToggled: React.Dispatch<React.SetStateAction<boolean[]>>
  aids: string[],
  setAids: React.Dispatch<React.SetStateAction<string[]>>,
  files: (File | null)[],
  setFiles: React.Dispatch<React.SetStateAction<(File | null)[]>>,
  comments: string[],
  setComments: React.Dispatch<React.SetStateAction<string[]>>
  selectedFundIdx: number,
  setSelectedFundIdx: React.Dispatch<React.SetStateAction<number>>
  accountId: string
  setAccountId: React.Dispatch<React.SetStateAction<string>>
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
  const [aids, setAids] = useState<string[]>(Array(identitiesSought.length).fill(''))
  const [files, setFiles] = useState<(File | null)[]>(Array(identitiesSought.length).fill(null))
  const [comments, setComments] = useState<string[]>(Array(identitiesSought.length).fill(''))
  const [selectedFundIdx, setSelectedFundIdx] = useState(0)
  const [accountId, setAccountId] = useState('')

  return (
    <AppContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        isToggled,
        setIsToggled,
        aids,
        setAids,
        files,
        setFiles,
        comments,
        setComments,
        selectedFundIdx,
        setSelectedFundIdx,
        accountId,
        setAccountId
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