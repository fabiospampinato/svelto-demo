
/* REMOTE LOADER */

const requests = {

  '/remote-loader-text': () => '<span>Remote loaded content</span>',

  '/remote-loader-json': () => ({
    html: '<span>JSON-loaded content</span>'
  }),

  '/remote-loader-widget': () => '<div class="button ripple ripple-primary">Rippable</div>',

  '/remote-loader-no-wrap': () => '<span>Not wrapped content</span>',

  '/remote-loader-json-wrong': () => ({}),

  '/remote-loader-json-message': () => ({
    message: '<span>Error message...</span>'
  }),

  '/remote-loader-scroll': () => ({
    message: '<span>Loaded!</span>'
  }),

  '/remote-loader-preload': () => ({
    html: '<span>Preloaded!</span>'
  }),

  '/remote-loader-autofocus': () => ({
    html: '<input class="bordered" autofocus>'
  }),

  '/remote-loader-target': () => ({
    html: `
      <p class="ok">...remote loaded content...</p>
      <p class="ok">...that matches the selector</p>
      <p>I don't match the selector</p>
    `
  })

};

/* EXPORT */

module.exports = requests;
