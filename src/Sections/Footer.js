const Footer = () => {
  const footer_el = document.createElement('footer');
  const container_el = document.createElement('div');
  const article_el_license = document.createElement('article');
  const article_el_social = document.createElement('article');
  const article_el_author = document.createElement('article');
  const social_list = ['facebook', 'twitter', 'linkedIn'];

  // assigning classes
  footer_el.classList.add('footer');
  container_el.classList.add('container');
  article_el_author.classList.add('author');
  article_el_license.classList.add('license');
  article_el_social.classList.add('social');

  const social_el_arr = social_list.map((social_item) => {
    return `<li><a href="#">${social_item}</a></li>`;
  });

  const social_el_str = ['<ul>', ...social_el_arr, '</ul>'].join('');

  // Adding contents
  article_el_author.innerHTML = `<p> More @
  <a href="http://www.github.com/mulfranck">Mulfranck</a> github.
  </p>`;

  article_el_license.innerHTML = `<p>Copyright &copy; 2020 Cratley Valley Restaurant</p>`;

  article_el_social.innerHTML = social_el_str;
  // adding elements into the container el
  container_el.appendChild(article_el_license);
  container_el.appendChild(article_el_social);
  container_el.appendChild(article_el_author);

  // adding the container ele into the footer el
  footer_el.appendChild(container_el);

  return footer_el;
};

export default Footer;
