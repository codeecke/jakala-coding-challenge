import { createFileRoute } from '@tanstack/react-router'
import React from 'react'

export const Route = createFileRoute('/people/$id/')({
  component: () => <div>Hello /people/$id!</div>,
})
