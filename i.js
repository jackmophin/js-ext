console.debug('%cEXT Toolkit for Javascript 0.1.1', 'color: #4CAF50; font-weight: bold; font-size: 16px;');

// CONFIG

const ext = {
  id: function (selector, parent = null) {
    const scope = parent instanceof HTMLElement ? parent : document;
    return scope.getElementById(selector);
  },

  cls: function (selector, parent = null) {
    const scope = parent instanceof HTMLElement ? parent : document;
    return scope.getElementsByClassName(selector);
  },

  tag: function (selector, parent = null) {
    const scope = parent instanceof HTMLElement ? parent : document;
    return scope.getElementsByTagName(selector);
  },

  q: function (selector, parent = null) {
    const scope = parent instanceof HTMLElement ? parent : document;
    return scope.querySelector(selector);
  },

  all: function (selector, parent = null) {
    const scope = parent instanceof HTMLElement ? parent : document;
    return scope.querySelectorAll(selector);
  },

  log: function (title, text = '', color = '#ffffff') {
    console.log(
      `%c[EXT] ${title}\n%c${text}`,
      'color: #00c8ff; font-weight: bold; font-size: 13px;',
      `color: ${color}; font-weight: normal;`
    );
  }
};
