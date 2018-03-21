
/* FORM AJAX */

const requests = {

  '/form-ajax-basic': async req => {

    const formData = await req.formData ();

    return {
      message: `Form submitted using ajax! What's "${formData.get ( 'input_1' )}"?`
    };

  },

  '/form-ajax-file': async req => {

    const formData = await req.formData ();

    return {
      message: `Form submitted using ajax! "${formData.get ( 'file' ).name}" has been uploaded too!`
    };

  }

};

/* EXPORT */

module.exports = requests;
