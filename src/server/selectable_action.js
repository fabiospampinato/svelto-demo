
/* SELECTABLE ACTION */

const requests = {

  '/selectable-action-action': req => {

    const getIds = () => _.castArray ( req.body['ids[]'] ).join ( ', ' );

    return {
      message: `Rows ids: ${getIds ()}`
    };

  },

  '/selectable-action-modal': req => {

    const getIds = () => _.castArray ( req.body['ids[]'] ).join ( ', ' );

    return {
      modal: `<div class="modal container">Rows ids: ${getIds ()}</div>`
    };

  },

  '/selectable-action-panel': req => {

    const getIds = () => _.castArray ( req.body['ids[]'] ).join ( ', ' );

    return {
      panel: `<div class="panel container">Rows ids: ${getIds ()}</div>`
    };

  },

  '/selectable-action-popover': req => {

    const getIds = () => _.castArray ( req.body['ids[]'] ).join ( ', ' );

    return {
      popover: `<div class="popover container">Rows ids: ${getIds ()}</div>`
    };

  }

};

/* EXPORT */

module.exports = requests;
