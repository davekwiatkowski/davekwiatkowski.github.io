const run = {
  name: 'run',
  title: 'Run',
  type: 'document',
  fields: [
    {
      name: 'date',
      title: 'Date',
      type: 'date',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'course',
      title: 'Course',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'link',
      title: 'Link',
      type: 'url',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'distance',
      title: 'Distance',
      type: 'distance',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'duration',
      title: 'Duration',
      type: 'duration',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: ['Backyard', 'Race', 'FKT'],
        layout: 'dropdown',
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'fktType',
      title: 'FKT type',
      type: 'string',
      options: {
        list: ['Supported', 'Self-supported', 'Unsupported'],
        layout: 'dropdown',
      },
      hidden: ({ parent }) => parent.type !== 'FKT',
      validation: (Rule) =>
        Rule.custom((value, context) =>
          context.document.type === 'FKT' && !value ? 'This is required.' : true
        ),
    },
    {
      name: 'yards',
      title: 'Yards',
      type: 'number',
      hidden: ({ parent }) => parent.type !== 'Backyard',
      validation: (Rule) =>
        Rule.custom((value, context) =>
          context.document.type === 'Backyard' && !value
            ? 'This is required.'
            : true
        ),
    },
    {
      name: 'place',
      title: 'Place',
      type: 'number',
      hidden: ({ parent }) => parent.type !== 'Race',
      validation: (Rule) =>
        Rule.custom((value, context) =>
          context.document.type === 'Race' && !value
            ? 'This is required.'
            : true
        ),
    },
  ],
};

export default run;
