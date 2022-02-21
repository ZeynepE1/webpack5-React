import React from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import { selectDisplayLayout } from 'src/store/slices/layoutSlice'

const Footer: React.FC = () => {
  const { t } = useTranslation()
  const { footer } = useSelector(selectDisplayLayout)
  if (!footer) {
    return null
  }
  return (
    <div id='footer'>
      <div className='socials'>
        <a
          href='https://github.com/thaind97git'
          rel='noreferrer'
          target='_blank'
        ></a>
        <a
          href='https://www.linkedin.com/in/aldenn97'
          rel='noreferrer'
          target='_blank'
        ></a>
        <a
          href='https://stackoverflow.com/users/11637854/aldenn'
          rel='noreferrer'
          target='_blank'
        ></a>
      </div>
      <h3>{t('copy_right')}</h3>
    </div>
  )
}

export default Footer
