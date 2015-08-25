AdminConfig = {
  name: 'Recycle project',
  adminEmails: ['denis.fegnoux@gmail.com'],
  collections: {
    Trashs: {
      tableColumns: [
        { label: 'Title', name: 'title' },
        { label: 'Materials', name: 'materialsList()' },
        { label: 'Garbage', name: 'bestGarbage()'}
      ]
    },
    Types: {
      // collection options
    },
    Materials: {
      tableColumns: [
        { label: 'Title', name: 'title' },
        { label: 'Garbage', name: 'garbageName()' }
      ]
    },
    Garbages: {
      tableColumns: [
        { label: 'Title', name: 'title' },
        { label: 'Priority', name: 'priority' }
      ]
    }
  }
};