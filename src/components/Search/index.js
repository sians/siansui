import { useState, useMemo, useRef } from 'react';
import { useTheme } from 'styled-components';
import ReactSelect from 'react-select'

import useAppTheme from 'hooks/useAppTheme';
import useKeyPress from 'hooks/useKeyPress';
import useSearch from 'hooks/useSearch';

import { Icon } from 'components';
import CustomOption from './CustomOption';
import Group, { formatGroupLabel } from './Group';

import { makeSelectStyles } from './styles';
import { Container } from './styles';

const Search = ({
  placeholder,
  pageData
}) => {
  const theme = useTheme();
  const { themeState } = useAppTheme();
  const selectStyles = useMemo(() => makeSelectStyles(
    theme, 
    themeState?.themeName === 'dark'
  ), [theme, themeState]);

  const selectRef = useRef();
  const [isFocused, setIsFocused] = useState(false);
  const [query, setQuery] = useState('');
  const searchResults = useSearch(pageData, query);
  
  const handleInput = (v, action) => {
    if (action.action === 'input-change') {
      setQuery(v);
    }
  };
  const triggerBlur = () => selectRef.current.blur();
  const handleOnBlur = () => setIsFocused(false);
  const hanldeResetSearch = () => {
    triggerBlur();
    setQuery('');
  };
  const handleFocus = () => {
    selectRef.current.focus();
    setIsFocused(true);
  };
  const handleEsc = () => {
    if (query.length > 0) {
      hanldeResetSearch();
    } else {
      triggerBlur();
    }
  }
  
  useKeyPress({
    'Meta+k': () => handleFocus(),
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

        <div>
          <ReactSelect
            placeholder={placeholder}
            menuIsOpen={(searchResults?.length > 0) && isFocused ? true : false}
            openMenuOnFocus={false}
            openMenuOnClick={false}
            defaultOptions={false}
            options={searchResults || []}
            styles={selectStyles}
            inputValue={query}
            onInputChange={(v, action) => handleInput(v, action)}
            resetSearch={hanldeResetSearch}
            onFocus={handleFocus}
            onBlur={handleOnBlur}
            onBlurResetsInput={false}
            ref={selectRef}
            components={{
              Group: Group,
              Option: CustomOption
            }}
            formatGroupLabel={(data) => formatGroupLabel(data, themeState?.themeName === 'dark')}
            isDark={themeState?.themeName === 'dark'}
            isSearchable
          />
        </div>
        <div className='hotkey'>
          ⌘K
        </div>
      </Container>
    </>
  )
}

export default Search;