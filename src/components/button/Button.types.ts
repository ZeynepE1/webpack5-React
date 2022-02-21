import { ReactElement } from 'react'

export interface IBtnProps {
  primary?: boolean
  danger?: boolean
  warning?: boolean
}

export interface IProps extends IBtnProps {
  children: ReactElement | string
}
