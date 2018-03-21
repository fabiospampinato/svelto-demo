
/* REMOTE POPOVER */

const requests = {

  '/remote-popover-basic': () => ({
    popover: `
      <div class="popover card">
        <div class="card-header">This is a remote popover!</div>
        <div class="card-block">
          <div class="placeholder" style="width:95%; height:10px;"></div>
          <div class="placeholder" style="width:92%; height:10px;"></div>
          <div class="placeholder" style="width:100%; height:10px;"></div>
          <div class="placeholder" style="width:87%; height:10px;"></div>
          <div class="placeholder" style="width:97%; height:10px;"></div>
          <div class="placeholder" style="width:93%; height:10px;"></div>
          <div class="placeholder" style="width:97%; height:10px;"></div>
        </div>
        <div class="card-footer">Footer</div>
      </div>
    `
  }),

  '/remote-popover-body': async req => {

    const {color} = await req.json ();

    return {
      popover: `
        <div class="popover card xs-8">
          <div class="card-header text-center">This is a remote popover!</div>
          <div class="card-block">
            <div class="placeholder" style="width:95%; height:10px;"></div>
            <div class="placeholder" style="width:92%; height:10px;"></div>
            <div class="placeholder" style="width:100%; height:10px;"></div>
            <div class="placeholder" style="width:87%; height:10px;"></div>
            <div class="placeholder" style="width:97%; height:10px;"></div>
            <div class="placeholder" style="width:93%; height:10px;"></div>
            <div class="placeholder" style="width:97%; height:10px;"></div>
          </div>
          <div class="card-footer centerer">
            <div class="button bordered ${color}">${color.toUpperCase ()}</div>
          </div>
        </div>
      `
    };

  },

  '/remote-popover-fullscreen': () => ({
    popover: '<div class="popover fullscreen container">Fullscreen</div>'
  }),

  '/remote-popover-autofocus': () => ({
    popover: `
      <div class="container bordered popover">
        <input class="bordered" autofocus>
      </div>
    `
  })

};

/* EXPORT */

module.exports = requests;
