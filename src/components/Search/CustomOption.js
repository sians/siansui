import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Typography } from 'components';

const Option = styled.div(props => {
  const { theme, isFocused, isDark } = props;
  return {
    margin: theme.margin / 2,
    padding: theme.margin / 2,
    borderRadius: theme.borderRadius.small,
    backgroundColor: isFocused 
      ? isDark ? theme.colors.main.light : theme.colors.main.base
      : '',
    color: isDark 
      ? isFocused 
        ? theme.colors.main.base
        : theme.colors.grey.dark
      : '',



    '&:hover': {
      backgroundColor: isDark 
        ? theme.colors.secondary.base
        : theme.colors.secondary.light,
      cursor: 'pointer',
      color: isDark && theme.colors.fg
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
      isDark={selectProps.isDark}
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