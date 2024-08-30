import React, { FC, ReactElement } from 'react'
import { tss } from 'tss-react'

const useStyle = tss.create({
  cell: {
    textAlign: 'left',
    verticalAlign: 'baseline',

    ul: {
      paddingLeft: '1rem'
    }
  }
})

export const DefaultItem: FC<{
  label: string
  value: string | number | ReactElement
}> = ({ label, value }) => {
  const { cx, classes } = useStyle()
  return (
    <tr>
      <th className={cx(classes.cell)}>{label}</th>
      <td className={cx(classes.cell)}>{value}</td>
    </tr>
  )
}
