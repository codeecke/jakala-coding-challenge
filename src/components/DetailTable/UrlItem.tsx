import React, { FC } from 'react'

export const UrlItem: FC<{ label: string; value: string }> = ({
  label,
  value
}) => (
  <a href={value} target="_blank">
    {value}
  </a>
)
