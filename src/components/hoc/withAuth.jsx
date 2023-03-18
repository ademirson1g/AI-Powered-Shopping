import React from "react"
import LoadingIndicator from "../atoms/LoadingIndicator"

import { auth } from "../firebaseConfig/firebaseConfig"

const withAuth = (Component) => {
  class AuthenticatedComponent extends React.Component {
    state = {
      user: null,
      loading: true,
    }

    componentDidMount() {
      this.unsubscribe = auth.onAuthStateChanged((user) => {
        if (user) {
          this.setState({
            user: {
              name: user.displayName,
              photoUrl: user.photoURL,
            },
            loading: false,
          })
        } else {
          this.setState({ user: null, loading: false })
        }
      })
    }

    componentWillUnmount() {
      this.unsubscribe()
    }

    render() {
      const { user, loading } = this.state

      if (loading) {
        return <LoadingIndicator />
      }

      return user ? <Component user={user} /> : null
    }
  }

  return AuthenticatedComponent
}

export default withAuth
