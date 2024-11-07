import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import store from './index.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Provider store = {store}>
        <App />
      </Provider>
    </Router>
    
  </StrictMode>,
)