import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { getToken } from 'src/helpers/localStorage'
import { goURL } from 'src/helpers/router'
import { setAuthenticated, setCurrentUser } from 'src/store/slices/authSlice'

interface IProps {
  children: React.ReactElement
}

const Auth: React.FC<IProps> = ({ children }) => {
  const [renderRoute, setRenderRoute] = useState(false)
  const dispatch = useDispatch()

  const fetchCurrentUser = useCallback(async () => {
    setRenderRoute(true)
  }, [dispatch])

  useEffect(() => {
    if (!getToken()) {
      goURL('/login')
      setRenderRoute(true)
    } else {
      fetchCurrentUser()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return renderRoute ? children : null
}

export default Auth
