import { createRootRoute } from "@tanstack/react-router"
import * as React from "react"
import { Layout } from "../components/Layout"

export const Route = createRootRoute({
  component: () => (
    <React.Fragment>
      <Layout />
    </React.Fragment>
  ),
})
