import logo from '../assets/logo.png';
import classes from './Header.module.css';

export default function Header() {
  return (
    <header>
      <img src={logo} alt="A canvas" />
      <h1>Peter's Art</h1>
      <p className={classes.paragraph}>Let's create art together.</p>
    </header>
  );
}





