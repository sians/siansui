import { useState } from 'react';
import { Layout, InputNumber } from 'components';

const InputNumberExample = () => {
  const [age, setAge] = useState('');
  
  const [cookies, setCookies] = useState('');
  const [isCookiesValid, setIsCookiesValid] = useState(true);
  const handleCookiesChange = (value) => {
    setIsCookiesValid(value%10===0);
    setCookies(value);
  }

  const inputs = [
    {
      placeholder: 42,
      value: age,
      onChange: (e) => setAge(e.target.value),
      label: 'Age',
      name: 'age',
      isRequired: true,
      isAutofocus: true,
    },
    {
      placeholder: 'Multiples of 10',
      value: cookies,
      onChange: (e) => handleCookiesChange(e.target.value),
      label: 'Cookies',
      name: 'cookies',
      errorText: !isCookiesValid && 'Cookies must be in multiples of 10',
      helperText: 'There are 10 cookies per packet.',
      step: 10
    },
  ]

  return (
    <Layout.Row>
      {inputs.map((input, idx) => {
        return (
          <Layout.Col key={`input-example-${idx}`} size={12}>
            <InputNumber {...input}/>
          </Layout.Col>
        )
      })}

    </Layout.Row>
  )
}

export default InputNumberExample;