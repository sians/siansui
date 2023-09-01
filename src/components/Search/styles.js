import styled from 'styled-components';

export const Container = styled.div(props => {
  const { theme, isFocused } = props;

  return {
    display: 'flex',
    alignItems: 'center',
    color: theme.colors.grey.main,
    position: 'relative',

    '.hotkey': {
      opacity: isFocused ? 0 : 1,
      border: `1px solid ${theme.colors.grey.dark}`,
      color: theme.colors.grey.dark,
      padding: `0px ${theme.margin / 2}px`,
      borderRadius: theme.borderRadius.main / 2,
      fontSize: 14,
      backgroundColor: `${theme.colors.grey.dark}20`,
      transition: 'opacity 0.5s'
    }
  }
})

export const Input = styled.input(props => {
  const { theme } = props;

  return {
    marginLeft: theme.margin / 2,
    outline: 'none',
    border: 'transparent',
    height: `calc(${theme.nav.height}px - ${theme.margin}px)`,
    color: theme.colors.fg,

    '&::placeholder': {
      color: theme.colors.grey.dark,
      fontSize: 14
    }
  
  }
})


export const makeSelectStyles = (theme) => {

  const totalHeight = 36;
  const totalWidth = 200;
  const padding = theme.margin / 2;
  const borderSize = 1;
  const width = `calc(${totalWidth}px - ${(padding*2) + (borderSize*2)}px)`;

  const menuWidth = 400;

  return {
    control: () => ({
      display: 'flex',
      justifyContent: 'space-between',
      width: width,
      border: `none`,
      outline: 'none',
      height: totalHeight - borderSize*2,
      fontFamily: theme.font.family.base
    }),
    placeholder: (provided) => ({
      ...provided,
      fontFamily: theme.font.family.base
    }),
    indicatorsContainer: () => ({
      display: 'none'
    }),
    menu: (provided) => ({
      ...provided,
      minWidth: menuWidth,
      maxWidth: menuWidth,
      color: theme.colors.fg,
      padding: 0,
      border: `${borderSize}px solid ${theme.colors.main.light}`,
      fontSize: theme.font.size.input
    }), 
  }
}