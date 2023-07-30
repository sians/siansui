import { useState, useCallback } from 'react';

import { Slider } from 'components';

import theme from 'theme';

const SliderExample = () => {
  const [value, setValue] = useState(70);
  const handleSliderChange = useCallback((v) => {
    setValue(v);
  }, [])

  return (
    <div>
      <Slider 
        value={value}
        onChange={handleSliderChange}
        icons={['cards-sm', 'cards-lg']}
        iconFill={theme.colors.darkerGrey}
        step={10}
        min={0}
        max={210}
        size='sm'
      />

      The Slider value is: {value}
    </div>
  )
}

export default SliderExample;