import { useState } from 'react';
import { useTheme } from 'styled-components';

import useFocus from 'hooks/useFocus';
import useKeyPress from 'hooks/useKeyPress';

import { Icon } from 'components';
import Menu from './Menu';

import { Input, Container } from './styles';

const Search = ({
  placeholder
}) => {
  const theme = useTheme();
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
          fill={{base: theme.colors.grey.dark}}
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