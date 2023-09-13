const DUMMY_DATA = {
  name: 'root',
  children: [
    {
      name: 'components',
      children: [
        {
          name: 'Layout',
          children: [
            { name: 'Row', data: { widgets: [] } },
            { name: 'Col', data: { widgets: [] } },
            { name: 'Grid', data: { widgets: [] } },
            { name: 'Tabs', data: { widgets: [] } },
            { name: 'Accordion', data: { widgets: [] } }
          ]
        },
        {
          name: 'Typography',
          children: [
            { name: 'Heading', data: { widgets: [] } },
            { name: 'Body', data: { widgets: [] } },
            { name: 'Small', data: { widgets: [] } },
            { name: 'Code', data: { widgets: [] } },
            { name: 'Link', data: { widgets: [] } }
          ]
        },
        {
          name: 'Forms',
          children: [
            { name: 'Form', data: { widgets: [] } },
            { name: 'Input', data: { widgets: [] } },
            { name: 'InputNumber', data: { widgets: [] } },
            { name: 'Textarea', data: { widgets: [] } },
            { name: 'Radio', data: { widgets: [] } },
            { name: 'Checkbox', data: { widgets: [] } },
            { name: 'Select', data: { widgets: [] } },
            { name: 'Slider', data: { widgets: [] } }
          ]
        },
        {
          name: 'General',
          children: [
            { name: 'Icon', data: { widgets: [] } },
            { name: 'Alert', data: { widgets: [] } },
            { name: 'Badge', data: { widgets: [] } },
            { name: 'Switch', data: { widgets: [] } },
            { name: 'Chip', data: { widgets: [] } },
            { name: 'Avatar', data: { widgets: [] } },
            { name: 'AvatarGroup', data: { widgets: [] } }
          ]
        }
      ]
    },
    {
      name: 'hooks',
      children: [
        {
          name: 'Custom',
          children: [
            { name: 'useFocus', data: { widgets: [] } },
            { name: 'useHover', data: { widgets: [] } },
            { name: 'useKeyPress', data: { widgets: [] } }
          ]
        }
      ]
    }
  ]
};

export default DUMMY_DATA;