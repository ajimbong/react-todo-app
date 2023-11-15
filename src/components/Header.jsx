
function Header() {
    return (
      <header>
        <h1> Todo List</h1>
        <nav>
          <ul className="nav-items">
            <li>
              <a href="#">Home</a>
            </li>
            <li>|</li>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
        </nav>
      </header>
    );
}

export default Header