import { Component, ErrorInfo } from 'react'

import ErrorPage from '@src/page/Error'

import { Props, State } from './types'

class ErrorBoundary extends Component<Props, State> {
  state: State = {
    hasError: false,
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo)
  }

  render() {
    const { hasError } = this.state
    const { children } = this.props

    if (hasError) {
      return <ErrorPage />
    }
    return children
  }
}

export default ErrorBoundary
