// TODO: refactor into useSidebar hook?

const LINK_GROUPS = {
  Layout: [
    { text: 'Row', url: '/components/row' },
    { text: 'Col', url: '/components/col' },  
  ],
  Typography: [
    { text: 'Heading', url: '/components/heading' },
    { text: 'Body', url: '/components/body' },  
    { text: 'Small', url: '/components/small' },
    { text: 'Code', url: '/components/code' },  
    { text: 'Link', url: '/components/link' },  
  ],
  Forms: [
    { text: 'Form', url: '/components/form' },
    { text: 'TextInput', url: '/components/text_input' },
    { text: 'TextField', url: '/components/text_field' },
    { text: 'Select', url: '/components/select' },
    { text: 'Search', url: '/components/search' },
    { text: 'Button', url: '/components/button' },
  ],
  General: [
    { text: 'Icon', url: '/components/icon' },
    { text: 'Card', url: '/components/card' },
    { text: 'ProgressBar', url: '/components/progress_bar' },
    { text: 'Badge', url: '/components/badge' },
  ],  
  // ...
}

export default LINK_GROUPS;