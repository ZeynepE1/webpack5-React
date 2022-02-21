import React, { Fragment } from 'react'

import Footer from './footer'
import Header from './header'
import Main from './main'

const Layout: React.FC = () => {
  return (
    <Fragment>
      <Header />
      <Main />
      <Footer />
    </Fragment>
  )
}

export default Layout
