
/* FORM AJAX */

const requests = {

  '/form-ajax-basic': req => { //FIXME

    const form = reqParse ( req );

    return {
      message: `Form submitted using ajax! What's "${form.fields.input_1}"?`
    };

  },

  '/form-ajax-file': req => { //FIXME

    const form = reqParse ( req );

    return {
      message: `Form submitted using ajax! "${form.files.file.name}" has been uploaded too!`
    };

  }

};

/* EXPORT */

module.exports = requests;
