const race = {
  name: 'race',
  title: 'Race',
  type: 'object',
  fields: [
    {
      name: 'place',
      title: 'Place',
      type: 'number',
      validation: (Rule) => Rule.custom((value) => (!value ? 'This is required.' : true)),
    },
  ],
};

export default race;
