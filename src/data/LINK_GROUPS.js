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
      { text: 'Input', url: '/components/input' },
      { text: 'Radio', url: '/components/radio' },
      { text: 'TextField', url: '/components/text_field' },
      { text: 'Select', url: '/components/select' },
      { text: 'Search', url: '/components/search' },
      { text: 'Button', url: '/components/button' },
      { text: 'Slider', url: '/components/slider' },
    ],
    General: [
      { text: 'Icon', url: '/components/icon' },
      { text: 'Alert', url: '/components/alert' },
      { text: 'Card', url: '/components/card' },
      { text: 'ProgressBar', url: '/components/progress_bar' },
      { text: 'Badge', url: '/components/badge' },
      { text: 'Switch', url: '/components/switch' },
      { text: 'Chip', url: '/components/chip' },
      { text: 'Avatar', url: '/components/avatar' },
      { text: 'AvatarGroup', url: '/components/avatar_group' },
      
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