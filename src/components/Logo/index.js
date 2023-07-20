import { Container } from './styles';

import { Icon } from 'components';

import theme from 'theme';

const Logo = () => {
  return (
    <Container>
      <Icon 
        name='circle'
        verticalAlign='baseline'
        maxWidth={10}
        color={theme.colors.main}
      />
      <span>sians</span>
      <Icon 
        name='circle' 
        verticalAlign='baseline'
        maxWidth={10}
        color={theme.colors.main}
      />
      <span>ui</span>
    </Container>
  )
}

export default Logo;