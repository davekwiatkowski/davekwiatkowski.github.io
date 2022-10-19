const fkt = {
  name: 'fkt',
  title: 'FKT',
  type: 'object',
  fields: [
    {
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: ['Supported', 'Self-supported', 'Unsupported'],
        layout: 'dropdown',
      },
      validation: (Rule) =>
        Rule.custom((value, context) =>
          context.document.type === 'FKT' && !value ? 'This is required.' : true
        ),
    },
  ],
};

export default fkt;
