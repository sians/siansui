import PropTypes from 'prop-types';

import { Avatar, Typography } from 'components';
import { Container, Item } from './styles';

const AvatarGroup = ({ 
  data, 
  max, 
  size, 
  variant, 
  total 
}) => {
  return (
    <Container>
      {data && data.slice(0,max).map((avatar, idx) => {
        return (
          <Item indent={idx} size={size} variant={variant}>
            <Avatar 
              src={avatar.src}
              name={avatar.name}
              size={size}
              variant={variant}
              hasOutline
            />
          </Item>
        )
      })}

      {data.length > max &&
        <Item indent={max} size={size} variant={variant}>
          <Typography.Small>{total || data.length - max}+</Typography.Small>
        </Item>
      }
    </Container>
  )
}

export default AvatarGroup;

AvatarGroup.propTypes = {
  avatars: PropTypes.arrayOf([PropTypes.node]),
  max: PropTypes.number,
  size: PropTypes.oneOf([
    'sm',
    'md',
    'lg'
  ]),
  variant: PropTypes.oneOf([
    'rounded',
    'squared'
  ]),
  total: PropTypes.number
}

AvatarGroup.defaultProps = {
  max: 5,
  size: 'sm',
  variant: 'rounded'
}