import { useState } from 'react';
import { useTheme } from 'styled-components';

import useMediaQuery from 'hooks/useMediaQuery';
import { Layout, Typography, Button } from 'components';

import FieldMap from './FieldMap';
import FormMap from './FormMap';

import { StyledForm } from './styles';

export const FormField = ({ formInputType, value, onChange, ...props }) => {
  const Component = FieldMap[formInputType];
  return <Component {...props} value={value} onChange={onChange} />;
};

export const FormRow = ({ fields, values, onChange, formId }) => {
  const theme = useTheme()
  return (
  <Layout.Row>
    {Object.keys(fields).map((name, idx) => {
      return (
        <Layout.Col 
          size={12 / Object.keys(fields).length} 
          key={`${formId}-col-${name}`}
          padding={idx !== Object.keys(fields).length - 1 ? {pr: theme.margin} : {}}
        >
          <FormField 
            {...fields[name]} 
            value={values[name]} 
            onChange={onChange} 
            key={`${formId}-input-${name}`}
            isFullWidth
          />
        </Layout.Col>
    )})}
  </Layout.Row>
)};

const Form = ({ formId }) => {
  const { isMobile } = useMediaQuery();
  const theme = useTheme();
  const formObj = FormMap[formId];  
  const [formValues, setFormValues] = useState({});
  const [formErrors, setFormErrors] = useState({});
  const [isValidateOnBlur, setIsValidateOnBlur] = useState(false);
  const handleChange = e => {
    if (formErrors[e.target.name]) {
      setFormErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[e.target.name];
        return newErrors;
      })  
    }
    setFormValues(prev => {
      const newValues = { ...prev };
      newValues[e.target.name] = e.target.value
      return newValues
    })
  }

  const validateField = (value, validations, formValues) => {
    if (!validations) return null;
    
    for (let validation of validations) {
      if (validation.pattern === '.+' && (value === undefined || value === null)) {
        return validation.errorMessage;  // Returning the "is required" error message
      }

      let regex;
      if (validation.pattern) {
        regex = new RegExp(validation.pattern);
        if (!regex.test(value)) {
          return validation.errorMessage;
        }
      } else if (validation.matchField) {
        if (formValues[validation?.matchField] !== value) {
          return validation.errorMessage;
        }
      }
    }
    return null; // no errors
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // after init submit, will now validate fields onBlur
    setIsValidateOnBlur(true);
    const fieldsToValidate = Object.keys(formObj.validates);
    if (!fieldsToValidate.length) return;
    const newErrors = {};
  
    fieldsToValidate.forEach((field) => {
      const validations = formObj.validates[field];
      const errorMessage = validateField(formValues[field], validations, formValues);
      if (errorMessage) {
        newErrors[field] = errorMessage;
      }
    });

    if (Object.keys(newErrors).length) {
      setFormErrors(prev => ({ ...prev, ...newErrors }));
    } else {
      // submit
      setFormErrors({});
    }
  };

  const validateOnBlur = (e) => {
    if (isValidateOnBlur || formObj?.isValidateOnBlur) {
      const errorText = validateField(
        e.target.value, 
        formObj.validates[e.target.name], 
        formValues
      );

      if (errorText) {
        setFormErrors(prev => ({ 
          ...prev, 
          [e.target.name]: errorText 
        }));
      } else if (formErrors[e.target.name]) {
        setFormErrors(prev => {
          const newErrors = { ...prev };
          delete newErrors[e.target.name];
          return newErrors
        })
      }

    }
  }

  const validateOnFocus = (e) => {
    if (e.target.value !== '') {
      validateOnBlur(e);
    }
  }

  return (
    <StyledForm isMobile={isMobile}>
      {formObj && 
        <>
          <Typography.Heading size={2} margin={{mb: theme.margin}}>
            {formObj.title}
          </Typography.Heading>

          <formObj.Component 
            values={formValues}
            errors={formErrors}
            onChange={handleChange}
            onBlur={validateOnBlur}
            onFocus={validateOnFocus}
            formId={formId}
          />

          <Layout.Row margin={{mt: theme.margin}}>
            <Button 
              text={formObj.ctaText}
              variant='primary'
              isFullWidth
              onClick={(e) => handleSubmit(e)}
            />
          </Layout.Row>
        </>
      }
    </StyledForm>
  )
}

export default Form;