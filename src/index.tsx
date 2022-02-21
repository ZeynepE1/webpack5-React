import React from 'react'
import ReactDOM from 'react-dom'
import { HelmetProvider } from 'react-helmet-async'
import { Provider } from 'react-redux'

import ErrorBoundary from 'src/shared/error/errorBoundary'
import store from 'src/store'

// multi language
import 'src/locales/i18n'
import App from './App'

ReactDOM.render(
  <ErrorBoundary>
    <Provider store={store}>
      <HelmetProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </HelmetProvider>
    </Provider>
  </ErrorBoundary>,
  document.getElementById('root')
)
