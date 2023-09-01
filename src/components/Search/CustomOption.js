import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Typography } from 'components';

const Option = styled.div(props => {
  const { theme, isFocused } = props;
  return {
    margin: theme.margin / 2,
    padding: theme.margin / 2,
    borderRadius: theme.borderRadius.small,
    backgroundColor: isFocused && theme.colors.secondary.base,

    '&:hover': {
      backgroundColor: theme.colors.secondary.light,
      cursor: 'pointer'
    },

    '&:last-child': {
      marginBottom: 0,
    }
  }
})

const CustomOption = ({ data, selectProps, ...rest }) => {
  const navigate = useNavigate();
  const handleSelect = () => {
    selectProps.resetSearch();
    navigate(data.url);
  }
  return (
    <Option 
      onClick={handleSelect}
      isFocused={rest.isFocused}
    >
      <Typography.Heading size={7}>
        {data.title}
      </Typography.Heading>

      <Typography.Small>
        {data.description}
      </Typography.Small>
    </Option>
  )}
  
export default CustomOption;