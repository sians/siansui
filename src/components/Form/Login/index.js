import { useState } from 'react';
import { Icon, Input } from 'components';

const ICON_OPACITY = 0.7;
const MAP = {
  input: (props) => <Input {...props} /> 
}

const Login = ({ values, onChange, formId, errors, onBlur }) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleToggleShowPassword = () =>
    setShowPassword(prev => !prev);

  const inputOrder = ['email', 'password'];
  const inputData = {
    email: {
      formInputType: 'input',
      placeholder: 'pfog@tourlemonde.fr',
      label: 'Email',
      name: 'email',
      iconData: {
        leftIcon: <Icon name='user' opacity={ICON_OPACITY}/> 
      }
    },
    password: {
      formInputType: 'input',
      placeholder: 'Enter your password here',
      label: 'Password',
      name: 'password',
      inputType: showPassword ? 'text' : 'password',
      iconData: {
        leftIcon: <Icon name='github' opacity={ICON_OPACITY}/>,
        rightIcon: <Icon 
          name={showPassword ? 'eye-slash' : 'eye'}
          action={handleToggleShowPassword}
          opacity={ICON_OPACITY}
        /> 
      },
    }
  }

  return inputOrder.map(name => {
    const { formInputType, ...props } = inputData[name];

    return MAP[formInputType]?.({
      ...props,
      value: values[name],
      onChange: (e) => onChange(e),
      key: `${formId}-input-${name}`,
      errorText: errors[name],
      onBlur: (e) => onBlur && onBlur(e)
    });
  })
}

export default Login;