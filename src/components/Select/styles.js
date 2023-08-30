import styled from 'styled-components';


export const Container = styled.div(props => {
  return {
    
  }
})

export const makeStyles = (theme, props) => {
  const { isFullWidth, isHovered, isFocused } = props;

  const totalHeight = 36;
  const padding = theme.margin / 2;
  const borderSize = 1;
  const outlineSize = 2;
  const height = totalHeight - padding*2 - borderSize*2;
  const width = isFullWidth && `calc(100% - ${(padding*2) + (borderSize*2)}px)`;
  
  return {
    menu: (provided, state) => ({
      ...provided,
      minWidth: state.selectProps.width,
      maxWidth: state.selectProps.width,
      color: theme.colors.fg,
      padding: theme.margin / 2,
      border: `${borderSize}px solid ${theme.colors.main.light}`,
      fontSize: theme.font.size.input
    }),
    control: () => ({
      display: 'flex',
      justifyContent: 'space-between',
      width: width,
      borderRadius: theme.borderRadius.small,
      border: `${borderSize}px solid ${isHovered || isFocused ? theme.colors.main.base : theme.colors.main.light}`,
      outline: isFocused && `${outlineSize}px solid ${theme.colors.main.light}`,
      height: totalHeight - borderSize*2,
    }),
    placeholder: () => ({
      paddingLeft: theme.margin/2,
      fontFamily: theme.font.family.base,
      fontSize: theme.font.size.input,
      color: theme.colors.grey.dark
    }),
    valueContainer: () => ({
      height: height,
      padding: `${padding}px ${padding/2}px`,
      fontSize: theme.font.size.input,
      borderRadius: theme.borderRadius.small,
      display: 'flex',
      alignItems: 'center',
    }),
    option: (provided, { isSelected, isFocused }) => {
      return {
        ...provided,
        borderRadius: theme.borderRadius.small,
        color: isSelected 
          ? theme.colors.main.base
          : theme.colors.fg,
        backgroundColor: isSelected 
          ? theme.colors.main.light 
          : isFocused && theme.colors.secondary.base
      }
    },
    multiValue: (provided) => {
      return {
        ...provided,
        backgroundColor: theme.colors.bg,
      };
    },
    multiValueLabel: (provided) => ({
      ...provided,
      color: theme.colors.main.base,
      backgroundColor: theme.colors.main.light,
    }),
    multiValueRemove: (provided) => ({
      ...provided,
      backgroundColor: theme.colors.main.light,
      color: theme.colors.main.base,
      ':hover': {
        color: theme.colors.main.light,
        backgroundColor: theme.colors.main.base,
      },
    }),
  }
}