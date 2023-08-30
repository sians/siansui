import { useTheme } from 'styled-components';
import { Container } from './styles';

import { Icon } from 'components';

const Logo = () => {
  const theme = useTheme();
  return (
    <Container>
      <Icon 
        name='circle'
        verticalAlign='baseline'
        size={10}
        fill={{ base: theme.colors.main.base }}
      />
      <span>sians</span>
      <Icon 
        name='circle' 
        verticalAlign='baseline'
        size={10}
        fill={{ base: theme.colors.main.base }}
      />
      <span>ui</span>
    </Container>
  )
}

export default Logo;