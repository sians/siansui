import HookCard from './HookCard'
import ComponentCard from './ComponentCard'

import useAppTheme from 'hooks/useAppTheme';

import { Typography, Layout } from 'components';
import { Container } from './styles';

const CARD_MAP  = {
  hook: (props) => <HookCard {...props} />,
  component: (props) => <ComponentCard {...props} />
}

const Card = ({ 
  cardType, 
  title, 
  data, 
  onClick,
  layoutType,
  className
}) => {
  const { themeState } = useAppTheme();
  return cardType && (
    <Container 
      isClickable={!!onClick}
      onClick={!!onClick && onClick}
      isDark={themeState.themeName === 'dark'}
      layoutType={layoutType}
      className={className}
    >
      {layoutType === 'grid' && 
        <>
          <Typography.Heading size={6}>
            {title}
          </Typography.Heading>
          <Typography.Small textAlign='center'>
            {CARD_MAP[cardType](data)}
          </Typography.Small>
        </>
      }

      {layoutType === 'row' && 
        <Layout.Row>
          <Layout.Col size={3}>
            <Typography.Heading size={6}>
              {title}
            </Typography.Heading>
          </Layout.Col>
          <Layout.Col size={9}>
            <Typography.Small>
              {CARD_MAP[cardType](data)}
            </Typography.Small>
          </Layout.Col>          
        </Layout.Row>
      }
    </Container>
  )
}

export default Card;