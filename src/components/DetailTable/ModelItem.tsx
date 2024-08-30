import React, { FC } from 'react'
import { AbstractModel } from '../../models/AbstractModel'

export const ModelItem: FC<{ model: AbstractModel }> = ({ model }) => {
  if(!model.getDetailLink) {
    return model.toString()
  }
  return <a href={model.getDetailLink()}>{model.toString()}</a>
}
