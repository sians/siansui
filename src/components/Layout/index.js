import { useMemo } from 'react';
import { chunkAry } from 'utils';
import styled from 'styled-components';

import Row from './Row';
import Col from './Col';



const Spacer = styled.div(props => {
  return {
    width: '100%',
    height: props.size
  }
})
const Grid = ({ elements, gutterSize, colNum }) => {
  const colSize = 12 / colNum;

  const chunkedElements = useMemo(() => {
    if (elements.length > 0) {
      const chunked = chunkAry(elements, colNum);

      // add empty grid objects to maintain layout
      const lastChunk = chunked[chunked.length - 1];
      const lastChunkLength = chunked[chunked.length - 1]?.length;
      if(lastChunkLength < colNum) {
        for(let i = lastChunkLength; i < colNum; i++) {
          lastChunk.push(<div/>);
        }
      }

      return chunked;
    }
  }, [elements, colNum])

  return (
    <Row>
      <Col size={12}>
      
        {chunkedElements && chunkedElements.map((row, rowIdx) => {
          const isFirstRow = rowIdx === 0;
          return (
            <div key={`grid-r-${rowIdx}`} >
              {!isFirstRow && <Spacer size={gutterSize}/>}
              <Row  
                justify='space-between'
              >
                {row && row.map((elem, elemId) => {
                  const totalMarginSize = gutterSize * (colNum  - 1);
                  const colSubtractSize = totalMarginSize / colNum;
                  return (
                      <Col 
                        size={colSize} 
                        key={`grid-${rowIdx}-c-${elemId}`}
                        gutterSize={colSubtractSize}
                      >
                        {elem} 
                      </Col>
                  )
                })}
              </Row>
            </div>
          )
        })}

      </Col>
    </Row>
  )
}

export const Layout = {
  Row,
  Col,
  Grid
}