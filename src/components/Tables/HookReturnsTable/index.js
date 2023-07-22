import { Container, Row, Cell, Header } from '../styles';
import { TypeString } from 'components';

import theme from 'theme';

const ROW_PADDING_Y = theme.margin;

const TableRow = ({ propObj, rowIdx }) => {
  return (
    <Row rowIdx={rowIdx} paddingY={ROW_PADDING_Y} paddingX={ROW_PADDING_Y * 2}>
      {propObj && (
        <>
          <Cell size={2.5}>
            <strong>
              {propObj.name}
            </strong>
          </Cell>

          <Cell size={7.5}>
            {propObj.description}
          </Cell>

          <Cell size={2}>
            <TypeString string={propObj.propType} />
          </Cell>   
        </>
      )}
    </Row>
  )
}


const HookReturnsTable = ({ data }) => {

  return (
    <Container fontFamily='Red Hat Mono'>
      <Header 
        paddingY={ROW_PADDING_Y}
        paddingX={ROW_PADDING_Y * 2}
        backgroundColor={`${theme.colors.grey}60`}
      >
        <Cell size={2.5}>
          Name
        </Cell>

        <Cell size={7.5}>
          Description
        </Cell>

        <Cell size={2}>
          Type
        </Cell>   
      </Header>

      {data && data.map((propObj, propIdx) => {
        return (
          <TableRow 
            key={`pt-${propIdx}`} 
            rowIdx={propIdx}
            propObj={propObj}
          />
        )
      })}
    </Container>
  )
}

export default HookReturnsTable;
