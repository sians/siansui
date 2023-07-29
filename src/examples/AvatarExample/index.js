import { Layout, Avatar, Badge } from 'components';

const AvatarExample = ({}) => {
  return (
    <Layout.Row>
      <Badge size='sm' number={2}>
        <Avatar 
          src='https://avatars.githubusercontent.com/u/22909505?v=4'
          size='sm'
          variant='rounded'
        />
      </Badge>

      <Avatar 
        // src='https://avatars.githubusercontent.com/u/22909505?v=4'
        name='Sian'
        size='md'
        variant='squared'
      />

      <Avatar 
        // src='https://avatars.githubusercontent.com/u/22909505?v=4'
        name='Sian'
        size='lg'
        variant='squared'
      />

    </Layout.Row>
  )
}

export default AvatarExample;