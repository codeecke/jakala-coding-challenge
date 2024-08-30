import { createFileRoute } from '@tanstack/react-router'
import React from 'react'

export const Route = createFileRoute('/planets')({
  component: () => <div>Hello /planets!</div>
})
