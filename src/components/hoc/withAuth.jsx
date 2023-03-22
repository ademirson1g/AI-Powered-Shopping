import React from "react"
import LoadingIndicator from "../atoms/LoadingIndicator"

import { auth } from "../firebaseConfig/firebaseConfig"
import logo from '../../assets/images/logo.png'

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
              uid: user?.uid,
              name: user?.displayName,
              photoUrl: user?.photoURL || null,
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

      const photoUrl = user?.photoUrl ?? logo;

      return user ? <Component user={{...user, photoUrl}} /> : null
    }
  }

  return AuthenticatedComponent
}

export default withAuth
