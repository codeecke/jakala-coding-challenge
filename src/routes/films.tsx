import { createFileRoute } from '@tanstack/react-router'
import React from 'react'

export const Route = createFileRoute('/films')({
  component: () => <div>Hello /films!</div>,
})
