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
      black = _ref.black,
      active = _ref.active,
      hover = _ref.hover,
      color = _ref.color,
      onClick = _ref.onClick,
      onSwatchHover = _ref.onSwatchHover;

  var hoverSwatch = {
    position: 'relative',
    zIndex: '2',
    outline: '2px solid #fff',
    boxShadow: '0 0 5px 2px rgba(255,255,255,0.5)'
  };

  var whiteActiveStyle = {
    position: 'relative',
    zIndex: '2',
    border: '2px solid #000',
    borderRadius: '2px'
  };

  var blackActiveStyle = {
    position: 'relative',
    zIndex: '2',
    border: '2px solid #aaa',
    borderRadius: '2px'
  };

  var whiteStyle = {
    border: '1px solid #000'
  };

  var styles = (0, _reactcss2.default)({
    'default': {
      swatch: {
        width: '25px',
        height: '25px',
        fontSize: '0',
        margin: '2px'
      }
    },
    'hover': {
      swatch: hoverSwatch
    }
  }, { hover: hover });

  if (active) console.log(color, black);

  return _react2.default.createElement(
    'div',
    { style: styles.swatch },
    _react2.default.createElement(_common.Swatch, {
      active: active,
      color: color,
      onClick: onClick,
      onHover: onSwatchHover,
      black: black,
      white: white,
      whiteStyle: whiteStyle,
      whiteActiveStyle: whiteActiveStyle,
      blackActiveStyle: blackActiveStyle,
      focusStyle: hoverSwatch,
      activeStyle: whiteActiveStyle
    })
  );
};

exports.default = (0, _reactcss.handleHover)(GithubSwatch);