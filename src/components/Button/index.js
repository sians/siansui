import useHover from 'hooks/useHover';

import { Icon } from 'components';

import { MAP, StyledButton } from './styles';

const Button = ({
  onClick,
  text,
  variant,
  className,
  isFullWidth,
  isDisabled,
  startIconName,
  endIconName
}) => {
  const [ref, isHovered] = useHover();
  const handleClick = () => onClick();  

  return (
    <StyledButton
      ref={ref}
      onClick={handleClick}
      variant={variant}
      className={className}
      isFullWidth={isFullWidth}
      isDisabled={isDisabled}
    >
      {startIconName && 
        <Icon 
          name={startIconName} 
          fill={{
            base: MAP[variant]?.fill.base,
            hover: MAP[variant]?.fill.hover 
          }}
          isHovered={isHovered}
          className='icon start'
        />
      }

      {text}

      {endIconName && 
        <Icon 
          name={endIconName} 
          fill={{
            base: MAP[variant]?.fill.base,
            hover: MAP[variant]?.fill.hover 
          }}
          isHovered={isHovered}
          className='icon end'
        />
      }
    </StyledButton>
  )
}

export default Button;