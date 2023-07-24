import { Container } from './styles';

import { Icon } from 'components';

import theme from 'theme';

const Logo = () => {
  return (
    <Container>
      <Icon 
        name='circle'
        verticalAlign='baseline'
        size={10}
        fill={{ base: theme.colors.main }}
      />
      <span>sians</span>
      <Icon 
        name='circle' 
        verticalAlign='baseline'
        size={10}
        fill={{ base: theme.colors.main }}
      />
      <span>ui</span>
    </Container>
  )
}

export default Logo;