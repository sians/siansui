import { useMemo } from 'react';
import { chunkAry } from 'utils';
import styled from 'styled-components';

export const Row = styled.div(props => {
  const { padding, theme, align, justify, height, overflowY, spacing } = props;
  const gutter = spacing || theme.margin;  
  const rowPadding = padding || 0;

  return {
    display: 'flex',
    flexDirection: 'row',
    padding: rowPadding,
    width: `calc(100% - ${rowPadding * 2}px)`,
    alignItems: align,
    justifyContent: justify,
    height: height,
    overflowY: overflowY,
    flexWrap: 'wrap',
  }
})

export const Col = styled.div(props => {
  const { size, paddingX, paddingY, theme, justify, align, overflow, maxHeight, gutterSize } = props;
  const padding = `${paddingY || 0}px ${paddingX || 0}px`;
  const widthPercentage = size / 12 * 100;
  const widthSubtractPx = ((paddingX || 0) * 2) + (gutterSize || 0);

  return {
    display: 'flex',
    flexDirection: 'column',
    padding: padding,
    width: `calc(${widthPercentage}% - ${widthSubtractPx}px)`,
    flexWrap: 'wrap',
    justifyContent: justify,
    alignItems: align,
    transition: 'width 0.5s',
    overflow: overflow && overflow,
    maxHeight: maxHeight && maxHeight,
  }
})

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
  }, [elements])

  return (
    <Row>
      <Col size={12}>
      
        {chunkedElements && chunkedElements.map((row, rowIdx) => {
          const isFirstRow = rowIdx === 0;
          return (
            <>
              {!isFirstRow && <Spacer size={gutterSize}/>}            
              <Row 
                key={`grid-r-${rowIdx}`} 
                justify='space-between'
              >
                {row && row.map((elem, elemId) => {
                  const totalMarginSize = gutterSize * (colNum  - 1);
                  const colSubtractSize = totalMarginSize / colNum;
                  return (
                    <>
                      <Col 
                        size={colSize} 
                        key={`grid-c-${elemId}`}
                        gutterSize={colSubtractSize}
                      >
                        {elem} 
                      </Col>
                      
                    </>
                  )
                })}
              </Row>
            </>
          )
        })}

      </Col>
    </Row>
  )
}

export default {
  Row,
  Col,
  Grid
}