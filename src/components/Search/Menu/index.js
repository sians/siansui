import { Typography } from 'components';
import { Container, MenuItem, Category } from './styles';

const dummyRes = {
  components: [
    {
      category: 'components',
      title: 'TextInput',
      description: 'Returns an html <input> tag...'
    },
    {
      category: 'components',
      title: 'TextField',
      description: 'Returns an html <textfield> tag...'
    }  
  ],
  hooks: [
    {
      category: 'hooks',
      title: 'useFocus',
      description: 'The useFocus hook allows components to programmatically...'
    }
  ]
}

// TODO:  results must be sorted by category, with top level json keys category names

const Menu = () => {
  const items = dummyRes;
  return items && Object.keys(items) && (
    <Container>

      {Object.keys(dummyRes).map((categoryName, catIdx) => {
        return (
          <>
            <Category isFirst={catIdx === 0}>
              <Typography.Heading size={7} isSmall>
                {categoryName}
              </Typography.Heading>
            </Category>
            
            {dummyRes[categoryName].map((res, idx) => {
              return (
                <MenuItem className='menu-item'>
                  <Typography.Heading size={7}>
                    {res.title}
                  </Typography.Heading>
                  <Typography.Body margin={0}>
                    {res.description}
                  </Typography.Body>
                </MenuItem>    
              )
            })}
          </>
        )
      })}


      
    </Container>
  )
}

export default Menu;