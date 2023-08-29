import { useState } from 'react';

import { Textarea } from 'components';

const TextareaExample = () => {
  const [description, setDescription] = useState('');
  const handleChange = (e) => {
    setDescription(e.target.value);
  }
  const textareas = [
    {
      name: 'description',
      value: description,
      label: 'Description',
      onChange: (e) => handleChange(e),
      placeholder: 'Start writing your description here...'
    }
  ]

  return (
    <div>
      {textareas.map((groupData, idx) => {
        return (
          <Textarea key={`txta-ex-${idx}`} {...groupData} />
        )
      })}
    </div>
  )
}

export default TextareaExample;