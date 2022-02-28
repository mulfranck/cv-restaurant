import Navbar from './Sections/Nav-bar';

const Content = (() => {
  const $content = document.getElementById('content');

  $content.appendChild(Navbar());
  return $content;
})();
