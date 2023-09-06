import { components } from 'react-select'
import styled from 'styled-components';

const Group = (props) => <components.Group {...props} />;

const Label = styled.div(props => {
  const { theme, isDark } = props;

  const baseStyles = {
    backgroundColor: theme.colors.main.light,
    borderRadius: theme.borderRadius.small,
    padding: theme.margin / 2,
    margin: 0,
    color: theme.colors.main.base,
    fontWeight: 'bold'
  }

  const darkStyles = {
    backgroundColor: theme.colors.grey.light,
    color: theme.colors.fg
  }

  return {
    ...baseStyles,
    ...(isDark && darkStyles)
  }
})
export const formatGroupLabel = (data, isDark) => {
  return (
    <Label isDark={isDark}>
      {data.label}
    </Label>
  )
}

export default Group;