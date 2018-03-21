
/* REQUIRE */

const _ = require ( 'lodash' );

/* WIDGET */

const widget = {

  /* WIDGET */

  action: ( label, action ) => {

    return `<div class="button bordered" onclick="${action}">${label}</div>`;

  },

  checkbox: ( label, name = '', value = '' ) => {

    return `
      <div class="button checkbox right bordered">
        <input type="checkbox" name="${name}" value="${value}">
        <label>${label}</label>
      </div>
    `;

  },

  checkAction: ( label, action, checked = false ) => {

    return `
      <div class="button checkbox right bordered" onclick="${action}">
        <input type="checkbox" ${checked ? 'checked' : ''}>
        <label>${label}</label>
      </div>
    `;

  },

  colorpicker: ( color = '' ) => {

    return `
      <div class="colorpicker">
        <input name="colorpicker" value="${color}">
        <div class="colorpicker-sb">
          <div class="colorpicker-handler"></div>
        </div>
        <div class="colorpicker-hue">
          <div class="colorpicker-handler"></div>
        </div>
      </div>
    `;

  },

  datepicker: ( date = '' ) => {

    return `
      <div class="datepicker">
        <input name="datepicker" value="${date}">
        <div class="datepicker-navigation">
          <div class="button previous" title="Previous month">
            <i class="icon">chevron_left</i>
          </div>
          <div class="datepicker-title">Datepicker</div>
          <div class="button today" title="Today">
            <i class="icon">today</i>
          </div>
          <div class="button next" title="Next month">
            <i class="icon">chevron_right</i>
          </div>
        </div>
        <div class="datepicker-days-names">
          <div title="Monday">M</div>
          <div title="Tuesday">T</div>
          <div title="Wednesday">W</div>
          <div title="Thursday">T</div>
          <div title="Friday">F</div>
          <div title="Saturday">S</div>
          <div title="Sunday">S</div>
        </div>
        <div class="datepicker-days">
          <div class="previous">23</div>
          <div class="previous">24</div>
          <div class="previous">25</div>
          <div class="previous">26</div>
          <div class="previous">27</div>
          <div class="previous">28</div>
          <div class="previous">29</div>
          <div class="previous">30</div>
          <div class="previous">31</div>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
          <div>7</div>
          <div>8</div>
          <div>9</div>
          <div>10</div>
          <div>11</div>
          <div>12</div>
          <div>13</div>
          <div>14</div>
          <div>15</div>
          <div>16</div>
          <div>17</div>
          <div>18</div>
          <div>19</div>
          <div>20</div>
          <div>21</div>
          <div>22</div>
          <div>23</div>
          <div>24</div>
          <div>25</div>
          <div>26</div>
          <div>27</div>
          <div>28</div>
          <div>29</div>
          <div>30</div>
          <div>31</div>
          <div class="next">1</div>
          <div class="next">2</div>
          <div class="next">3</div>
          <div class="next">4</div>
          <div class="next">5</div>
          <div class="next">6</div>
        </div>
      </div>
    `;

  },

  divider: ( title = '' ) => {

    return `
      <div class="divider block">
        <div class="divider-content">${title}</div>
      </div>
    `;

  },

  editor: () => {

    return `
      <div class="editor card bordered">
        <div class="card-header bordered">
          <div class="multiple">
            <div class="multiple joined">
              <div class="button compact small bordered" title="Bold" data-action="bold">
                <i class="icon">format_bold</i>
              </div>
              <div class="button compact small bordered" title="Italic" data-action="italic">
                <i class="icon">format_italic</i>
              </div>
              <div class="button compact small bordered" title="Strikethrough" data-action="strikethrough">
                <i class="icon">strikethrough_s</i>
              </div>
            </div>
            <div class="multiple joined">
              <div class="button compact small bordered" title="Unordered list" data-action="list_unordered">
                <i class="icon">format_list_bulleted</i>
              </div>
              <div class="button compact small bordered" title="Ordered list" data-action="list_ordered">
                <i class="icon">format_list_numbered</i>
              </div>
            </div>
            <div class="multiple joined">
              <div class="button compact small bordered emojipicker-popover-trigger" title="Emoji">
                <i class="icon">insert_emoticon</i>
              </div>
              <div class="button compact small bordered" title="Link" data-action="link">
                <i class="icon">link</i>
              </div>
              <div class="button compact small bordered" title="Image" data-action="image">
                <i class="icon">image</i>
              </div>
              <div class="button compact small bordered" title="Code" data-action="code">
                <i class="icon">code</i>
              </div>
              <div class="button compact small bordered" title="Quote" data-action="quote">
                <i class="icon">format_quote</i>
              </div>
              <div class="button compact small bordered" title="Divider" data-action="divider">
                <i class="icon">remove</i>
              </div>
            </div>
            <div class="multiple joined">
              <div class="button compact small bordered" title="Undo" data-action="undo">
                <i class="icon">undo</i>
              </div>
              <div class="button compact small bordered" title="Redo" data-action="redo">
                <i class="icon">redo</i>
              </div>
            </div>
            <div class="multiple joined">
              <div class="button compact small bordered" title="Store" data-action="store">
                <i class="icon">cloud</i>
              </div>
              <div class="button compact small bordered" title="Unstore" data-action="unstore">
                <i class="icon">cloud_off</i>
              </div>
              <div class="button compact small bordered" title="Restore" data-action="restore">
                <i class="icon">cloud_download</i>
              </div>
            </div>
            <div class="spacer"></div>
            <div class="button compact small bordered" title="Preview" data-action="preview">
              <i class="icon">visibility</i>
            </div>
            <div class="button compact small bordered" title="Fullscreen" data-action="fullscreen">
              <i class="icon">zoom_out_map</i>
            </div>
          </div>
        </div>
        <textarea class="card-block" rows="6"></textarea>
        <div class="card-block editor-preview"></div>
        <div class="card-footer bordered text-center">
          <div class="button secondary">Action</div>
        </div>
      </div>
    `;

  },

  iconAction: ( icon, action ) => {

    return `
      <div class="button bordered compact" onclick="${action}">
        <i class="icon">${icon}</i>
      </div>
    `;

  },

  liker: options => {

    options = _.merge ({
      likes: 0,
      dislikes: 0,
      state: null,
      'state-url': '',
      url: ''
    }, options );

    return `
      <div class="liker" data-state='${JSON.stringify ( options.state )}' data-state-url="${options['state-url']}" data-url="${options.url}">
        <div class="like" data-likes="${options.likes}"></div>
        <div class="dislike" data-dislikes="${options.dislikes}"></div>
      </div>
    `;

  },

  numbox: options => {

    return `
      <div class="numbox" data-min="${options.min}" data-max="${options.max}" data-step="${options.step}">
        <div class="button compact numbox-decreaser">
          <i class="icon">remove</i>
        </div>
        <input value="${options.value}" name="${options.name}" class="autogrow compact">
        <div class="button compact numbox-increaser">
          <i class="icon">add</i>
        </div>
      </div>
    `;

  },

  pager: options => {

    if ( options.total <= 1 ) return;

    options.url = ( options.url || '#' );

    const getUrl = ( nr ) => ( options.url.indexOf ( '{page}' ) !== -1 ? options.url.replace ( '{page}', nr ) : options.url + nr );

    let pager = '<div class="pager">';

    if ( options.current > 1 ) {

      const nr = options.current - 1,
            url = getUrl ( nr );

      pager += `
        <a href="${url}" class="button bordered previous" title="Previous page">
          <i class="icon">chevron_left</i>
          <span>Previous</span>
        </a>
      `;

    }

    if ( options.current < options.total || options.total === Infinity || options.total === 'Infinity' ) {

      const nr = options.current + 1,
            url = getUrl ( nr );

      pager += `
        <a href="${url}" class="button bordered next" title="Next page">
          <span>Next</span>
          <i class="icon">chevron_right</i>
        </a>
      `;

    }

    pager += '</div>';

    return pager;

  },

  pagination: options => {

    if ( options.total < 2 ) return;

    options.url = ( options.url || '#' );

    const getUrl = ( nr ) => ( options.url.indexOf ( '{page}' ) !== -1 ? options.url.replace ( '{page}', nr ) : options.url + nr );

    let pagination = '<div class="pagination multiple joined center-x">';

    if ( options.total === Infinity || options.total == 'Infinity' ) {

      pagination += `<a href="${options.url}" class="button bordered compact">Load more</a>`;

    } else {

      let blocks = ( options.blocks || 9 );

      if ( options.current > 1 ) {

        const nr = options.current - 1,
              url = getUrl ( nr );

        pagination += `
          <a href="${url}" class="button compact bordered previous" title="Previous page">
            <i class="icon">chevron_left</i>
          </a>
        `;

        blocks -= 1;

      }

      let needNext, needCurrent;

      if ( options.current < options.total ) {

        needNext = true;
        blocks -= 1;

      } else {

        needNext = false;

      }

      if ( blocks > 0 ) {

        needCurrent = true;
        blocks -= 1;

      } else {

        needCurrent = false;

      }

      let leftBlocks = options.current - 1,
          rightBlocks = options.total - options.current,
          requiredLeftBlocks = Math.floor ( blocks / 2 ),
          requiredRightBlocks = blocks - requiredLeftBlocks,
          outputedLeftBlocks,
          outputedRightBlocks;

      if ( leftBlocks <= requiredLeftBlocks && rightBlocks <= requiredRightBlocks ) {

        outputedLeftBlocks = leftBlocks,
        outputedRightBlocks = rightBlocks;

      } else if ( leftBlocks <= requiredLeftBlocks ) {

        outputedLeftBlocks = leftBlocks,
        outputedRightBlocks = Math.min ( rightBlocks, blocks - outputedLeftBlocks );

      } else if ( rightBlocks <= requiredRightBlocks ) {

        outputedRightBlocks = rightBlocks,
        outputedLeftBlocks = Math.min ( leftBlocks, blocks - outputedRightBlocks );

      } else {

        outputedLeftBlocks = requiredLeftBlocks,
        outputedRightBlocks = requiredRightBlocks;

      }

      while ( outputedLeftBlocks > 0 ) {

        const nr = options.current - outputedLeftBlocks,
              url = getUrl ( nr );

        pagination += `<a href="${url}" class="button compact bordered" title="Page ${nr}">${nr}</a>`;

        outputedLeftBlocks -= 1;

      }

      if ( needCurrent ) {

        pagination += `<div class="label compact bordered active highlighted" title="Current page">${options.current}</div>`;

      }

      let counter = 1;

      while ( counter <= outputedRightBlocks ) {

        const nr = options.current + counter,
              url = getUrl ( nr );

        pagination += `<a href="${url}" class="button compact bordered" title="Page ${nr}">${nr}</a>`;

        counter += 1;

      }

      if ( needNext ) {

        const nr = options.current + 1,
              url = getUrl ( nr );

        pagination += `
          <a href="${url}" class="button compact bordered next" title="Next page">
            <i class="icon">chevron_right</i>
          </a>
        `;

      }

    }

    pagination += '</div>';

    return pagination;

  },

  placeholder: ( width = 0, height = 0, content = true, ratio = false ) => {

    width = _.isNumber ( width ) ? `${width}px` : width;
    height = _.isNumber ( height ) ? `${height}px` : height;
    content = content !== false && content !== 'false' ? ( _.isString ( content ) ? content : width + ' - ' + height ) : '';

    return `<div class="placeholder" ${ratio ? `data-ratio="${ratio}"` : ''} style="width:${width}; height:${height};">${content}</div>`;

  },

  progressbar: ( value = 0, decimals = 0 ) => {

    return `
      <div data-value="${value}" data-decimals="${decimals}" class="progressbar">
        <div data-value="${value}%" style="min-width:${value}%;" class="progressbar-highlight"></div>
      </div>
    `;

  },

  radio: ( label, name = '', value = '' ) => {

    return `
      <div class="button radio right bordered">
        <input type="radio" name="${name}" value="${value}">
        <label>${label}</label>
      </div>
    `;

  },

  radioAction: ( label, name, action, checked = false ) => {

    return `
      <div class="button radio right bordered" onclick="${action}">
        <input type="radio" name="${name}" ${checked ? 'checked' : ''}>
        <label>${label}</label>
      </div>
    `;

  },

  rater: ( rating, maximum ) => {

    let rater = '<div class="rater">';

    for ( let i = 1; i <= maximum; i++ ) {

      const state = ( rating >= i ? 'active' : ( rating >= i - 0.5 ? 'half-active' : '' ) );

      rater += `<div class="rater-star ${state}"></div>`;

    }

    rater += '</div>';

    return rater;

  },

  slider: options => {

    return `
      <div data-min="${options.min}" data-max="${options.max}" data-step="${options.step}" class="slider">
        <input type="number" name="${options.name}" value="${options.value}">
        <div class="slider-bar">
          <div class="slider-highlight"></div>
        </div>
        <div class="slider-handler">
          <div class="slider-label"></div>
        </div>
      </div>
    `;

  },

  spinner: ( cls = '' ) => {

    return `
      <svg class="spinner ${cls}">
        <circle cx="1.625em" cy="1.625em" r="1.25em"></circle>
      </svg>
    `;

  },

  spinnerLabel: function ( cls = '' ) {

    const spinner = this.helpers.widget.spinner ();

    return `<div class="spinner-label ${cls}">${spinner}</div>`;

  },

  subscriber: options => {

    options = _.merge ({
      counter: 0,
      state: null,
      'state-url': '',
      url: ''
    }, options );

    return `
      <div class="subscriber" data-state='${JSON.stringify ( options.state )}' data-state-url="${options['state-url']}" data-url="${options.url}">
        <div class="toggle"></div>
        <div class="counter" data-counter="${options.counter}"></div>
      </div>
    `;

  },

  switch: options => {

    options = _.merge ({
      'color-on': '',
      'color-off': '',
      name: '',
      value: 0,
      checked: false
    }, options );

    return `
      <div data-color-on="${options['color-on']}" data-color-off="${options['color-off']}" class="switch">
        <input type="checkbox" ${options.checked ? 'checked' : ''} name="${options.name}" value="${options.value}">
        <div class="switch-bar"></div>
        <div class="switch-handler"></div>
      </div>
    `;

  },

  /* TOOLS */

  nowSecs: ( offset = 0 ) => {

    return Math.floor ( Date.now () / 1000 ) - offset;

  }

};

/* EXPORT */

module.exports = widget;
