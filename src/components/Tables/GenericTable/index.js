import { useTheme } from 'styled-components';
import { Container, Cell, Header, Row } from '../styles';

const GenericTable = ({ headers, data, renderRow, tableType }) => {
  const theme = useTheme();
  const rowPaddingY = theme.margin;
  return (
    <Container fontFamily='Red Hat Mono'>
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
    </Container>
  )
}

export default GenericTable;
