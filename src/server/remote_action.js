
/* REMOTE ACTION */

const requests = {

  '/remote-action-basic': () => ({
    message: 'Task accomplished Master!'
  }),

  '/remote-action-body': async req => {

    const {color} = await req.json ();

    return {
      message: `Color: "${color}"`
    };

  },

  '/remote-action-refresh': () => ({
    refresh: true
  }),

  '/remote-action-redirect': () => ({
    url: 'https://www.google.com'
  }),

  '/remote-action-noop': () => ({
    noop: true
  })

};

/* EXPORT */

module.exports = requests;
