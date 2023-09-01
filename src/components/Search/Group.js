import { components } from 'react-select'
import styled from 'styled-components';

const Group = (props) => <components.Group {...props} />;

const Label = styled.div(props => {
  const { theme } = props;
  return {
    backgroundColor: theme.colors.main.light,
    borderRadius: theme.borderRadius.small,
    padding: theme.margin / 2,
    margin: 0,
    color: theme.colors.main.base,
    fontWeight: 'bold'
  }
})
export const formatGroupLabel = (data) => {
  return (
    <Label>
      {data.label}
    </Label>
  )
}

export default Group;