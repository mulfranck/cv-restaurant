// General is a collection of functions aided at
// reducing home lots of redundancy

const elc = (tag, cls) => {
  // this function is simple to create a dome element.
  // give that element a class name cls

  let el = document.createElement(tag);

  // if cls is given then add a class attribute for the element
  if (cls) el.classList.add(cls);

  return el;
};

const createList = (type, ...contents) => {
  let el = elc(type);
  let con = contents.map((item) => `<li>${item}</li>`).join(' ');
  el.innerHTML = con;

  return el;
};

export { elc, createList };
