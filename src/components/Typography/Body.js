import styled from 'styled-components';

const Styled = styled.p(props => {
  const { theme, margin } = props;
  return {
    margin: margin
  }
})

const Body = ({ children, margin }) => {
  return (
    <Styled margin={margin}>
      {children}
    </Styled>
  )
}

export default Body;