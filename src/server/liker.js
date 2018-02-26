
/* LIKER */

const requests = {

  '/liker-update': ({ body }) => {

    const likes = Number ( body.current.likes ),
          dislikes = Number ( body.current.dislikes ),
          prevState = body.current.state,
          state = body.state;

    if ( state !== prevState ) {
      if ( state === true ) likes++;
      if ( state === false ) dislikes++;
      if ( prevState === true ) likes--;
      if ( prevState === false ) dislikes--;
    }

    return { likes, dislikes, state };

  },

  '/liker-state': () => ({
    state: true
  })

};

/* EXPORT */

module.exports = requests;
