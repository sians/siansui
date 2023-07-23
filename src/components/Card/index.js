import HookCard from './HookCard'

import { Typography } from 'components';
import { Container } from './styles';

const CARD_MAP  = {
  hook: (props) => <HookCard {...props} />,
}

const Card = ({ 
  cardType, 
  title, 
  data, 
  onClick
}) => {
  return cardType && (
    <Container 
      isClickable={!!onClick}
      onClick={!!onClick && onClick}
    >
      <Typography.Heading size={5}>
        {title}
      </Typography.Heading>
      {CARD_MAP[cardType](data)}
    </Container>
  )
}

export default Card;