import React from 'react';
import { Link } from 'react-router-dom';
import DropdownMenu from './DropdownMenu'; // Import the DropdownMenu component

const Header = () => {
  const dropdowns = [
    {
      id: 'navbarDropdownParticipants',
      label: 'Participants',
      items: [
        { label: 'List', path: '/participants/list' },
        { label: 'Detail', path: '/participants/detail' },
        { label: 'Form', path: '/participants/form' },
      ],
    },
    // Add more dropdowns here
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">ArnersLearn</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          {/* ... existing list items ... */}
          {dropdowns.map((dropdown, index) => (
            <DropdownMenu key={index} {...dropdown} />
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
