import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import { ButtonLink, ALink } from './styles';

const Link = ({ text, url, variant, isExternal }) => {
  const navigate = useNavigate();

  const handleClick = (event) => {
    event.preventDefault();
    navigate(url);
  }

  return isExternal ? (
    <ALink href={url} target='_blank'>
      {text}
    </ALink>
  ) : (
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

Link.propTypes = {
  text: PropTypes.string,
  url: PropTypes.string,
  variant: PropTypes.string,
  isExternal: PropTypes.bool
}

Link.defaultProps = {
  isExternal: false
}