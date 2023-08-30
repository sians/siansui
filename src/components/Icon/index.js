import PropTypes from 'prop-types';
import { useState, useEffect, useCallback } from 'react';
import { useTheme } from 'styled-components';

import IcomoonReact from 'icomoon-react';
import iconSet from 'assets/fonts/icons/selection.json';

import { Container } from './styles';

const Icon = ({ 
  name, 
  size,
  action,
  className,
  fill,
  isDisabled,
  rotateBy,
  verticalAlign,
  isHovered,
  opacity
}) => {
  const theme = useTheme();
  const colorMap = {
    disabled: {
      base: theme.colors.grey.dark, 
      hover: theme.colors.grey.dark
    },
    link: {
      base: theme.colors.fg, 
      hover: theme.colors.main.base
    },
    default: {
      base: theme.colors.fg,
      hover: theme.colors.main.base
    }
  }  
  const isLink = action ? true : false;

  const [color, setColor] = useState([]);

  const handleAction = useCallback(() => {
    if (!isDisabled && action) {
      action();
    }
  }, [isDisabled, action])

  const makeColor = useCallback(() => {
    if (isDisabled) {
      return colorMap.disabled;
    }

    if (fill) {
      return fill;
    }

    if (isLink) {
      return colorMap.link
    }

    return colorMap.default;
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
    opacity={opacity}
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
  isHovered: PropTypes.bool,
  opacity: PropTypes.number
}

Icon.defaultProps = {
  fill: {
    main: 'black',
    
  },
  className: 'icon',
  size: 18,
  verticalAlign: 'super',
  isDisabled: false,
  opacity: 1
}
