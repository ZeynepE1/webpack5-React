import React from 'react'
import { useTranslation } from 'react-i18next'

import Select from 'src/components/Select'
import i18n from 'src/locales/i18n'

import { ITag } from './types'

const languageOptions = [
  {
    label: <div className='lang-item'>Deutsch</div>,
    value: 'de',
  },
  {
    label: (
      <div className='lang-item'>
        <span>&nbsp;&nbsp;</span> English
      </div>
    ),
    value: 'en',
  },
]

const Home: React.FC = () => {
  const { t } = useTranslation()

  return (
    <div className='row home'>
      <div className='container'>
        <Select
          defaultValue={i18n.language}
          className='select-language'
          onChange={option => {
            i18n.changeLanguage(option.value)
          }}
          options={languageOptions}
        />
        <div className='title'>{t('home.title')}</div>
        <div>
          <div className='keywords'>
            <i>{t('keywords')}:</i>
          </div>
        </div>
        <div className='aldenn'>{t('home.created_by')}</div>
      </div>
    </div>
  )
}

export default Home
