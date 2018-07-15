import React from 'react'
import reactCSS, { handleHover } from 'reactcss'

import { Swatch } from '../common'

export const GithubSwatch = ({ white, active, hover, color, onClick, onSwatchHover }) => {
  const hoverSwatch = {
    position: 'relative',
    zIndex: '2',
    outline: '2px solid #fff',
    boxShadow: '0 0 5px 2px rgba(0,0,0,0.25)',
  }

  const whiteActiveStyle = {
    position: 'relative',
    zIndex: '2',
    outline: '2px solid #000',
    boxShadow: '0 0 5px 2px rgba(255,255,255,0.25)',
  }

  const whiteStyle = {
    border: '1px solid #000',
  }

  const styles = reactCSS({
    'default': {
      swatch: {
        width: '25px',
        height: '25px',
        fontSize: '0',
      },
    },
    'hover': {
      swatch: hoverSwatch,
    },
  }, { hover })

  return (
    <div style={ styles.swatch }>
      <Swatch
        active={ active }
        color={ color }
        onClick={ onClick }
        onHover={ onSwatchHover }
        white={ white }
        whiteStyle={ whiteStyle }
        whiteActiveStyle={ whiteActiveStyle }
        focusStyle={ hoverSwatch }
        activeStyle={ hoverSwatch }
      />
    </div>
  )
}

export default handleHover(GithubSwatch)
