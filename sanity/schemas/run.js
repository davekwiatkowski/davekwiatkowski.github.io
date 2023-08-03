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
        list: ['Backyard', 'Race', 'FKT', 'Adventure'],
        layout: 'dropdown',
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'backyard',
      title: 'Backyard',
      type: 'backyard',
      hidden: ({ parent }) => parent.type !== 'Backyard',
    },
    {
      name: 'race',
      title: 'Race',
      type: 'race',
      hidden: ({ parent }) => parent.type !== 'Race',
    },
    {
      name: 'fkt',
      title: 'FKT',
      type: 'fkt',
      hidden: ({ parent }) => parent.type !== 'FKT',
    },
  ],
};

export default run;
