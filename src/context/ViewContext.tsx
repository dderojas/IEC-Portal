//@ts-nocheck
import { useState, useContext, createContext } from "react"

interface ViewContextType {
    view: string;
    setView: (value:string) => void;
  }

const ViewContext = createContext<ViewContextType | null>(null);

const ViewProvider = ({ children }: { children: ReactNode }) => {
    const [view, setView] = useState<string>('home')

    return (
        <ViewContext.Provider value={{ view, setView }}>
            { children }
        </ViewContext.Provider>
    )
}

const useView = () => {
    const context = useContext(ViewContext)
    if (!context) {
        throw new Error('useView must be used within a ViewProvider')
    }

    return context
}

export {
    useView,
    ViewProvider
}