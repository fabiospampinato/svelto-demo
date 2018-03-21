
/* SELECTABLE ACTION */

const requests = {

  '/selectable-action-action': async req => {

    const {ids} = await req.json ();

    return {
      message: `Rows ids: ${ids.join ( ', ' )}`
    };

  },

  '/selectable-action-modal': async req => {

    const {ids} = await req.json ();

    return {
      modal: `<div class="modal container">Rows ids: ${ids.join ( ', ' )}</div>`
    };

  },

  '/selectable-action-panel': async req => {

    const {ids} = await req.json ();

    return {
      panel: `<div class="panel container">Rows ids: ${ids.join ( ', ' )}</div>`
    };

  },

  '/selectable-action-popover': async req => {

    const {ids} = await req.json ();

    return {
      popover: `<div class="popover container">Rows ids: ${ids.join ( ', ' )}</div>`
    };

  }

};

/* EXPORT */

module.exports = requests;
