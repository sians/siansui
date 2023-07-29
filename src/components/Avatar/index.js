import PropTypes from 'prop-types';
import { Icon } from 'components';

import { Container } from './styles';
import theme from 'theme';

const Avatar = ({ 
  src, 
  name,
  size, 
  alt,
  variant,
  hasOutline
}) => {
  console.log(name, src, )
  return (
    <Container
      size={size}
      variant={variant}
      hasOutline={hasOutline}
      hasName={name ? true : false}
      fallbackType={src ? 'src' : name ? 'name' : 'default'}
    >
      {src ? (
        <img 
          src={src}
          alt={alt}
        />
      ): (
        <>
          {name ? ( 
              name.slice(0,2)
            ) : (
              <Icon 
                name='user'
                fill={{
                  base: theme.colors.darkerGrey
                }}
              />
            )}
        </>
      )}
    </Container> 
  )
}

export default Avatar;

Avatar.propTypes = {
  src: PropTypes.string,
  name: PropTypes.string,
  size: PropTypes.oneOf([
    'sm',
    'md',
    'lg'
  ]),
  alt: PropTypes.string,
  variant: PropTypes.oneOf([
    'squared',
    'rounded'
  ]),
  hasOutline: PropTypes.bool
}

Avatar.defaultProps = {
  size: 'sm',
  variant: 'rounded',
  alt: '',
  hasOutline: false
}