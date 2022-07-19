const distance = {
  name: 'distance',
  title: 'Distance',
  type: 'object',
  fields: [
    {
      name: 'amount',
      title: 'Amount',
      type: 'number',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'unit',
      title: 'Unit',
      type: 'string',
      options: {
        list: ['Miles', 'Kilometers'],
        layout: 'dropdown',
      },
      validation: (Rule) => Rule.required(),
    },
  ],
};

export default distance;
