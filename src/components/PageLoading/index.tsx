import React from 'react'
import { useSelector } from 'react-redux'

import { selectLoading } from 'src/store/slices/appSlice'

import Spinner from '../Spinner'

interface IProps {
  show?: boolean
}

const PageLoading: React.FC<IProps> = ({ show }) => {
  const { loading } = useSelector(selectLoading)
  const showLoading = typeof show === 'boolean' ? show : loading

  return (
    <div
      className='page-loading'
      style={{ display: showLoading ? '' : 'none' }}
    >
      <div className='loading-content'>
        <Spinner />
      </div>
    </div>
  )
}

export default PageLoading
