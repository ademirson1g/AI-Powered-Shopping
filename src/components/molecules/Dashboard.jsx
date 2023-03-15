import React from "react"

import withAuth from "../hoc/withAuth"
import Navigation from "./Navigation"

const Dashboard = (props) => {
  const { user } = props

  return (
    <>
      <Navigation />
      {user && (
        <h1 className="text-white text-center">Welcome to the dashboard</h1>
      )}
    </>
  )
}

export default withAuth(Dashboard)
