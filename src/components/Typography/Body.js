import styled from 'styled-components';

const Styled = styled.p(props => {
  const { theme } = props;
  return {
  }
})

const Body = ({ children }) => {
  return (
    <Styled>
      {children}
    </Styled>
  )
}

export default Body;