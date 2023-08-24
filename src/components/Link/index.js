import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import { ButtonLink, ALink } from './styles';

const Link = ({ text, url, variant, isExternal, isMailto, isBold }) => {
  const navigate = useNavigate();

  const handleClick = (event) => {
    event.preventDefault();
    navigate(url);
  }

  return isExternal || isMailto ? (
    <ALink 
      href={`${isMailto && 'mailto:'}${url}`} 
      target='_blank' 
      isBold
    >
      {text}
    </ALink>
  ) : (
    <ButtonLink
      role="link"
      aria-label={text}
      variant={variant}
      onClick={handleClick}
      isBold
    >
      {text}
    </ButtonLink>
  )
}

export default Link;

Link.propTypes = {
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  url: PropTypes.string,
  variant: PropTypes.string,
  isExternal: PropTypes.bool,
  isBold: PropTypes.bool
}

Link.defaultProps = {
  isExternal: false,
  isBold: false
}