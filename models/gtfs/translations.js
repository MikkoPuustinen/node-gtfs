module.exports = {
  filenameBase: 'translations',
  schema: [
    {
      name: 'trans_id',
      type: 'varchar(2047)',
      required: true
    },
    {
      name: 'lang',
      type: 'varchar(255)',
      required: true
    },
    {
      name: 'translation',
      type: 'varchar(2047)',
      required: true
    }
  ]
};
