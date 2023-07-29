import { Avatar, AvatarGroup } from 'components';

const AVATAR_DATA = [
  {
    src: 'https://avatars.githubusercontent.com/u/22909505?v=4',
  },
  {
  },
  {
    src: 'https://xsgames.co/randomusers/assets/avatars/female/20.jpg',
  },
  {
    src: 'https://xsgames.co/randomusers/assets/avatars/female/38.jpg',
  },  
  {
    src: 'https://xsgames.co/randomusers/assets/avatars/female/61.jpg',
  },  

]

const AvatarGroupExample = ({}) => {
  return (
    <div>
      <AvatarGroup 
        data={AVATAR_DATA}
        max={3}
        size='md'
        variant='rounded'
      />

    </div>
  )
}

export default AvatarGroupExample;