import { useNavigate } from 'react-router-dom';
import { Nav, Typography, Button } from 'components';

import { Content } from './styles';

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <Nav />
      <Content>
        <div>
          <Typography.Heading size={1}>
            hello & welcome.
          </Typography.Heading>
          
          <Typography.Body>
            I got tired of trawling through my old repos looking for x implementation of y feature.
            So I've put together a little reference for a bunch of components, features & patterns, with some examples, variants & commented code snippets. 
          </Typography.Body>

          <div className='btn-container'>
            <Button 
              text='Components'
              variant='primary'
              className='components-btn'
              onClick={() => navigate(`/components`)}
            />
            <Button 
              text='Hooks'
              variant='secondary'
              onClick={() => navigate(`/hooks`)}
            />
          </div>
        </div>
      </Content>
    </>
  )
}

export default Home;