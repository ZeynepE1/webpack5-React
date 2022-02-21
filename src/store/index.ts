import { configureStore } from '@reduxjs/toolkit'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import thunk from 'redux-thunk'

import appSlice from './slices/appSlice'
import authSlice from './slices/authSlice'
import layoutSlice from './slices/layoutSlice'

export const history = createBrowserHistory()

const middlewares = [routerMiddleware(history), thunk]

const store = configureStore({
  reducer: {
    router: connectRouter(history),
    app: appSlice,
    layout: layoutSlice,
    auth: authSlice,
  },
  middleware: middlewares,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
