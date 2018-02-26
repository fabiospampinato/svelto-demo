
/* REMOTE ACTION */

const requests = {

  '/remote-action-1': () => ({
    message: 'Task accomplished Master!'
  }),

  '/remote-action-2': ({ body }) => ({
    message: `Color: "${body.color}"`
  }),

  '/remote-action-3': () => ({
    refresh: true
  }),

  '/remote-action-4': () => ({
    url: 'https://www.google.com'
  }),

  '/remote-action-5': () => ({
    noop: true
  })

};

/* EXPORT */

module.exports = requests;
