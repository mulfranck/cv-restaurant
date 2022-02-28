import _ from 'lodash';

const Navbar = () => {
  // creating the different element need for the navbar section.
  const header_el = document.createElement('header');
  const container_el = document.createElement('div');
  const h1_el = document.createElement('h1');
  const a_el = document.createElement('a');
  const nav_el = document.createElement('nav');

  // instead of creating list elements and three anchor elements
  // create an array, loop through create a string of list anchor tags
  // and innerhtml.
  const nav_items = ['home', 'menu', 'contact'];

  // Adding classes to the elements.
  container_el.classList.add('container');
  header_el.classList.add('header');
  nav_el.classList.add('nav-bar');

  // create an arr containing list item
  const nav_items_el_arr = nav_items.map((nav_item) => {
    return `<li><a onclick=${nav_item}()>${nav_item}</a></li>`;
  });

  // convert the arr of list items into a string of ul element.
  const nav_items_list_el = _.join(
    ['<ul>', ...nav_items_el_arr, '</ul>'],
    ' '
  );

  // adding contents into the respective el
  h1_el.innerText = 'Cratley Valley Restaurant';
  nav_el.innerHTML = nav_items_list_el;

  // Adding the elements into the container el for styling properly
  // h1_el first so it be at the top
  container_el.appendChild(h1_el);
  container_el.appendChild(nav_el);

  // adding the content into the header_el
  header_el.appendChild(container_el);

  return header_el;
};

export default Navbar;
