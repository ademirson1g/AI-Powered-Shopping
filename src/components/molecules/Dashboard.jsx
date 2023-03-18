import React from "react"

import withAuth from "../hoc/withAuth"

const Dashboard = (props) => {
  const { user } = props

  return <div className="bg-[#4538A1]">{user && <div>Test</div>}</div>
}

export default withAuth(Dashboard)
