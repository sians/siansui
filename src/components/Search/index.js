import { useState } from 'react';
import useFocus from 'hooks/useFocus';
import useKeyPress from 'hooks/useKeyPress';

import { Icon } from 'components';
import Menu from './Menu';

import { Input, Container } from './styles';

import theme from 'theme';

const Search = ({
  placeholder
}) => {
  const [ref, isFocused, setFocus] = useFocus();
  const [query, setQuery] = useState('');
  
  const handleInput = (e) => {
    setQuery(e.target.value);
  }
  const handleEsc = () => {
    if (query.length > 0) {
      setQuery('');
    } else {
      setFocus(false);
    }
  }

  useKeyPress({
    'Meta+k': () => setFocus(true),
    'Escape': () => handleEsc(),
  })

  return (
    <>
      <Container isFocused={isFocused}>
        <Icon 
          name='search' 
          fill={{base: theme.colors.midGrey}}
          size={12}
        />

        <Input 
          placeholder={placeholder}
          ref={ref}
          value={query}
          onChange={(e) => handleInput(e)}
        />

        <div className='hotkey'>
          ⌘K
        </div>      

        {isFocused && 
          <Menu />      
        }
      </Container>
    </>
  )
}

export default Search;