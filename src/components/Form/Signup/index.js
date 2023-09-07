import { useMemo } from 'react';
import useMediaQuery from 'hooks/useMediaQuery';
import React, { useState } from 'react';

import { FormRow } from '..';
import { Icon, Link, Typography } from 'components';

const ICON_OPACITY = 0.7;

const inputOrders = {
  desktop: [
    ['firstName', 'lastName'], 
    'email', 
    'password', 
    'confirmPassword',
    'terms',
    ],
  mobile: [
    'firstName',
    'lastName', 
    'email', 
    'password', 
    'confirmPassword',
    'terms',
  ],  
};

const TogglePasswordIcon = ({ isShown, toggleVisibility }) => (
  <Icon
    name={isShown ? 'eye-slash' : 'eye'}
    action={toggleVisibility}
    opacity={ICON_OPACITY}
  />
);

const Signup = ({ values, onChange, formId, errors, onBlur }) => {
  const { isMobile } = useMediaQuery();
  const inputOrder = useMemo(() => {
    return inputOrders[isMobile ? 'mobile' : 'desktop'];
  }, [isMobile])

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const inputData = {
    firstName: {
      formInputType: 'input',
      placeholder: 'Phileas',
      label: 'First name',
      name: 'firstName',
    },
    lastName: {
      formInputType: 'input',
      placeholder: 'Fogg',
      label: 'Last name',
      name: 'lastName',
    },
    email: {
      formInputType: 'input',
      placeholder: 'pfog@tourlemonde.fr',
      label: 'Email',
      name: 'email',
    },    
    password: {
      formInputType: 'input',
      placeholder: 'Enter your password here',
      label: 'Password',
      name: 'password',
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
      placeholder: 'Confirm password',
      label: 'Confirm Password',
      name: 'confirmPassword',
      inputType: showConfirmPassword ? 'text' : 'password',
      iconData: {
        rightIcon: <TogglePasswordIcon 
        isShown={showConfirmPassword}
        toggleVisibility={() => setShowConfirmPassword(prev => !prev)}
      /> 
      },
    },
    terms: {
      formInputType: 'checkbox',
      id: 'TermsBox',
      name: 'terms',
      label: (
        <Typography.Small>I accept the <Link text='Terms of Use' variant='small'/> & <Link text='Privacy Policy' variant='small'/></Typography.Small>
      )

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
        onFocus: (e) => onBlur && onBlur(e)
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

export default Signup;