import { useState } from 'react';
import { Layout, Input, Icon } from 'components';

const InputExample = () => {
  const [fullName, setFullName] = useState('');
  const [age, setAge] = useState(undefined);
  const [password, setPassword] = useState('');

  const [showPassword, setShowPassword] = useState(false);
  const handleToggleShowPassword = () =>
    setShowPassword(prev => !prev);

  const iconOpacity = 0.7;

  const inputs = [
    {
      placeholder: 'Phileas Fog',
      value: fullName,
      onChange: (e) => setFullName(e.target.value),
      label: 'Full Name',
      name: 'full name',
    },
    {
      placeholder: 'pfog@tourlemonde.fr',
      value: age,
      onChange: (e) => setAge(e.target.value),
      label: 'Email',
      name: 'email',
      iconData: {
        leftIcon: <Icon name='user' opacity={iconOpacity}/> 
      }
    },
    {
      placeholder: 'Enter your password here',
      value: password,
      onChange: (e) => setPassword(e.target.value),
      label: 'Password',
      name: 'password',
      inputType: showPassword ? 'text' : 'password',
      iconData: {
        leftIcon: <Icon name='github' opacity={iconOpacity}/>,
        rightIcon: <Icon 
          name={showPassword ? 'eye-slash' : 'eye'}
          action={handleToggleShowPassword}
          opacity={iconOpacity}
        /> 
      },
    },    
  ]

  return (
    <Layout.Row>
      {inputs.map((input, idx) => {
        return (
          <Layout.Col key={`input-example-${idx}`} size={12}>
            <Input {...input}/>
          </Layout.Col>
        )
      })}

    </Layout.Row>
  )
}

export default InputExample;