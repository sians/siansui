import { Container, Cell, Header, Row } from '../styles';

import theme from 'theme';

const ROW_PADDING_Y = theme.margin;

const GenericTable = ({ headers, data, renderRow, tableType }) => {
  return (
    <Container fontFamily='Red Hat Mono'>
      <thead>
        <Header 
          paddingY={ROW_PADDING_Y}
          paddingX={ROW_PADDING_Y * 2}
          backgroundColor={`${theme.colors.grey}60`}
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
              paddingY={ROW_PADDING_Y} 
              paddingX={ROW_PADDING_Y * 2}
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
