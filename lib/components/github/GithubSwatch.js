'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GithubSwatch = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactcss = require('reactcss');

var _reactcss2 = _interopRequireDefault(_reactcss);

var _common = require('../common');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GithubSwatch = exports.GithubSwatch = function GithubSwatch(_ref) {
  var white = _ref.white,
      active = _ref.active,
      hover = _ref.hover,
      color = _ref.color,
      onClick = _ref.onClick,
      onSwatchHover = _ref.onSwatchHover;

  var hoverSwatch = {
    position: 'relative',
    zIndex: '2',
    outline: '2px solid #fff',
    boxShadow: '0 0 5px 2px rgba(0,0,0,0.25)'
  };

  var whiteActiveStyle = {
    position: 'relative',
    zIndex: '2',
    outline: '2px solid #000',
    boxShadow: '0 0 5px 2px rgba(255,255,255,0.25)'
  };

  var whiteStyle = {
    border: '1px solid #000'
  };

  var styles = (0, _reactcss2.default)({
    'default': {
      swatch: {
        width: '25px',
        height: '25px',
        fontSize: '0'
      }
    },
    'hover': {
      swatch: hoverSwatch
    }
  }, { hover: hover });

  return _react2.default.createElement(
    'div',
    { style: styles.swatch },
    _react2.default.createElement(_common.Swatch, {
      active: active,
      color: color,
      onClick: onClick,
      onHover: onSwatchHover,
      white: white,
      whiteStyle: whiteStyle,
      whiteActiveStyle: whiteActiveStyle,
      focusStyle: hoverSwatch,
      activeStyle: hoverSwatch
    })
  );
};

exports.default = (0, _reactcss.handleHover)(GithubSwatch);