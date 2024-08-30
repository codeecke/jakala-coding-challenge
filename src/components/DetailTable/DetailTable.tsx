import React, { FC } from 'react'
import { AbstractModel } from '../../models/AbstractModel'
import { DetailTableItem } from './DetailTableItem'

export const DetailTable: FC<{ model: AbstractModel; order: string[] }> = ({
  model,
  order
}) => {
  return (
    <table key="table">
      <tbody>
        {order.map((fieldName) => (
          <DetailTableItem
            key={fieldName}
            label={model.getLabel(fieldName)}
            value={model.format(fieldName)}
          />
        ))}
      </tbody>
    </table>
  )
}
