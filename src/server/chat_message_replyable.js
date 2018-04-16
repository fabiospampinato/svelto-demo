
/* CHAT MESSAGE REPLYABLE */

const requests = {

  '/chat-message-replyable': () => {

    return `
      <div class="chat-message-content card bordered">
        <textarea placeholder="Reply..." class="card-block autofocus"></textarea>
      </div>
    `;

  }

};

/* EXPORT */

module.exports = requests;
