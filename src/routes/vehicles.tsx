import { createFileRoute } from '@tanstack/react-router'
import React from 'react'

export const Route = createFileRoute('/vehicles')({
  component: () => <div>Hello /vehicles!</div>
})
