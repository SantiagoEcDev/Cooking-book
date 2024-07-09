import "./Navbar.css";

export const Navbar = () => {
  return (
    <header className="header">
      <nav className="header-nav">
        <h1 className="header-nav-logo">Foodieland<span>.</span></h1>
        <ul>
          <li>Home</li>
          <li>Recipes</li>
          <li>Blog</li>
          <li>Contact</li>
          <li>About us</li>
        </ul>
        <ul>
          <li>face</li>
          <li>ig</li>
        </ul>
      </nav>
    </header>
  );
};
