import _ from 'lodash';
import { createList, elc } from '../general';
import Menu from '../pages/Menu';
import Home from '../pages/Home';
import { Contact } from '../pages/Contact';

const Navbar = (updater) => {
  // creating the different element need for the navbar section.
  const nav_el = elc('nav', null, 'nav-bar');
  const header_el = elc('header', null, 'header');
  const container_el = elc('div', null, 'container');

  const h1_el = elc('h1', 'Cratley Valley Restaurant');
  const ul_el = createList(
    'ul',
    '<a> Home </a>',
    '<a> Menu </a>',
    '<a> Contact </a>'
  );
  const pageLoader = (e) => {
    let value = e.target.innerText;
    console.log(value);
    switch (value.toLowerCase()) {
      case 'contact':
        updater(Contact());
        break;
      case 'menu':
        updater(Menu());
        break;
      default:
        updater(Home());
        break;
    }
  };

  // adding contents into the respective el
  h1_el.innerText = 'Cratley Valley Restaurant';
  nav_el.appendChild(ul_el);

  //Adding eventlistener to the nav_el.
  nav_el.addEventListener('click', pageLoader);

  // Adding the elements into the container el for styling properly
  // h1_el first so it be at the top
  container_el.appendChild(h1_el);
  container_el.appendChild(nav_el);

  // adding the content into the header_el
  header_el.appendChild(container_el);

  return header_el;
};

export default Navbar;
