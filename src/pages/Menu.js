import { addChild, elc } from '../general';
import img_1 from '../../asset/sandwich.jpg';
import img_2 from '../../asset/salmon.jpg';
import img_3 from '../../asset/cherries.jpg';
import Banner from './../Sections/Banner';

const menuContent = {
  banner: {
    class_name: 'other-banner banner',
    h_1: 'Our Menu',
    p_2: 'From the taste, to the scent and the aroma flavoring.',
  },
  content: [
    {
      img: img_1,
      title: 'The Perfect Sandwich, A Real NYC Classic',
      des: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum laboriosam iure magnam voluptates nihil.',
    },
    {
      img: img_2,
      title: 'Let Me Tell You About This Steak',
      des: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum laboriosam iure magnam voluptates nihil.',
    },
    {
      img: img_3,
      title: 'Cherries, interrupted',
      des: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum laboriosam iure magnam voluptates nihil.',
    },
    {
      img: img_1,
      title: 'Once Again, Robust Wine and Vegetable Pasta',
      des: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum laboriosam iure magnam voluptates nihil.',
    },
  ],
};
const createMenuItem = ({ img, title, des }) => {
  const item_el = elc('article', null, 'menu-card');
  const h3_el = elc('h3', title);
  const img_el = new Image();
  const p_el = elc('p', des);

  // adding img_el content.
  img_el.src = img;

  // adding content to the item
  addChild(item_el, img_el);
  addChild(item_el, h3_el);
  addChild(item_el, p_el);

  return item_el;
};
const Menu = () => {
  const menu_el = elc('section', null);
  const menuItems_el = elc('section', null, 'menu-items');
  const container_el = elc('section', null, 'container');

  addChild(menu_el, Banner(menuContent.banner));

  for (let i of menuContent.content) {
    addChild(container_el, createMenuItem(i));
  }

  addChild(menuItems_el, container_el);
  addChild(menu_el, menuItems_el);
  return menu_el;
};

export default Menu;
