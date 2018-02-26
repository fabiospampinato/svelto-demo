
/* SUBSCRIBER */

const requests = {

  '/subscriber-update': ({ body }) => {

    const counter = Number ( body.current.counter ),
          prevState = body.current.state,
          state = body.state;

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
