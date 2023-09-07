import { useMemo } from 'react';
import { useTheme } from 'styled-components';

import useMediaQuery from 'hooks/useMediaQuery';

import { Container, Table, Cell, Header, Row } from '../styles';

const GenericTable = ({ headers, data, renderRow, tableType, minWidth }) => {
  const { viewportWidth } = useMediaQuery();
  const theme = useTheme();

  const isOverflow = useMemo(() => {
    return viewportWidth < minWidth;
  }, [viewportWidth])

  const rowPaddingY = theme.margin;
  return (
    <Container isOverflow={isOverflow}>
      <Table 
        fontFamily='Red Hat Mono'
        minWidth={minWidth}
      >
        <thead>
          <Header 
            paddingY={rowPaddingY}
            paddingX={rowPaddingY * 2}
            isDark={theme.themeName === 'dark'}
          >
            {headers.map((header, idx) => (
              <Cell 
                key={`header-${idx}`} 
                size={header.size}
              >
                {header.title}
              </Cell>
            ))}
          </Header>
        </thead>

        <tbody>
          {data.map((item, idx) => {
            return (
              <Row 
                key={`${tableType}-tr-${idx}`}
                rowIdx={idx} 
                paddingY={rowPaddingY} 
                paddingX={rowPaddingY * 2}
              >
                {renderRow(item, idx)}
              </Row>
            )
          })}
        </tbody>
      </Table>
    </Container>
  )
}

export default GenericTable;
