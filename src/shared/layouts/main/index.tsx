import React from 'react'
import { useDispatch } from 'react-redux'
import { Route, Switch } from 'react-router-dom'

import { useShallowEqualSelector } from 'src/hooks/useShallowEqualSelector'
import routes from 'src/routes'
import { compareTwoObject } from 'src/shared/utils'
import {
  ILayout,
  selectDisplayLayout,
  setDisplayLayout,
} from 'src/store/slices/layoutSlice'

const Main: React.FC = () => {
  const layout: ILayout = useShallowEqualSelector(selectDisplayLayout)
  const dispatch = useDispatch()

  const updateDisplayLayout = (currentLayout: ILayout, layout: ILayout) => {
    const layoutUpdated = currentLayout
      ? { header: !!currentLayout.header, footer: !!currentLayout.footer }
      : { header: true, footer: true }

    if (!compareTwoObject(layoutUpdated, layout)) {
      setTimeout(() => dispatch(setDisplayLayout(layoutUpdated)))
    }
  }

  return <div id='main'></div>
}

export default Main
