import img_1 from './../../asset/breakfast_item_1.jpg';
import img_2 from './../../asset/breakfast_item_1.jpg';
import img_3 from './../../asset/breakfast_item_1.jpg';
import Banner from '../Sections/Banner';
import { addChild } from '../general';
import Reservation from '../Sections/Reservation';
import Feature from '../Sections/Featured';

const home_content = {
  banner: {
    class_name: 'banner',
    p_1: 'Experience eating in a New and Natural environment',
    h_1: 'Cratley Valley Restaurant',
    p_2: 'feeling the meal as pampa to your satisfication',
  },

  featured: {
    class_name: 'featured',
    content: {
      header: {
        h_1: '{} featured for you',
        p_1: 'Break your day with this our best stou',
      },
      card: [
        {
          price: '$4.2',
          body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Tempore atque, neque reiciend soluta expedita.',
          img: img_1,
        },
        {
          price: '$7.9',
          body: 'ipsum dolor sit amet consectetur adipisicing elit.Tempore atque, neque reiciend soluta expedita.',
          img: img_2,
        },
        {
          price: '$2.1',
          body: 'Tempore atque, neque reiciend soluta expedita ipsum dolor sit amet consectetur expedita adipisicing.',
          img: img_3,
        },
      ],
    },
  },
};

const Home = () => {
  const home_el = document.createElement('section');

  home_el.appendChild(Banner(home_content.banner));
  addChild(home_el, Feature(home_content.featured.content));

  home_el.appendChild(Reservation());
  return home_el;
};

export default Home;
