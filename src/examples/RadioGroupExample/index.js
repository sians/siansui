import { useState } from 'react';

import { RadioGroup } from 'components';

const RadioExample = () => {
  const [selected, setSelected] = useState('email');
  const handleSelect = (e) => {
    setSelected(e.target.value);
  }
  const radioGroups = [
    {
      legend: "Please select your preferred contact method:",
      name: 'contact',
      selected: selected,
      onChange: (e) => handleSelect(e),
      options: [
        { 
          label: 'Email',
          value: 'email'
        },
        { 
          label: 'Landline',
          value: 'landline'
        },
        { 
          label: 'Text Message',
          value: 'text'
        },                
      ]
    }
  ]

  return (
    <div>
      {radioGroups.map((groupData, idx) => {
        return (
          <RadioGroup {...groupData} />
        )
      })}
    </div>
  )
}

export default RadioExample;