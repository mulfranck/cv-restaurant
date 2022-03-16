// import Banner from './Sections/Banner';
import { elc } from './general';
import Home from './pages/Home';
import Footer from './Sections/Footer';
import Navbar from './Sections/Nav-bar';

const Content = (() => {
  let removableContent = elc('div');
  const $content = document.getElementById('content');
  const updateSection = (section) => {
    if (removableContent.children[0]) removableContent.children[0].remove();
    removableContent.appendChild(section);
  };

  $content.appendChild(Navbar(updateSection));
  removableContent.appendChild(Home());

  $content.appendChild(removableContent);
  $content.appendChild(Footer());
  return $content;
})();
