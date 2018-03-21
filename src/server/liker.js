
/* LIKER */

const requests = {

  '/liker-update': async req => {

    let {current, state} = await req.json (),
        likes = Number ( current.likes ),
        dislikes = Number ( current.dislikes ),
        prevState = current.state;

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
