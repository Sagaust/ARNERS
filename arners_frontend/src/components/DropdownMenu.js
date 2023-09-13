import { Link } from 'react-router-dom'; // Importing Link from react-router-dom

const DropdownMenu = ({ id, label, items }) => (
  <li className="nav-item dropdown">
    <button
      className="nav-link dropdown-toggle"
      type="button"
      id={id}
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    >
      {label}
    </button>
    <div className="dropdown-menu" aria-labelledby={id}>
      {items.map((item, index) => (
        <Link key={item.id || index} className="dropdown-item" to={item.path}>
          {item.label}
        </Link>
      ))}
    </div>
  </li>
);

export default DropdownMenu;
