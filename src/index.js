import Footer from './Sections/Footer';
import Navbar from './Sections/Nav-bar';

const Content = (() => {
  const $content = document.getElementById('content');

  $content.appendChild(Navbar());

  $content.appendChild(Footer());
  return $content;
})();
