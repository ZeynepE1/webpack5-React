import React from 'react'
import { Route, Switch } from 'react-router-dom'

import NotFound from 'src/components/NotFound'
// import CoreRoute from 'src/pages/core/route'
// import HomeRoute from 'src/pages/home/route'

// TODO: change NotFound -> NotFoundPage
const Routes = () => (
  <div>
    <Switch>
      <Route exact path='/notFound' component={NotFound} />
      {/* <Route exact path='/login' component={LoginPage} /> */}
    </Switch>
  </div>
)
export default Routes
