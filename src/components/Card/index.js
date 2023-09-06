import HookCard from './HookCard'
import ComponentCard from './ComponentCard'

import useAppTheme from 'hooks/useAppTheme';

import { Typography } from 'components';
import { Container } from './styles';

const CARD_MAP  = {
  hook: (props) => <HookCard {...props} />,
  component: (props) => <ComponentCard {...props} />
}

const Card = ({ 
  cardType, 
  title, 
  data, 
  onClick
}) => {
  const { themeState } = useAppTheme();
  return cardType && (
    <Container 
      isClickable={!!onClick}
      onClick={!!onClick && onClick}
      isDark={themeState.themeName === 'dark'}
    >
      <Typography.Heading size={6}>
        {title}
      </Typography.Heading>
      <Typography.Small textAlign='center'>
        {CARD_MAP[cardType](data)}
      </Typography.Small>
    </Container>
  )
}

export default Card;