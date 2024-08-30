import { createFileRoute } from '@tanstack/react-router'
import React from 'react'

export const Route = createFileRoute('/species')({
  component: () => <div>Hello /species!</div>,
})
