import React from 'react'

const ThemeContext = React.createContext({
  isBrighterTheme: true,
  changeTheme: () => {},
})

export default ThemeContext
