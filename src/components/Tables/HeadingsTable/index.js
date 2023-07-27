import { Container, Row, Cell, Header } from '../styles';
import { TypeString } from 'components';

import theme from 'theme';

const ROW_PADDING_Y = theme.margin;

const TableRow = ({ propObj, rowIdx }) => {
  const { html, eg, use } = propObj;
  return (
    <Row rowIdx={rowIdx} paddingY={ROW_PADDING_Y} paddingX={ROW_PADDING_Y * 2}>
      {propObj && (
        <>
          <Cell size={2}>
            <strong>
              {html}
            </strong>
          </Cell>

          <Cell size={6}>
            {eg}
          </Cell>

          <Cell size={4}>
            {use}
          </Cell>   
        </>
      )}
    </Row>
  )
}


const HeadingsTable = ({ data }) => {

  return (
    <Container fontFamily='Red Hat Mono'>
      <Header 
        paddingY={ROW_PADDING_Y}
        paddingX={ROW_PADDING_Y * 2}
        backgroundColor={`${theme.colors.grey}60`}
      >
        <Cell size={2}>
          HTML
        </Cell>

        <Cell size={6}>
          Eg.
        </Cell>

        <Cell size={4}>
          Application
        </Cell>
      </Header>

      {data && data.map((obj, propIdx) => {
        return (
          <TableRow 
            key={`pt-${propIdx}`} 
            rowIdx={propIdx}
            propObj={obj}
          />
        )
      })}
    </Container>
  )
}

export default HeadingsTable;
