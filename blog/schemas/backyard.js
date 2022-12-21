const backyard = {
  name: 'backyard',
  title: 'Backyard',
  type: 'object',
  fields: [
    {
      name: 'yards',
      title: 'Yards',
      type: 'number',
      validation: (Rule) => Rule.custom((value) => (!value ? 'This is required.' : true)),
    },
    {
      name: 'place',
      title: 'Place',
      type: 'string',
      options: {
        list: ['Win', 'Assist', 'DNF'],
        layout: 'dropdown',
      },
      validation: (Rule) => Rule.custom((value) => (!value ? 'This is required.' : true)),
    },
  ],
};

export default backyard;
