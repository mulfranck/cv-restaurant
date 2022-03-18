// General is a collection of functions aided at
// reducing home lots of redundancy

const elc = (tag, content = null, cls) => {
  /* this function is simple to create a dome element.*/
  // give that element a class name cls

  let el = document.createElement(tag);

  // if cls is given then add a class attribute for the element
  if (cls) {
    if (cls.indexOf(' ') > -1) {
      cls.split(' ').forEach((cl) => {
        el.classList.add(cl);
      });
    } else el.classList.add(cls);
  }

  if (content != null) el.innerText = content;

  return el;
};

const createList = (type, ...contents) => {
  let el = elc(type);
  let con = contents.map((item) => `<li>${item}</li>`).join(' ');
  el.innerHTML = con;

  return el;
};

const addChild = (parent, child) => {
  return parent.appendChild(child);
};

export { elc, createList, addChild };
