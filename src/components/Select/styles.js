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
      color: theme.colors.black,
      padding: theme.margin / 2,
      border: `${borderSize}px solid ${theme.colors.mainLighter}`,
      fontSize: theme.font.size.input
    }),
    control: () => ({
      display: 'flex',
      justifyContent: 'space-between',
      width: width,
      height: height,
      borderRadius: theme.borderRadiusSmall,
      border: `${borderSize}px solid ${isHovered || isFocused ? theme.colors.main : theme.colors.mainLighter}`,
      outline: isFocused && `${outlineSize}px solid ${theme.colors.mainLighter}`,
      height: totalHeight - borderSize*2,
    }),
    placeholder: () => ({
      paddingLeft: theme.margin/2,
      fontFamily: theme.fontFamily,
      fontSize: theme.font.size.input,
      color: theme.colors.midGrey
    }),
    valueContainer: () => ({
      height: height,
      padding: `${padding}px ${padding/2}px`,
      fontSize: theme.font.size.input,
      borderRadius: theme.borderRadiusSmall,
      display: 'flex',
      alignItems: 'center',
    }),
    option: (provided, { isSelected, isFocused }) => {
      return {
        ...provided,
        borderRadius: theme.borderRadiusSmall,
        color: isSelected 
          ? theme.colors.main 
          : theme.colors.black,
        backgroundColor: isSelected 
          ? theme.colors.mainLighter 
          : isFocused && theme.colors.secondary
      }
    },
    multiValue: (provided) => {
      return {
        ...provided,
        backgroundColor: theme.colors.white,
      };
    },
    multiValueLabel: (provided) => ({
      ...provided,
      color: theme.colors.main,
      backgroundColor: theme.colors.mainLighter,
    }),
    multiValueRemove: (provided) => ({
      ...provided,
      backgroundColor: theme.colors.mainLighter,
      color: theme.colors.main,
      ':hover': {
        color: theme.colors.mainLighter,
        backgroundColor: theme.colors.main,
      },
    }),
  }
}