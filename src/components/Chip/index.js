import PropTypes from 'prop-types';
import { useMemo } from 'react';
import { useTheme } from 'styled-components';

import useHover from 'hooks/useHover';

import { Icon } from 'components';
import { Container, Remove, makeSizeMap, makeVariantStyles } from './styles';

const Chip = ({ 
  text,
  isDisabled,
  size,
  variant,
  iconName,
  onRemove,
  hasRemove,
  action
}) => {
  const theme = useTheme();
  const [ref, isHovered] = useHover();
  const variantName = useMemo(() => {
    return isDisabled ? 'disabled' : variant
  }, [variant, isDisabled])
  const sizing = makeSizeMap(size);
  const variantStyles = makeVariantStyles(theme, variant)

  const handleChipClick = () => !isDisabled && action();
  const handleRemoveChip = (e) => !isDisabled && onRemove(e);

  return (
    <Container
      ref={ref}
      size={size}
      isHovered={isHovered}
      isDisabled={isDisabled}
      variant={variantName}
      onClick={handleChipClick}
    >
      {!!iconName && 
        <div className='icon-container'>
          <Icon 
            name={iconName}
            size={sizing?.icon}
            isHovered={isHovered}
            fill={{
              base: variantStyles?.base.color,
              hover: isDisabled 
                ? variantStyles?.base.color
                : variantStyles?.hover.color,
            }}
          />
        </div>
      }
      {text}

      {hasRemove && 
        <Remove onClick={(e) => handleRemoveChip(e)}>
          <Icon 
            name='close'
            size={sizing?.icon}
            isHovered={isHovered}
            fill={{
              base: variantStyles?.base.color,
              hover: isDisabled 
                ? variantStyles?.base.color
                : variantStyles?.hover.color,
            }}
          />
        </Remove>    
      }
    </Container>
  )
}

export default Chip;

Chip.propTypes = {
  text: PropTypes.string,
  isDisabled: PropTypes.bool,
  size: PropTypes.oneOf([
    'sm',
    'md',
    'lg'
  ]),
  variant: PropTypes.oneOf([
    'outline',
    'solid'
  ]),
  iconName: PropTypes.string,
  onRemove: PropTypes.func,
  hasRemove: PropTypes.bool,
  action: PropTypes.func
}

Chip.defaultProps = {
  isDisabled: false,
  size: 'md',
  variant: 'solid',
  onRemove: () => console.log('Remove chip'),
  hasRemove: false,
  action: () => console.log('Chip action')
}