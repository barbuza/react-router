import React from 'react'
import Link from './Link'

/**
 * An <IndexLink> is used to link to an <IndexRoute>.
 */
export default class IndexLink extends React.Component {

  render() {
    return <Link {...this.props} onlyActiveOnIndex={true} />
  }

}
