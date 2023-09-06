import PropTypes from 'prop-types';
import { useState, useRef, useEffect } from 'react';
import { useTheme } from 'styled-components';

import { Layout } from 'components';

import { Label, Active, RowBar } from './styles';

const Tabs = ({ 
  tabs, 
  defaultActiveIdx,
  justifyLabels,
  showLabelBar
}) => {
  const theme = useTheme();
  const labelMarginRight = theme.margin*2;

  const labelRefs = useRef([]);
  labelRefs.current = new Array(tabs.length).fill(null);

  const [activeIdx, setActiveIdx] = useState(defaultActiveIdx);
  const [activeWidth, setActiveWidth] = useState(0);
  const [leftOffset, setLeftOffset] = useState(0);
  const handleChangeTab = (idx) => setActiveIdx(idx);

  useEffect(() => {
    const activeLabelRef = labelRefs.current[activeIdx];
    if (activeLabelRef) {
      const left = labelRefs.current.reduce((acc, v, idx) => {
        return idx < activeIdx && v ? acc + v.offsetWidth + labelMarginRight : acc;
      }, 0); 
      setLeftOffset(left);
      setActiveWidth(activeLabelRef.offsetWidth);
    }
  }, [activeIdx]);
  

  return (
    <div>
      <Layout.Row justify={justifyLabels}>
        {tabs && tabs.map((tabObj, idx) => {
          const isActive = idx === activeIdx;
          return (
            <Label 
              ref={elem => labelRefs.current[idx] = elem}
              isActive={isActive}
              marginRight={labelMarginRight}
              onClick={() => handleChangeTab(idx)}
            >
              {tabObj.label}
            </Label>
          );
        })}

        <RowBar isShowBar={showLabelBar}>
          <Active 
            activeWidth={activeWidth}
            leftOffset={leftOffset}
          />
        </RowBar>
      </Layout.Row>

      <div>
        {tabs[activeIdx]?.children}
      </div>
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
