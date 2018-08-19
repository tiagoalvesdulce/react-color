import React from 'react'
import reactCSS from 'reactcss'
import { handleFocus } from '../../helpers/interaction'

import Checkboard from './Checkboard'

const ENTER = 13

export const Swatch = ({ color, style, onClick = () => {}, onHover, title = color,
  children, focus, active, white, black, focusStyle = {}, activeStyle = {}, whiteStyle = {},
  whiteActiveStyle, blackActiveStyle }) => {
  const transparent = color === 'transparent'
  const styles = reactCSS({
    default: {
      swatch: {
        background: color,
        height: '100%',
        width: '100%',
        cursor: 'pointer',
        position: 'relative',
        outline: 'none',
        borderRadius: '2px',
        ...style,
        ...(focus ? focusStyle : {}),
        ...(active ? activeStyle : {}),
        ...(white ? whiteStyle : {}),
        ...(white && active ? whiteActiveStyle : {}),
        ...(black && active ? blackActiveStyle : {}),
      },
    },
  })

  const handleClick = e => onClick(color, e)
  const handleKeyDown = e => e.keyCode === ENTER && onClick(color, e)
  const handleHover = e => onHover(color, e)

  const optionalEvents = {}
  if (onHover) {
    optionalEvents.onMouseOver = handleHover
  }

  return (
    <div
      style={ styles.swatch }
      onClick={ handleClick }
      title={ title }
      tabIndex={ 0 }
      onKeyDown={ handleKeyDown }
      { ...optionalEvents }
    >
      { children }
      { transparent && (
        <Checkboard
          borderRadius={ styles.swatch.borderRadius }
          boxShadow="inset 0 0 0 1px rgba(0,0,0,0.1)"
        />
      ) }
    </div>
  )
}

export default handleFocus(Swatch)
