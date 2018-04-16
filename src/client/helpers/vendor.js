
/* VENDOR */

const vendor = {

  index ( name ) {

    const vendors = {
      cash: {
        path: '/static/vendor/cash.js'
      },
      chart: {
        path: '/static/vendor/Chart.js',
        templates: ['chart']
      },
      datatables: {
        path: '/static/vendor/datatables.js',
        templates: ['datatables', 'datatables_pager']
      },
      jquery: {
        path: '/static/vendor/jquery.js',
        templates: ['datatables', 'datatables_pager']
      },
      lodash: {
        path: '/static/vendor/lodash.js'
      },
      marked: {
        path: '/static/vendor/marked.js',
      },
      polyfill: {
        path: '/static/vendor/babel-polyfill.js'
      }
    };

    const vendor = vendors[name];

    if ( vendor.templates && !vendor.templates.includes ( this.page.template.name ) ) return '';

    return `<script src="${vendor.path}"></script>`;

  }

};

/* EXPORT */

module.exports = vendor;
