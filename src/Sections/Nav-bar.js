import _ from 'lodash';
import { createList, elc } from '../general';
import Menu from '../pages/Menu';
let page = '';

const Navbar = (prop) => {
  // creating the different element need for the navbar section.
  const nav_el = elc('nav', 'nav-bar');
  const header_el = elc('header', 'header');
  const container_el = elc('div', 'container');

  const h1_el = elc('h1');

  const ul_el = createList(
    'ul',
    '<a> Home </a>',
    '<a> Menu </a>',
    '<a> Contact </a>'
  );
  // adding contents into the respective el
  h1_el.innerText = 'Cratley Valley Restaurant';
  nav_el.appendChild(ul_el);

  // Adding the elements into the container el for styling properly
  // h1_el first so it be at the top
  container_el.appendChild(h1_el);
  container_el.appendChild(nav_el);

  // adding the content into the header_el
  header_el.appendChild(container_el);

  return header_el;
};

export default Navbar;
