import styles from '../styles/app'

import React, { Component } from 'react'
import { translate } from '../lib/I18n'
import classNames from 'classnames'

const fetchExample = () => {
  return Promise.resolve(['1', '2'])
}

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isFetching: true
    }
    fetchExample().then(() => this.setState({ isFetching: false }))
  }

  render() {
    const { isFetching } = this.state
    return (
      <div>
        <input type='text' value={isFetching ? 'Fetching' : 'Fetched'} />
      </div>
    )
  }
}

export default translate()(App)
