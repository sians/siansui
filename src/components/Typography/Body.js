import PropTypes from 'prop-types';
import styled from 'styled-components';

const Styled = styled.p(props => {
  const { theme, marginY, isItalic, isBold, variant } = props;

  const baseStyles = {
    margin: `${marginY}px 0px`,
    fontSize: theme.font.size.body,
    fontStyle: isItalic && 'italic',
    fontWeight: isBold && 900,
  }

  const variantStyles = {
    large: { fontSize: '1.2rem' }
  }

  return {
    ...baseStyles,
    ...(variantStyles[variant])
  }
})

const Body = ({ 
  children, 
  marginY, 
  isItalic, 
  isBold,
  variant
}) => {
  return (
    <Styled 
      marginY={marginY}
      isItalic={isItalic}
      isBold={isBold}
      variant={variant}
    >
      {children}
    </Styled>
  )
}

export default Body;

Body.propTypes = {
  children: PropTypes.node.isRequired,
  marginY: PropTypes.number,
  isItalic: PropTypes.bool,
  isBold: PropTypes.bool,
  variant: PropTypes.oneOf(['large', 'main'])
};

Body.defaultProps = {
  marginY: 0,
  isItalic: false,
  isBold: false,
  variant: 'main'
};