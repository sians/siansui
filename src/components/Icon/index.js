import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

import theme from 'theme';

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
  isHovered
}) => {
  const isLink = action ? true : false;

  const [color, setColor] = useState([]);

  useEffect(() => {
    setColor(makeColor())
  }, [fill])

  const handleAction = () => {
    if (!isDisabled && action) {
      action();
    }
  }

  const colorMap = {
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
    },

    hasFill: { ...fill }
  }
  const makeColor = () => {
    if (isDisabled) {
      return colorMap.disabled;
    }

    if (fill) {
      return colorMap.hasFill;
    }

    if (isLink) {
      return colorMap.link
    }

    return colorMap.default;
  }

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
      style={{verticalAlign: verticalAlign || 'super'}}
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
    
    
  ]),
  size: PropTypes.number,
  action: PropTypes.func,
  className: PropTypes.string,
  fill: PropTypes.arrayOf([PropTypes.string])
}

Icon.defaultProps = {
  fill: []
}
