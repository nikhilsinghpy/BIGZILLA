import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'
const Header = () => {
  return (
    <div>
      <div className="main-navbar shadow-sm sticky-top">
        <div className="top-navbar">
            <div className="container-fluid">
            <div className="row">
                <div className="col-md-2 my-auto d-none d-sm-none d-md-block d-lg-block">
                <h5 className="brand-name">Funda Ecom</h5>
                </div>
                <div className="col-md-5 my-auto">
                <form role="search">
                    <div className="input-group">
                    <input
                        type="search"
                        placeholder="Search your product"
                        className="form-control"
                    />
                    <button className="btn bg-white" type="submit">
                        <i className="fa fa-search" />
                    </button>
                    </div>
                </form>
                </div>
                <div className="col-md-5 my-auto">
                <ul className="nav justify-content-end">
                    <li className="nav-item">
                    <Link className="nav-link" to="#">
                        <i className="fa fa-shopping-cart" /> Cart (0)
                    </Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="#">
                        <i className="fa fa-heart" /> Wishlist (0)
                    </Link>
                    </li>
                    <li className="nav-item dropdown">
                    <Link
                        className="nav-link dropdown-toggle"
                        to="#"
                        id="navbarDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        <i className="fa fa-user" /> Username
                    </Link>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li>
                        <Link className="dropdown-item" to="#">
                            <i className="fa fa-user" /> Profile
                        </Link>
                        </li>
                        <li>
                        <Link className="dropdown-item" to="#">
                            <i className="fa fa-list" /> My Orders
                        </Link>
                        </li>
                        <li>
                        <Link className="dropdown-item" to="#">
                            <i className="fa fa-heart" /> My Wishlist
                        </Link>
                        </li>
                        <li>
                        <Link className="dropdown-item" to="#">
                            <i className="fa fa-shopping-cart" /> My Cart
                        </Link>
                        </li>
                        <li>
                        <Link className="dropdown-item" to="#">
                            <i className="fa fa-sign-out" /> Logout
                        </Link>
                        </li>
                    </ul>
                    </li>
                </ul>
                </div>
            </div>
            </div>
        </div>
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
            <Link
                className="navbar-brand d-block d-sm-block d-md-none d-lg-none"
                to="#"
            >
                Funda Ecom
            </Link>
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link className="nav-link" to="#">
                    Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="#">
                    All Categories
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="#">
                    New Arrivals
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="#">
                    Featured Products
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="#">
                    Electronics
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="#">
                    Fashions
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="#">
                    Accessories
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="#">
                    Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="#">
                    Appliances
                    </Link>
                </li>
                </ul>
            </div>
            </div>
        </nav>
        </div>

    </div>
  )
}

export default Header
