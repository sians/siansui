import PropTypes from 'prop-types';

import { Link } from 'components';
import { Container, Item } from './styles';

const Menu = ({ items, selected, handleToggleMenu }) => {
  return (  
    <Container>
      <ul>
        {items && items.map((item, idx) => {
          const { text, url } = item;
          const isSelected = selected.toLowerCase() === text.toLowerCase();
          return (
            <Item 
              key={`dd-menu-${idx}`}
              isSelected={isSelected}
            >
              <Link 
                text={text} 
                variant='navburger'
                url={url}
                onClick={handleToggleMenu}
              />
            </Item>
          )
        })}
      </ul>
    </Container>
  )
}

export default Menu;

Menu.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    url: PropTypes.string,
    action: PropTypes.func
  })),
  selected: PropTypes.string
}