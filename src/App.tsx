import React, { Suspense } from 'react'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { BrowserRouter as Router } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'

import Layout from 'src/shared/layouts'
import { history } from 'src/store'

import PageLoading from 'components/PageLoading'

import 'src/styles/App.scss'

const ReactApp: React.FC = () => {
  const { t } = useTranslation()
  const title = t('appTitle')
  return (
    <Router>
      <Helmet defaultTitle={title}>
        <title>{title}</title>
      </Helmet>

      <ConnectedRouter history={history}>
        <Suspense fallback={<PageLoading show />}>
          <Layout />
          <PageLoading />

          <div>Deneme</div>
        </Suspense>
      </ConnectedRouter>
    </Router>
  )
}

export default ReactApp
