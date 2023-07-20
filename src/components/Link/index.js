import { useNavigate } from 'react-router-dom';

import { ButtonLink } from './styles';

const Link = ({ text, url, variant }) => {
  const navigate = useNavigate();

  const handleClick = (event) => {
    event.preventDefault();
    navigate(url);
  }

  return (
    <ButtonLink
      role="link"
      aria-label={text}
      variant={variant}
      onClick={handleClick}
    >
      {text}
    </ButtonLink>
  )
}

export default Link;