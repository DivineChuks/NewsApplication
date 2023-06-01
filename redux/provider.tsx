'use client'
import { store } from "./store"
import { Provider } from "react-redux"

interface ProviderProps {
    children: React.ReactNode
}


const Providers:React.FC<ProviderProps> = ({children}) => {
  return (
    <Provider store={store}>{children}</Provider>
  )
}

export default Providers