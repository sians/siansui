import { FormRow } from '..';

const inputOrder = [
  ['firstName', 'lastName'], 
  'address', 
  'addressLineTwo', 
  'city',
  ['country', 'state', 'zip'],
  'phone'
];

const Shipping = ({ values, onChange, formId }) => {
  const inputData = {
    firstName: {
      formInputType: 'input',
      placeholder: 'First name',
      label: 'First name',
      name: 'firstName',
    },
    lastName: {
      formInputType: 'input',
      placeholder: 'Last name',
      label: 'Last name',
      name: 'lastName',
    },
    address: {
      formInputType: 'input',
      placeholder: 'Address',
      label: 'Address',
      name: 'address',
    },
    addressLineTwo: {
      formInputType: 'input',
      placeholder: 'Address line 2 (optional)',
      label: 'AddressLineTwo',
      name: 'addressLineTwo',
    },  
    city: {
      formInputType: 'input',
      placeholder: 'City',
      label: 'City',
      name: 'city',
    },
    country: {
      formInputType: 'input',
      placeholder: 'Country/Region',
      label: 'Country/Region',
      name: 'country',
    },
    state: {
      formInputType: 'input',
      placeholder: 'State',
      label: 'State',
      name: 'state',
    },
    zip: {
      formInputType: 'input',
      placeholder: 'Zip',
      label: 'Zip',
      name: 'zip',
    },
    phone: {
      formInputType: 'input',
      inputType: 'tel',
      placeholder: 'Phone',
      label: 'Phone',
      name: 'phone',
    },
  };

  return inputOrder.map(row => {
    const fieldNames = Array.isArray(row) ? row : [row];
    const fields = fieldNames.reduce((acc, name) => ({ 
      ...acc, 
      [name]: {...inputData[name], isLabelHidden: true}
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

export default Shipping;