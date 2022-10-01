import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { Routes } from './routes'
import  GlobalStyle  from './GlobalStyle'
import theme from './themes/theme'
import { AuthProvider } from './hooks/auth'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
        <AuthProvider>
          <Routes/>
        </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
)
