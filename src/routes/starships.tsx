import { createFileRoute } from '@tanstack/react-router'
import React from 'react'

export const Route = createFileRoute('/starships')({
  component: () => <div>Hello /starships!</div>,
})
