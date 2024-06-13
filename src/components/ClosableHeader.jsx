import React from 'react';
import { Link } from 'react-router-dom';

function ClosableHeader({ children, to = "/", onClose }) {
  return (
    <nav className="navbar">
      <span className="navbar-brand">{children}</span>
      <Link to={to} className="btn btn-close" onClick={onClose}>✘</Link>
    </nav>
  )
}

export default ClosableHeader