import styled from 'styled-components';

const SIZES = {
  sm: { width: 10 },
  md: { width: 18, font: 10 },
  lg: { width: 32, font: 18 },
}
export const Container = styled.div(props => {
  const { theme, size, numberStr } = props;
  const badgeSize = SIZES[size]?.width || 16;
  const xPadding = numberStr?.length > 1 ? theme.margin / 6 : 0;

  return {
    position: 'relative',
    width: 'fit-content',
    '.badge': {
      backgroundColor: theme.colors.danger,
      color: theme.colors.bg,
      boxShadow: theme.boxShadow.big,
      height: badgeSize,
      width: badgeSize,
      borderRadius: 8,
      position: 'absolute',
      // top: -theme.margin / 1.5,
      // right: -theme.margin / 1.5,
      top: -4,
      right: -4,

      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: SIZES[size]?.font,
      fontWeight: 700,
      padding: `0px ${xPadding}px`
    }
  }
})