// TODO: refactor into useSidebar hook?

const LINK_GROUPS = {
  components: {
    Layout: [
      { text: 'Row', url: '/components/row' },
      { text: 'Col', url: '/components/col' },  
      { text: 'Grid', url: '/components/grid' },  
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
      { text: 'Switch', url: '/components/switch' },
      { text: 'Chip', url: '/components/chip' },
    ],  
  },
  hooks: {
    Custom: [
      { text: 'useFocus', url: '/hooks/use_focus' },
      { text: 'useHover', url: '/hooks/use_hover' },
      { text: 'useKeyPress', url: '/hooks/use_key_press' },
      { text: 'useTimeout', url: '/hooks/use_timeout' },
    ],
    Auth: [
      { text: 'useAuth', url: '/hooks/use_auth' },
    ],
  }
  // ...
}

export default LINK_GROUPS;