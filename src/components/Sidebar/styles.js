import styled from 'styled-components';

export const Container = styled.div(props => {
  const { theme } = props;

  const padding = theme.sidebarPadding;
  const width = `calc(${theme.sidebarWidth}px - ${padding * 2}px)`

  return {
    minWidth: width,
    maxWidth: width,
    height: `calc(100vh - ${theme.navHeight}px)`,
    borderRight: `1px solid ${theme.colors.grey}`,
    margin: theme.margin,
    overflowY: 'scroll',
    position: 'fixed',

    'h4': {
      borderBottom: `1px solid ${theme.colors.grey}`,
      paddingBottom: theme.margin / 2,
      width: `calc(${theme.sidebarWidth - padding * 2}px - ${theme.margin}px)`,
      margin: `${theme.margin / 2}px 0px`,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      '&:hover': {
        cursor: 'pointer'
      }
    },
  }
})

const ITEM_HEIGHT = 57 + 8;
export const ItemGroup = styled.div(props => {
  const { isExpanded, numItemsInGroup } = props;
  return {
    'ul': {
      overflow: 'hidden',
      transition: 'height 0.5s ease-in-out, opacity 0.3s ease-in-out, visibility 0.3s ease-in-out',
      height: isExpanded ? numItemsInGroup * ITEM_HEIGHT : 0, // Adjust '500px' to fit your needs.
      opacity: isExpanded ? 1 : 0,
      visibility: isExpanded ? 'visible' : 'hidden',
  
    }
  }
})

export const ListItem = styled.li(props => {
  const { theme, isActive } = props;
  
  const width = `calc(${theme.sidebarWidth}px - ${theme.margin * 3}px)`

  return {
    marginBottom: theme.margin / 2,
    width: width,
    height: 25 + theme.margin * 2,
    borderRadius: theme.borderRadius,

    backgroundColor: isActive && theme.colors.mainLighter,
    'button': isActive && {
      color: theme.colors.main,

      '&:hover': {
        color: theme.colors.black
      }
    }
  }
})