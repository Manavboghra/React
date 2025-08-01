import { createContext } from "react"
export const useTheme = createContext()

export const DataContext = (props) => {
    const theme = "light"
  return (
    <div>
        <useTheme.Provider value={theme}>
            {props.children}
        </useTheme.Provider>
    </div>
  )
}
