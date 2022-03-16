// receive a content object and destructure it into the respective parts
// first the p tag el above, then the h1 content and finaly the p element last.
// and a class_name
const Banner = ({ p_1, h_1, p_2 }, class_name) => {
  const section_banner_el = document.createElement('section');
  const container_el = document.createElement('div');

  const p_el = document.createElement('p');
  const p_2_el = p_el.cloneNode(p_el);
  const h1_el = document.createElement('h1');
  const button_el = document.createElement('button');

  // Setting attributes
  button_el.setAttribute('type', 'button');
  button_el.classList.add('order');
  container_el.setAttribute('class', 'container');
  section_banner_el.setAttribute('class', class_name);

  p_el.innerText = p_1;
  h1_el.innerText = h_1;
  p_2_el.innerText = p_2;

  button_el.innerText = `place your order`;

  container_el.appendChild(p_el);
  container_el.appendChild(h1_el);
  container_el.appendChild(p_2_el);
  container_el.appendChild(button_el);

  section_banner_el.appendChild(container_el);

  return section_banner_el;
};

export default Banner;
