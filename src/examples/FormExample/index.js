import { Layout, Form, Tabs } from 'components';

const TABS = [
  {
    label: 'Login',
    children: <Form formId='login'/>
  },
  {
    label: 'Signup',
    children: <Form formId='signup'/>
  },
  {
    label: 'Forgot Password',
    children: <Form formId='forgotPassword'/>
  },
  {
    label: 'Reset Password',
    children: <Form formId='resetPassword'/>
  },
  {
    label: 'Shipping',
    children: <Form formId='shipping'/>
  },
]

const FormExample = () => {

  return (
    <Layout.Row>
      <Layout.Col size={12}>
        <Tabs tabs={TABS} />
      </Layout.Col>
    </Layout.Row>
  )
}

export default FormExample;