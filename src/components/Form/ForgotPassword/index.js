import { FormRow } from '..';

const inputOrder = [
  'email'
];

const ForgotPassword = ({ values, onChange, formId, errors, onBlur }) => {
  const inputData = {
    email: {
      formInputType: 'input',
      placeholder: 'pfog@tourlemonde.fr',
      label: 'Email',
      name: 'email',
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

export default ForgotPassword;