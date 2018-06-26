import React from 'react'
import PropTypes from 'prop-types'
import styles from './style.scss'
import CssModules from 'react-css-modules'
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar'

class HeaderComponent extends React.Component {
  static propTypes = {
    testSaga: PropTypes.object
  }

  render() {
    const { message } = this.props.testSaga
    console.log(message)

    return (
      <div>
        <Toolbar>
          <ToolbarGroup>
            <div>{`${process.env.REACT_APP_NAME}-v${process.env.REACT_APP_VERSION}`}</div>
            <button styleName='button'><span styleName='inside'>Vanity Button</span></button>
            <div styleName='inside'>Outside of button</div>
          </ToolbarGroup>
        </Toolbar>
      </div>
    )
  }
}

export default CssModules(HeaderComponent, styles)
