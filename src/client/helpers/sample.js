
/* REQUIRE */

const widget = require ( './widget' );

/* SAMPLE */

const sample = {

  /* STRINGS */

  avatarUrl: () => '/static/sample/avatar.png',

  imageUrl: () => '/static/sample/sample.png',
  imageWideUrl: () => '/static/sample/sample-wide.png',

  photoUrl: () => '/static/sample/photo.jpg',
  photoThumbUrl: () => '/static/sample/photo-thumb.jpg',
  photoThumbBigUrl: () => '/static/sample/photo-thumb-big.jpg',

  text: wordsNr => {

    const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquet tincidunt turpis, in pharetra mi convallis ut. Vivamus eget sodales nibh, eu placerat erat. Vivamus massa urna, volutpat non tempus eget, placerat quis elit. Nullam pretium id arcu sed eleifend. Phasellus sollicitudin quis ante nec ornare. Maecenas nibh eros, vehicula vel eros eget, viverra semper nisi. Nulla facilisi. Praesent pretium porttitor arcu, sit amet consequat neque luctus non. Cras sodales, justo quis tempus dignissim, diam est commodo orci, eget accumsan sem ante vitae sem. Curabitur quam ipsum, porta id sapien in, consectetur auctor nibh. Vivamus egestas ante vel cursus aliquet. In non ante nec velit tempus lacinia nec sollicitudin ex. Phasellus semper lorem a diam scelerisque, sed accumsan erat molestie. Mauris vulputate lacinia erat. Nunc urna risus, facilisis at posuere in, pulvinar quis odio. Maecenas et sollicitudin arcu.';

    if ( wordsNr ) return loremIpsum.toLowerCase ().split ( '.' ).join ( '' ).split ( ',' ).join ( '' ).split ( ' ' ).slice ( 0, wordsNr ).join ( ' ' );

    return loremIpsum;

  },

  /* WIDGETS */

  avatar: function ( cls = '' ) {

    const url = this.helpers.sample.avatarUrl ();

    return `<img src="${url}" class="avatar ${cls}"/>`;

  },

  image: function ( cls = '' ) {

    const url = this.helpers.sample.imageUrl ();

    return `<img src="${url}" class="${cls}"/>`;

  },

  imageWide: function ( cls = '' ) {

    const url = this.helpers.sample.imageWideUrl ();

    return `<img src="${url}" class="${cls}"/>`;

  },

  photo: function ( cls = '' ) {

    const url = this.helpers.sample.photoUrl ();

    return `<img src="${url}" class="${cls}"/>`;

  },

  photoThumb: function ( cls = '' ) {

    const url = this.helpers.sample.photoThumbUrl ();

    return `<img src="${url}" class="${cls}"/>`;

  },

  photoThumbBig: function ( cls = '' ) {

    const url = this.helpers.sample.photoThumbBigUrl ();

    return `<img src="${url}" class="${cls}"/>`;

  },

  paragraph: () => {

    const widths = ['95%', '92%', '100%', '87%', '97%', '93%', '97%'];

    return widths.map ( width => widget.placeholder ( width, 10, false ) ).join ( '' );

  },

  select: ( name = '' ) => {

    return `
      <select name="${name}" placeholder="Select a color...">
        <option value="red" selected="selected">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
        <optgroup label="Special">
          <option value="inherit">Inherit</option>
          <option value="transparent">Transparent</option>
        </optgroup>
      </select>
    `;

  },

  square: function ( cls = '', text ) {

    text = text || this.helpers.sample.text ( 9 );

    return `
      <div class="square-sample ${cls}">
        <p>${text}</p>
      </div>
    `;

  },

  /* CODE */

  css: () => {

    return `
      %widget {
        @include last-child-no-gutter ();
        position: relative;
        margin: 0 0 $gutter;
      }

      .widget {
        @extend %widget;
      }
    `;

  },

  html: () => {

    return `
      <div class="divider">HTML</div>
      <div class="multiple">
        <div class="label">Label</div>
        <div class="button">Button</div>
        <div class="container">Container</div>
      </div>
    `;

  },

  js: () => {

    return `
      (function () {

        'use strict';

        /* SVELTO */

        let Svelto = {
          VERSION: '0.4.0-beta2',
          $: jQuery,
          _: lodash,
          Widgets: {} // Widgets' classes namespace
        };

        /* EXPORT */

        window.Svelto = Svelto;

      }());
    `;

  }

};

/* EXPORT */

module.exports = sample;
