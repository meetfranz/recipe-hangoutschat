module.exports = (Franz) => {
  const getMessages = function getMessages() {
    const muteSelector = '.DQy0Rb';

    // get unread messages
    let directCount = 0;
    document.querySelectorAll('.eM5l9e.FVKzAb').forEach((node) => {
      // Google Chat overrides the muted indicator when there is a direct mention
      if (!node.closest('content[role="listitem"]').querySelector(muteSelector)) {
        directCount += 1;
      }
    });
    let indirectCount = 0;
    document.querySelectorAll('.PL5Wwe.H7du2 .t5F5nf').forEach((node) => {
      if (!node.closest('content[role="listitem"]').querySelector(muteSelector)) {
        indirectCount = +1;
      }
    });
    indirectCount -= directCount;

    // set Franz badge
    Franz.setBadge(directCount, indirectCount);
  };

  document.addEventListener('click', (e) => {
    const { tagName, target, href } = e.target;

    if (tagName === 'A' && target === '_blank') {
      e.preventDefault();
      e.stopImmediatePropagation();
      window.open(href);
    }
  });

  // check for new messages every second and update Franz badge
  Franz.loop(getMessages);
};
