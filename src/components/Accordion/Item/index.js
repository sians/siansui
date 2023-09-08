import { useRef } from 'react';
import { useTheme } from 'styled-components';
import { Icon, Typography } from 'components';
import { Header, Content } from '../styles';

const Item = ({ item, isActive, toggleActive }) => {
  const theme = useTheme();
  const { label, children, labelSize, showChevron } = item;

  const contentRef = useRef();

  return (
    <div>
      <Header onClick={toggleActive}>
        <Typography.Heading size={labelSize}>{label}</Typography.Heading>
        {showChevron && 
          <Icon 
            name='chevron-down'
            fill={{base: theme.colors.grey.dark}}
            size={14}
            rotateBy={isActive ? 180 : 0}
          />
        }
      </Header>

      <Content
        isExpanded={isActive}
        ref={contentRef}
        height={isActive ? contentRef.current?.scrollHeight : 0}
      >
        {children}
      </Content>
    </div>
  )
}

export default Item;