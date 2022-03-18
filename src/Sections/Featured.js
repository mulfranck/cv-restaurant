import { addChild, elc } from '../general';
// by destructuring a receive a header and a card
// the header is an object and the card is an array of objects.

const Feature = ({ header, card }) => {
  const section_el = elc('section', null, 'featured');
  const container_el = elc('section', null, 'container');
  const header_el = elc('header');
  const h2_el = elc('h2', header.h_1);
  const p_el = elc('p', header.p_1);
  const featuredItems_el = elc('section', null, 'featured-items');

  const createItem = (img, price, para, btn) => {
    const item_el = elc('article', null, 'card item');
    // Parent nodes
    const itemHeader_el = elc('header', null, 'card-header');
    const itemfooter_el = elc('footer', null, 'card-footer');
    const itemBody_el = elc('article', null, 'card-body');
    const itemImg_el = new Image();

    // children nodes.
    const itemPrice_el = elc('span', `${price}`, 'price');
    const itemPara_el = elc('p', para);
    const itemBtn_el = elc('button', btn);

    itemImg_el.src = img;

    // adding the children to the parent node.
    // header children/child
    addChild(itemHeader_el, itemImg_el);
    addChild(itemHeader_el, itemPrice_el);
    // body child
    addChild(itemBody_el, itemPara_el);
    // footer child
    addChild(itemfooter_el, itemBtn_el);

    addChild(item_el, itemHeader_el);
    addChild(item_el, itemBody_el);
    addChild(item_el, itemfooter_el);

    return item_el;
  };

  // adding content to the header_el
  addChild(header_el, h2_el);
  addChild(header_el, p_el);
  // creating and adding a card and its content.

  for (let i = 0; i < card.length; i++) {
    let { price, body, img } = card[i];
    addChild(
      featuredItems_el,
      createItem(img, price, body, 'Order Right Now')
    );
  }

  addChild(container_el, header_el);
  addChild(container_el, featuredItems_el);

  addChild(section_el, container_el);

  return section_el;
};

export default Feature;
