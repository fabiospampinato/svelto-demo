
/* SUBSCRIBER */

const requests = {

  '/subscriber-update': async req => {

    let {current, state} = await req.json (),
        counter = Number ( current.counter ),
        prevState = current.state;

    if ( state !== prevState ) {
      if ( state === true ) counter++;
      if ( prevState === true ) counter--;
    }

    return { counter, state };

  },

  '/subscriber-state': () => ({
    state: true
  })

};

/* EXPORT */

module.exports = requests;
