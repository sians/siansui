import PropTypes from 'prop-types';
import { useMemo } from 'react';
import { Checkbox, Layout } from 'components';

import { Fieldset } from './styles';

const CheckboxGroup = ({
  options,
  name,
  onChange,
  legend,
  colNum,
  showFieldset
}) => {

  const checkboxes = useMemo(() => {
    if (options?.length > 0) {
      return options.map((box, idx) => {
        return (
          <Checkbox 
            label={box.label}
            id={`${name}Box${idx+1}`}
            onChange={onChange}
            name={name}
            value={box.value}
          />
        )
      })
    }

    return [];
  }, [options])

  return (
    <Fieldset 
      showFieldset={showFieldset}
    >
      <legend>{legend}</legend>    
      <div className='checkbox-btns'>
        <Layout.Grid 
          elements={checkboxes}
          colNum={colNum}
        />
      </div>
    </Fieldset>
  )
}

export default CheckboxGroup;

CheckboxGroup.propTypes = {
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  legend: PropTypes.string,
  colNum: PropTypes.number,
  showFieldset: PropTypes.bool,
}

CheckboxGroup.defaultProps = {
  isHorizontal: false,
  showFieldset: true,
  colNum: 1
}