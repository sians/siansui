import { useNavigate } from 'react-router-dom';
import { Nav, Typography, Button } from 'components';
import shapes from 'assets/shapes.png';

import { Content, Background } from './styles';

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <Background url={shapes}/>
      <Nav />
      <Content>
        <div>
          <Typography.Heading size={1}>
            hi there.
          </Typography.Heading>
          
          <Typography.Body>
            Just a place where I keep some basic code snippets.  Ready to reuse, refactor, restyle.
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