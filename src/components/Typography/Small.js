import PropTypes from 'prop-types';
import styled from 'styled-components';

const Styled = styled.small(props => {
  const { marginY, isItalic, isBold, color, textAlign } = props;

  return {
    margin: `${marginY} 0px`,
    fontSize: '0.85rem',
    fontStyle: isItalic && 'italic',
    fontWeight: isBold && 900,
    color: color,
    textAlign: textAlign
  }
})

const Small = ({ 
  children, 
  marginY, 
  isItalic, 
  isBold,
  color,
  textAlign
}) => {
  return (
    <Styled 
      marginY={marginY}
      isItalic={isItalic}
      isBold={isBold}
      color={color}
      textAlign={textAlign}
    >
      {children}
    </Styled>
  )
}

export default Small;

Small.propTypes = {
  children: PropTypes.node.isRequired,
  marginY: PropTypes.number,
  isItalic: PropTypes.bool,
  isBold: PropTypes.bool,
  color: PropTypes.string,
  textAlign: PropTypes.string
};

Small.defaultProps = {
  marginY: 0,
  isItalic: false,
  isBold: false,
  textAlign: 'left'
};