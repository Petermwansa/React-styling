import logo from '../assets/logo.png';
import './Header.css';

export default function Header() {
  return (
    <header>
      <img src={logo} alt="A canvas" />
      <h1>Peter's Art</h1>
      <p>Let's create art together.</p>
    </header>
  );
}





