import { useTheme } from 'styled-components';

import useHover from 'hooks/useHover';

import { Icon } from 'components';

import { Chevron as Container } from './styles';

const Chevron = ({ action, rotateBy }) => {
  const theme = useTheme();
  const [hoverRef, isHovered] = useHover();

  const iconFill = {
    base: isHovered
      ? theme.colors.fg
      : theme.colors.grey.main
  }

  return (
    <Container 
      ref={hoverRef}
      onClick={action}
    >
      <Icon 
        name='chevron-down'
        size={12}
        rotateBy={rotateBy}
        fill={iconFill}
      />
    </Container>
  )
}

export default Chevron;