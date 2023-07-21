import styled from 'styled-components';

const COLOURS = {
  string: '#158962',
  int: '#4e6bcb',
  boolean: '',
  shape: ''
}

const Span = styled.span(props => {
  const { string } = props;
  return {
    fontSize: 12,
    fontWeight: 600,
    color: COLOURS[string]
  }
})

const TypeString = ({ string }) => {
  return <Span string={string}>
    { string }
  </Span>;
}

export default TypeString;