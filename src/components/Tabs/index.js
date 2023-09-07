import PropTypes from 'prop-types';
import { useState, useRef, useEffect, useMemo } from 'react';
import { useTheme } from 'styled-components';

import useMediaQuery from 'hooks/useMediaQuery';

import { Content, LabelContainer, LabelRow, Label, Active, RowBar } from './styles';

const Tabs = ({ 
  tabs, 
  defaultActiveIdx,
  justifyLabels,
  showLabelBar
}) => {
  const theme = useTheme();
  const { viewportWidth } = useMediaQuery();
  const labelMarginRight = theme.margin*2;

  const labelRefs = useRef([]);
  labelRefs.current = new Array(tabs.length).fill(null);

  const [labelRowWidth, setLabelRowWidth] = useState(0);
  const isOverflow = useMemo(() => {
    return viewportWidth < labelRowWidth
  }, [viewportWidth, labelRowWidth])

  const [activeIdx, setActiveIdx] = useState(defaultActiveIdx);
  const [activeWidth, setActiveWidth] = useState(0); // active underline
  const [leftOffset, setLeftOffset] = useState(0);
  const handleChangeTab = (idx) => setActiveIdx(idx);


  useEffect(() => {  
    if (labelRefs.current.length > 0) {
      const width = labelRefs.current.reduce((acc, v) => {
        return acc + v.offsetWidth + labelMarginRight;
      }, 0);
      setLabelRowWidth(width);
    }
  }, [labelMarginRight])

  useEffect(() => {
    const activeLabelRef = labelRefs.current[activeIdx];
    if (activeLabelRef) {
      const left = labelRefs.current.reduce((acc, v, idx) => {
        return idx < activeIdx && v ? acc + v.offsetWidth + labelMarginRight : acc;
      }, 0); 
      setLeftOffset(left);
      setActiveWidth(activeLabelRef.offsetWidth);
    }
  }, [activeIdx, labelMarginRight]);

  return (
    <div>
      <LabelContainer 
        justify={justifyLabels} 
        isOverflow={isOverflow}
      >
        <LabelRow 
          isOverflow={isOverflow}
          width={labelRowWidth}
        >
          {tabs && tabs.map((tabObj, idx) => {
            const isActive = idx === activeIdx;
            return (
              <Label 
                key={`tab-l-${idx}`}
                ref={elem => labelRefs.current[idx] = elem}
                isActive={isActive}
                marginRight={labelMarginRight}
                onClick={() => handleChangeTab(idx)}
              >
                {tabObj.label}
              </Label>
            );
          })}
        </LabelRow>
        <RowBar 
          isShowBar={showLabelBar}
          isOverflow={isOverflow}
          width={labelRowWidth}
          labelMargin={labelMarginRight}
        >
          <Active 
            activeWidth={activeWidth}
            leftOffset={leftOffset}
          />
        </RowBar>
      </LabelContainer>

      <Content isOverflow={isOverflow}>
        {tabs[activeIdx]?.children}
      </Content>
    </div>
  );
}

export default Tabs;

Tabs.propTypes = {
  tabs: PropTypes.array,
  defaultActiveIdx: PropTypes.number,
  justifyLabels: PropTypes.string,
  showLabelBar: PropTypes.bool
};

Tabs.defaultProps = {
  defaultActiveIdx: 0,
  justifyLabels: 'flex-start',
  showLabelBar: true
};
