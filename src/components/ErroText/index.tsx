import type { FC } from 'react'
import React, { memo } from 'react'

interface ErroTextProps {
  erro: string
}

const ErroText: FC<ErroTextProps> = (props) => {
  const { erro } = props

  if (erro === '') return null

  return (<small className="text-danger"> { erro } </small>)
}

export default memo(ErroText)
