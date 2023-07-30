import PropTypes from 'prop-types';
import { useMemo } from 'react';

import useHover from 'hooks/useHover';
import useTimeout from 'hooks/useTimeout';

import { Icon, Layout, Typography } from 'components';
import { makeVariantStyles, Container } from './styles';

const ICON_MAP = {
  error: { icon: 'exclamation' },
  success: { icon: 'check' },
  warning: { icon: 'exclamation' },
  info: { icon: 'info' },
  default: { icon: 'magic' }
}
const ICON_SIZE = 14;

const Alert = ({
  id,
  title,
  description,
  hasIcon,
  hasClose,
  alertType,
  variant,
  onClose,
  displayTimeout
}) => {
  useTimeout(() => onClose(id), displayTimeout);

  const variantStyles = useMemo(() => {
    return makeVariantStyles(variant, alertType);
  }, [variant, alertType]);
  
  const mainColSize = useMemo(() => {
    return hasIcon ? 10 : 10.5;
  }, [hasIcon]);
  const iconMap = ICON_MAP[alertType] || ICON_MAP.default
  
  const [ref, isCloseHovered] = useHover();
  
  const handleClose = () => {
    onClose(id);
  };

  return mainColSize && (
    <Container 
      styles={variantStyles}
      paddingX={16}
      paddingY={16}
    >
      {hasIcon && (
        <Layout.Col size={1}>
          <div className='icon-container left'>
            <Icon 
              name={iconMap.icon}
              size={ICON_SIZE}
              fill={{
                base: variantStyles?.icon
              }}
            />
          </div>
        </Layout.Col>
      )}

      <Layout.Col size={mainColSize}>
        <Typography.Heading size={6}>
          {title}
        </Typography.Heading>
        <Typography.Small>
          {description}
        </Typography.Small>
      </Layout.Col>


      <Layout.Col size={1} align='flex-end'>
        {hasClose && (

          <div 
            className='icon-container right'
            onClick={handleClose}
            ref={ref}
          >
            <Icon 
              name='close'
              size={ICON_SIZE}
              isHovered={isCloseHovered}
              fill={{
                base: variantStyles?.color,
                hover: variantStyles?.close                
              }}
            />
          </div>
        )}          
      </Layout.Col>

    </Container>
  )
}

export default Alert;

Alert.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
  hasIcon: PropTypes.bool,
  hasClose: PropTypes.bool,
  alertType: PropTypes.oneOf([
    'error',
    'success',
    'warning',
    'info'
  ]).isRequired,
  variant: PropTypes.oneOf([
    'solid',
    'light',
    'toast'
  ]),
  onClose: PropTypes.func,
  displayTimeout: PropTypes.number
}

Alert.defaultProps = {
  title: "",
  description: "",
  hasIcon: true,
  hasClose: false,
  alertType: 'error',
  variant: 'light',
  onClose: () => console.log('Alert needs onClose prop'),
  displayTimeout: undefined
}