'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Search } from '../icons/Search';
import { ShoppingCard } from '../icons/ShoppingCard';
import { Heart } from '../icons/Heart';
import { Profile } from '../icons/Profile';

export const Header = () => {
  const [showSheet, setShowSheet] = useState(false);

  return (
    <div className="d-flex" style={{ minHeight: '60px' }}>
        <Link className="d-inline-block ms-4 px-2 pb-3 pt-2 fw-bold text-white font-scada text-decoration-none" href="/">
          MADE UP
        </Link>
      <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom flex-grow-1 p-0">
        <div className="d-flex d-md-none gap-5 align-items-center ms-auto position-absolute top-0 end-0 m-3">
          <Link className="nav-link text-dark" href="#"><Search /></Link>
          <Link className="nav-link text-dark" href="#"><ShoppingCard /></Link>
          <button
            className="navbar-toggler border-0"
            type="button"
            onClick={() => setShowSheet(true)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav gap-3">
            {['For Me', 'Jeans', 'Shirts', 'T-Shirts', 'Trousers', 'Joggers', 'Shorts'].map((item) => (
              <li className="nav-item mx-4" key={item}>
                <Link
                  className="nav-link fw-normal fs-6"
                  href="#"
                  style={item === 'For Me' ? { color: '#E10000' } : {}}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="d-none d-md-flex gap-5 align-items-center ms-auto me-4">
          <Link className="nav-link text-dark" href="#"><Search /></Link>
          <Link className="nav-link text-dark" href="#"><ShoppingCard /></Link>
          <Link className="nav-link text-dark" href="#"><Heart /></Link>
          <Link className="nav-link text-dark" href="/Home/profile"><Profile /></Link>
        </div>
      </nav>

      {showSheet && (
        <div
          className="position-fixed top-0 end-0 bg-white shadow p-4"
          style={{
            zIndex: 1050,
            width: '75%',
            height: '100vh',
            transition: 'transform 0.3s ease-in-out',
          }}
        >
          <div className="d-flex justify-content-end mb-4">
            <button className="btn-close" onClick={() => setShowSheet(false)}></button>
          </div>

          <ul className="list-unstyled text-center text-uppercase mt-5">
            {['My Profile', 'My Wishlist', 'My Orders', 'My Addresses'].map((item) => (
              <li key={item} className="mb-5">
                <Link
                  className={`text-decoration-none fw-medium ${item === 'My Profile' ? 'text-danger' : 'text-dark'}`}
                  href={item === 'My Profile' ? '/Home/profile' : '#'}
                  onClick={() => setShowSheet(false)}
                >
                  {item}
                </Link>
              </li>
            ))}
            <hr />
            {['The Brand', 'The made up Story', 'Franchise and Supplieds', 'Store Locator'].map((item) => (
              <li key={item} className="mb-5">
                <Link
                  className={`text-decoration-none fw-medium ${item === 'The Brand' ? 'text-danger' : 'text-dark'}`}
                  href="#"
                  onClick={() => setShowSheet(false)}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
