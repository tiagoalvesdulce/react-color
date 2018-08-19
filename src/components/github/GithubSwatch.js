import React from 'react'
import reactCSS, { handleHover } from 'reactcss'

import { Swatch } from '../common'

export const GithubSwatch = ({ white, black, active, hover, color, onClick, onSwatchHover }) => {
  const hoverSwatch = {
    position: 'relative',
    zIndex: '2',
    outline: '2px solid #fff',
    boxShadow: '0 0 5px 2px rgba(255,255,255,0.5)',
  }

  const whiteActiveStyle = {
    position: 'relative',
    zIndex: '2',
    border: '2px solid #000',
    borderRadius: '2px',
  }

  const blackActiveStyle = {
    position: 'relative',
    zIndex: '2',
    border: '2px solid #aaa',
    borderRadius: '2px',
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
        margin: '2px',
      },
    },
    'hover': {
      swatch: hoverSwatch,
    },
  }, { hover })

  if (active) console.log(color, black)

  return (
    <div style={ styles.swatch }>
      <Swatch
        active={ active }
        color={ color }
        onClick={ onClick }
        onHover={ onSwatchHover }
        black={ black }
        white={ white }
        whiteStyle={ whiteStyle }
        whiteActiveStyle={ whiteActiveStyle }
        blackActiveStyle={ blackActiveStyle }
        focusStyle={ hoverSwatch }
        activeStyle={ whiteActiveStyle }
      />
    </div>
  )
}

export default handleHover(GithubSwatch)
