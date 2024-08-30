import React, { FC, ReactElement } from 'react'
import { z } from 'zod'
import { AbstractModel } from '../../models/AbstractModel'
import { DefaultItem } from './DefaultItem'
import { UrlItem } from './UrlItem'
import { ModelItem } from './ModelItem'

export const DetailTableItem: FC<{
  label: string
  value: number | string | AbstractModel | AbstractModel[] | ReactElement
}> = ({ label, value }) => {
  const type = typeof value

  if (!label || !value || !value.toString().length) return <></>

  if (z.string().url().safeParse(value).success) {
    const link = <UrlItem value={value.toString()} label={label} />
    return <DefaultItem value={link} label={label} />
  }

  if (typeof value === 'number' || typeof value === 'string') {
    return <DefaultItem value={value} label={label} />
  }

  if (Array.isArray(value)) {
    const firstItem = value[0]
    if (value.length === 1) {
      const link = <ModelItem model={firstItem} />
      return <DefaultItem label={label} value={link} />
    }
    const list = (
      <ul>
        {value.map((item) => (
          <li key={item.toString()}><ModelItem model={item} /></li>
        ))}
      </ul>
    )

    return <DefaultItem value={list} label={label} />
  }
  return <DefaultItem value={value.toString()} label={label} />
}
