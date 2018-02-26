
/* ACTION */

const requests = {

  '/action-action': () => ({
    message: 'This is an action'
  }),

  '/action-modal': () => ({
    modal: '<div class="modal container">This is a modal</div>'
  }),

  '/action-panel': () => ({
    panel: '<div class="panel container">This is a panel</div>'
  }),

  '/action-popover': () => ({
    popover: '<div class="popover container">This is a popover</div>'
  })

};

/* EXPORT */

module.exports = requests;
