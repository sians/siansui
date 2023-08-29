import { Layout, Form } from 'components';

const FormExample = () => {
  // TODO: put in a tab component the diff forms

  return (
    <Layout.Row>
      <Layout.Col size={12}>
        Form Examples:
        <Form formId='shipping'/>
        {/* <Form formId='login'/>
        <Form formId='signup'/>
        <Form formId='forgotPassword'/>
        <Form formId='resetPassword'/> */}
      </Layout.Col>
    </Layout.Row>
  )
}

export default FormExample;