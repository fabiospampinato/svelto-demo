
/* REMOTE PANEL */

const requests = {

  '/remote-panel-left': () => ({
    panel: '<div class="panel left container">Left</div>'
  }),

  '/remote-panel-top': () => ({
    panel: '<div class="panel top container">Top</div>'
  }),

  '/remote-panel-bottom': () => ({
    panel: '<div class="panel bottom container">Bottom</div>'
  }),

  '/remote-panel-right': () => ({
    panel: '<div class="panel right container">Right</div>'
  }),

  '/remote-panel-slim': () => ({
    panel: '<div class="panel bottom slim container">Slim</div>'
  }),

  '/remote-panel-fullscreen': () => ({
    panel: '<div class="panel top fullscreen container">Fullscreen</div>'
  }),

  '/remote-panel-pinned': () => ({
    panel: '<div class="panel left pinned container">Pinned</div>'
  })

};

/* EXPORT */

module.exports = requests;
