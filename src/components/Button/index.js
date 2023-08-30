import { useTheme } from 'styled-components';
import useHover from 'hooks/useHover';

import { Icon } from 'components';

import { makeVariantStyles, StyledButton } from './styles';

const Button = ({
  onClick,
  text,
  variant,
  className,
  isFullWidth,
  isDisabled,
  iconName,
  iconPosition,
  size
}) => {
  const theme = useTheme();
  const [ref, isHovered] = useHover();
  const handleClick = (e) => onClick(e);
  
  const styles = makeVariantStyles(theme, variant);

  const buttonSize = size || 'small';
  const sizeMap = {
    small: {
      icon: 14
    },
    medium: {
      icon: 16
    }
  }

  const icon = (position) => {
    return iconName && 
    <Icon 
      name={iconName} 
      fill={{
        base: styles?.fill.base,
        hover: styles?.fill.hover 
      }}
      size={sizeMap[buttonSize].icon}
      isHovered={isHovered}
      className={`icon ${position}`}
    />
  }

  return (
    <StyledButton
      ref={ref}
      onClick={handleClick}
      variant={variant}
      className={className}
      isFullWidth={isFullWidth}
      isDisabled={isDisabled}
      buttonSize={buttonSize}
    >
      {iconPosition === 'start' && icon('start')}
      
      {iconName && !iconPosition && icon()}
      {text}

      {iconPosition === 'end' && icon('end')}
    </StyledButton>
  )
}

export default Button;