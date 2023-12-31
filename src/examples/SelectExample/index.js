import { Layout, Select } from 'components';
import OPTIONS from './OPTIONS';

const SelectExample = () => {
  const handleChange = (e) => {
    console.log(e)
  }

  const selects = [
    {
      options: OPTIONS,
      onChange: (e) => handleChange(e),
      isMulti: true
    },
  ]

  return (
    <Layout.Row>
      {selects.map((select, idx) => {
        return (
          <Layout.Col key={`select-example-${idx}`} size={12}>
            <Select {...select}/>
          </Layout.Col>
        )
      })}
    </Layout.Row>
  )
}

export default SelectExample;