import PropTypes from 'prop-types';
import { useState } from 'react';

import theme from 'theme';

import IcomoonReact from 'icomoon-react';
import iconSet from 'assets/fonts/icons/selection.json';

import { Container } from './styles';

const Icon = ({ 
  name, 
  maxWidth,
  action,
  className,
  color,
  isDisabled,
  rotate
}) => {
  const isLink = action ? true : false;

  const [isHover, setIsHover] = useState(false);

  return (
  <Container 
    maxWidth={maxWidth}
    onClick={() => !isDisabled && action()}
    isLink={isLink}
    className={className}
    isDisabled={isDisabled}
    onMouseEnter={() => setIsHover(true)}
    onMouseLeave={() => setIsHover(false)}
    rotate={rotate}
  >
    <IcomoonReact 
      iconSet={iconSet} 
      title={name} 
      icon={name}
      color={
        isDisabled 
          ? theme.colors.midGrey
          : isHover 
            ? theme.colors.main 
            : color
      }
    />
  </Container>
)}

export default Icon;

Icon.propTypes = {
  name: PropTypes.oneOf([
    'bars',
    'search',
    'chevron-down',
    'linkedin-square',
    'github',
    'circle',
    'toggle-off',
    'toggle-on',
    'icomoon',
  ]),
  maxWidth: PropTypes.number,
  action: PropTypes.func,
  className: PropTypes.string
}
