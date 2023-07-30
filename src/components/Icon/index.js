import PropTypes from 'prop-types';
import { useState, useEffect, useCallback } from 'react';

import theme from 'theme';

import IcomoonReact from 'icomoon-react';
import iconSet from 'assets/fonts/icons/selection.json';

import { Container } from './styles';

const COLOR_MAP = {
  disabled: {
    base: theme.colors.midGrey, 
    hover: theme.colors.midGrey
  },
  link: {
    base: theme.colors.black, 
    hover: theme.colors.main
  },
  default: {
    base: theme.colors.black,
    hover: theme.colors.main
  }
}

const Icon = ({ 
  name, 
  size,
  action,
  className,
  fill,
  isDisabled,
  rotateBy,
  verticalAlign,
  isHovered
}) => {
  const isLink = action ? true : false;

  const [color, setColor] = useState([]);

  const handleAction = useCallback(() => {
    if (!isDisabled && action) {
      action();
    }
  }, [isDisabled, action])

  const makeColor = useCallback(() => {
    if (isDisabled) {
      return COLOR_MAP.disabled;
    }

    if (fill) {
      return fill;
    }

    if (isLink) {
      return COLOR_MAP.link
    }

    return COLOR_MAP.default;
  }, [isDisabled, fill, isLink])

  useEffect(() => {
    setColor(makeColor())
  }, [fill, makeColor])


  return (
  <Container 
    size={size}
    onClick={() => handleAction()}
    isLink={isLink}
    className={className}
    isDisabled={isDisabled}
    rotateBy={rotateBy}
  >
    <IcomoonReact 
      iconSet={iconSet} 
      size={size}
      title={name} 
      icon={name}
      color={
        isHovered
          ? color.hover || color.base
          : color.base
      }
      style={{verticalAlign: verticalAlign}}
    />
  </Container>
)}

export default Icon;

Icon.propTypes = {
  name: PropTypes.oneOf([
    'arrows',
    'asterisk',
    'bars',
    'cards-lg',
    'cards-sm',
    'check',
    'chevron-down',
    'chevron-up',
    'circle',
    'close',
    'closing-code',
    'compress',
    'expand',
    'eye-slash',
    'eye',
    'github',
    'linkedin',
    'list',
    'magic',
    'moon',
    'search',
    'sun',
    'terminal',
    'toggle-off',
    'toggle-on',
    'user',
    'exclamation',
    'info'
  ]),
  size: PropTypes.number,
  action: PropTypes.func,
  className: PropTypes.string,
  fill: PropTypes.shape({
    base: PropTypes.string,
    hover: PropTypes.string
  }),
  isDisabled: PropTypes.bool,
  rotateBy: PropTypes.number,
  verticalAlign: PropTypes.string,
  isHovered: PropTypes.bool
}

Icon.defaultProps = {
  fill: COLOR_MAP.default,
  className: 'icon',
  size: 18,
  verticalAlign: 'super',
  isDisabled: false
}
