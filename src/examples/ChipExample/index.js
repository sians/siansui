import { useState } from 'react';
import { Layout, Chip } from 'components';

const DATA = [
  {
    text: "Pink",
    variant: 'solid'
  },
  {
    text: "Red",
    variant: 'solid'
  },
  {
    text: "Black",
    variant: 'solid'
  },
]

const ChipExample = () => {
  const [data, setData] = useState(DATA);

  const handleRemove = (e, idx) => {
    e.stopPropagation();
    const newData = data.slice(0, idx).concat(data.slice(idx + 1));
    setData(newData);
  }

  const handleClick = (idx) => {
    const updatedChip = { 
      ...data[idx], 
      variant: data[idx].variant === 'solid' ? 'outline' : 'solid'
    };
    const newData = [ ...data ]
    newData[idx] = updatedChip;
    setData(newData);
  }
  
  return (
    <Layout.Row>
      {data.map((elem, idx) => {
        console.log(elem)
        return (
          <Chip 
            key={`chip-${idx}`}
            text={elem.text}
            iconName='magic'
            variant={elem.variant}
            onRemove={(e) => handleRemove(e, idx)}
            hasRemove
            size='md'
            action={() => handleClick(idx)}
          />  
        )
      })}
    </Layout.Row>
  )
}

export default ChipExample;