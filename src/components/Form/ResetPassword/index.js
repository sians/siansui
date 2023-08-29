import { useState } from 'react';

import { FormRow } from '..';
import { Icon, Link, Typography } from 'components';

const ICON_OPACITY = 0.7;


const inputOrder = [
  'newPassword',
  'confirmPassword'
];

const TogglePasswordIcon = ({ isShown, toggleVisibility }) => (
  <Icon
    name={isShown ? 'eye-slash' : 'eye'}
    action={toggleVisibility}
    opacity={ICON_OPACITY}
  />
);


const ResetPassword = ({ values, onChange, formId, errors, onBlur, onFocus }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const inputData = {
    newPassword: {
      formInputType: 'input',
      placeholder: '',
      label: 'New Password',
      name: 'newPassword',
      inputType: showPassword ? 'text' : 'password',
      iconData: {
        rightIcon: <TogglePasswordIcon 
          isShown={showPassword}
          toggleVisibility={() => setShowPassword(prev => !prev)}
        /> 
      },      
    },
    confirmPassword: {
      formInputType: 'input',
      placeholder: '',
      label: 'Confirm Password',
      name: 'confirmPassword',
      inputType: showConfirmPassword ? 'text' : 'password',
      iconData: {
        rightIcon: <TogglePasswordIcon 
        isShown={showConfirmPassword}
        toggleVisibility={() => setShowConfirmPassword(prev => !prev)}
      /> 
      },      
    }
  };

  return inputOrder.map(row => {
    const fieldNames = Array.isArray(row) ? row : [row];
    const fields = fieldNames.reduce((acc, name) => ({ 
      ...acc, 
      [name]: { 
        ...inputData[name], 
        errorText: errors[name], 
        onBlur: (e) => onBlur && onBlur(e),
        onFocus: (e) => onBlur && onFocus(e)
      } 
    }), {});

    return fields && (
      <FormRow
        fields={fields}
        values={values}
        onChange={onChange}
        formId={formId}
        key={`${formId}-row-${fieldNames.join('-')}`}  
      />
    );
  });
};

export default ResetPassword;