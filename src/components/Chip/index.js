import PropTypes from 'prop-types';
import { useMemo } from 'react';

import useHover from 'hooks/useHover';

import { Icon } from 'components';
import { Container, Remove, SIZE_MAP, VARIANT_MAP } from './styles';

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
  const [ref, isHovered] = useHover();
  const variantName = useMemo(() => {
    return isDisabled ? 'disabled' : variant
  }, [variant, isDisabled])

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
            size={SIZE_MAP[size]?.icon}
            isHovered={isHovered}
            fill={{
              base: VARIANT_MAP[variantName]?.base.color,
              hover: isDisabled 
                ? VARIANT_MAP[variantName]?.base.color
                : VARIANT_MAP[variantName]?.hover.color,
            }}
          />
        </div>
      }
      {text}

      {hasRemove && 
        <Remove onClick={(e) => handleRemoveChip(e)}>
          <Icon 
            name='close'
            size={SIZE_MAP[size]?.icon}
            isHovered={isHovered}
            fill={{
              base: VARIANT_MAP[variantName]?.base.color,
              hover: isDisabled 
                ? VARIANT_MAP[variantName]?.base.color
                : VARIANT_MAP[variantName]?.hover.color,

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