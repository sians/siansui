import PropTypes from 'prop-types';

import RadioButton from './RadioButton';

import { Fieldset } from './styles';

const RadioGroup = ({
  legend,
  name,
  options,
  selected,
  onChange,
  isHorizontal,  
  showFieldset
}) => {
  

  return (
    <Fieldset 
      isHorizontal={isHorizontal}
      showFieldset={showFieldset}
    >
      <legend>{legend}</legend>

      <div 
        className='radio-btns'
        onChange={onChange}
      >
        {options.map((radio, idx) => {
          return (
            <RadioButton 
              id={`${name}Choice${idx+1}`}
              name={name}
              value={radio.value}
              label={radio.label}
              isSelected={selected === radio.value}
            />
          )
        })}
      </div>
    </Fieldset>
  )
}

export default RadioGroup;

RadioGroup.propTypes = {
  legend: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.string.isRequired,
  selected: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  isHorizontal: PropTypes.bool,
  showFieldset: PropTypes.bool,
}

RadioGroup.defaultProps = {
  isHorizontal: false,
  showFieldset: true
}