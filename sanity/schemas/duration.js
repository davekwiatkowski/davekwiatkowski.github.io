const duration = {
  name: 'duration',
  title: 'Duration',
  type: 'object',
  fields: [
    {
      name: 'days',
      title: 'Days',
      type: 'number',
      validation: (Rule) => Rule.min(0),
    },
    {
      name: 'hours',
      title: 'Hours',
      type: 'number',
      validation: (Rule) => Rule.max(24).min(0),
    },
    {
      name: 'minutes',
      title: 'Minutes',
      type: 'number',
      validation: (Rule) => Rule.max(60).min(0),
    },
    {
      name: 'seconds',
      title: 'Seconds',
      type: 'number',
      validation: (Rule) => Rule.max(60).min(0),
    },
  ],
};

export default duration;
