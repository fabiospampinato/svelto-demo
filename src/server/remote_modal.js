
/* REMOTE MODAL */

const requests = {

  '/remote-modal-1': () => ({
    modal: `
      <form class="card modal xs-8">
        <div class="card-header text-center">This is a remote modal!</div>
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
      </form>
    `
  }),

  '/remote-modal-2': ({ body }) => ({
    modal: `
      <div class="card modal xs-8">
        <div class="card-header text-center">This is a remote modal!</div>
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
          <div class="button bordered ${body.color}">${body.color.toUpperCase ()}</div>
        </div>
      </div>
    `
  }),

  '/remote-modal-fullscreen': () => ({
    modal: `
      <div class="card modal fullscreen">
          <div class="card-header">
            <div class="multiple">
              <span>This is a fullscreen remote modal!</span>
              <div class="spacer"></div>
              <div class="button small modal-closer compact">
                <i class="icon">close</i>
              </div>
            </div>
          </div>
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

  '/remote-modal-autofocus': () => ({
    modal: `
      <div class="container bordered modal xs-8">
        <input class="bordered centered" autofocus>
      </div>
    `
  })

};

/* EXPORT */

module.exports = requests;
