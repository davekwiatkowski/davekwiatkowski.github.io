const mainLink = {
  name: 'mainLink',
  title: 'Main link',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'url',
      title: 'URL',
      type: 'url',
      validation: (Rule) => Rule.uri({
        scheme: ['http', 'https', 'mailto'],
      }),
    },
  ],
};

export default mainLink;
