import Login from './Login';
import Signup from './Signup';
import ForgotPassword from './ForgotPassword';
import ResetPassword from './ResetPassword';
import Shipping from './Shipping';

const FormMap = {
  login: {
    title: 'Login',
    Component: Login,
    ctaText: 'Submit',
    validates: {
      email: [
        { pattern: '.+', errorMessage: 'Email is required.'},
        { 
          pattern: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$',
          errorMessage: 'Must be a valid email address.'
        },

      ],
      password: [
        { pattern: '.+', errorMessage: 'Password is required.' },        
        {
          pattern: '^.{8,20}$',
          errorMessage: 'Password should be 8-20 characters.'
        },
        {
          pattern: '^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{1,}$',
          errorMessage: 'Password should include at least 1 letter, 1 number & 1 special character.'
        },
      
      ]
    }
    
  },
  signup: {
    title: 'Signup',
    Component: Signup,
    ctaText: 'Submit',
    validates: {
      firstName: [
        { pattern: '.+', errorMessage: 'First name is required.' },
      ],
      email: [
        { pattern: '.+', errorMessage: 'Email is required.' },        
        { 
          pattern: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$',
          errorMessage: 'Must be a valid email address.'
        },
      ],
      password: [
        { pattern: '.+', errorMessage: 'Password is required.' },
        {
          pattern: '^.{8,20}$',
          errorMessage: 'Password should be 8-20 characters.'
        },
        {
          pattern: '^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{1,}$',
          errorMessage: 'Password should include at least 1 letter, 1 number & 1 special character.'
        },
      ],
      confirmPassword: [
        { pattern: '.+', errorMessage: 'Password confirmation is required.' },
        {
          matchField: 'password',
          errorMessage: "Passwords don't match."
        }
      ]
    }    
  },
  forgotPassword: {
    title: 'Forgot Password',
    Component: ForgotPassword,
    ctaText: 'Submit',
    validates: {
      email: [
        { pattern: '.+', errorMessage: 'Email is required.' },        
        { 
          pattern: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$',
          errorMessage: 'Must be a valid email address.'
        },
      ]
    }
  },
  resetPassword: {
    title: 'Reset Password',
    Component: ResetPassword,
    ctaText: 'Submit',
    isValidateOnBlur: true,
    validates: {
      newPassword: [
        { pattern: '.+', errorMessage: 'Password is required.' },
        {
          pattern: '^.{8,20}$',
          errorMessage: 'Password should be 8-20 characters.'
        },
        {
          pattern: '^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{1,}$',
          errorMessage: 'Password should include at least 1 letter, 1 number & 1 special character.'
        },
      ],
      confirmPassword: [
        { pattern: '.+', errorMessage: 'Password confirmation is required.' },
        {
          matchField: 'newPassword',
          errorMessage: "Passwords don't match."
        }
      ]
    }
  },  
  shipping: {
    title: 'Shipping',
    Component: Shipping,
    ctaText: 'Next',
    validates: [],
  }
}

export default FormMap;