import { createFileRoute } from '@tanstack/react-router'
import React from 'react'

export const Route = createFileRoute('/people/$id/$page')({
  component: () => <div>Hello /people/$id/$page!</div>,
})
