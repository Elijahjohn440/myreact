import React from "react"
import { Link, Outlet, useLocation } from "react-router-dom"
import img1 from "../images1/img1.avif";
import premium3 from "../images1/premium3.avif"
import premium1 from "../images1/premium1.avif"
import igor from "../images1/igor.jpg"
import img2 from "../images1/img2.avif";

import {
    FaFacebook,
    FaTwitter,
    FaInstagramSquare,
    FaLinkedin,
} from "react-icons/fa";

export default function Layout() {
    const location = useLocation();


    return (
        <div>
            <nav className="navbar navbar-expand-lg" style={{ backgroundImage: `linear-gradient(0deg,rgba(0,0,0,0),rgba(0,0,0,0.5)), url(${img2})`, backgroundSize: "cover", backgroundPosition: "center", paddingBottom: "40px" }}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img className="ms-3" src={img1} alt="img1" style={{ width: "75px", height: "75px", borderRadius: "50%" }} />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                            <li className="nav-item ">
                                <Link className="nav-link active text-white" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/Product">Product</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/Blog">Blog</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="Contact">Contact</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle text-white" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item " to="#">Action</Link></li>
                                    <li><Link className="dropdown-item" to="#">Another action</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item text-white" to="#">Something else here</Link></li>
                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
            {/* Carousel section */}

            {location.pathname === "/" && (
                <div id="carouselExample" className="carousel slide">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img
                                style={{ width: "100%", height: "600px" }}
                                src={igor}
                                className="d-block w-100"
                                alt="..."
                            />
                        </div>
                        <div className="carousel-item">
                            <img
                                style={{ width: "100%", height: "600px" }}
                                src={premium3}
                                className="d-block w-100"
                                alt="..."
                            />
                        </div>
                        <div className="carousel-item">
                            <img
                                style={{ width: "100%", height: "600px" }}
                                src={premium1}
                                className="d-block w-100"
                                alt="..."
                            />
                        </div>
                    </div>
                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExample"
                        data-bs-slide="prev"
                    >
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExample"
                        data-bs-slide="next"
                    >
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            )}













            {/* <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img style={{ width: "100%", height: "600px" }} src={igor} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img style={{ width: "100%", height: "600px" }} src={premium3} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img style={{ width: "100%", height: "600px" }} src={premium1} className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div> */}
            {/* End of carousel section */}


            <Outlet />

            <div className="container-fluid  my-5 p-5" style={{ backgroundImage: `linear-gradient(0deg,rgba(0,0,0,0),rgba(0,0,0,0.5)), url(${img2})`, backgroundSize: "cover", backgroundPosition: "center" }}>
                <div className="row ms-5">
                    <div className="col-sm-3">
                        <h5 className="ms-3 text-light ms-4">Menu</h5>
                        <div>
                            <ul style={{ listStyleType: "none" }}>
                                <li>
                                    <Link to={"/"} className="text-light footer" style={{ textDecoration: "none" }}>
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"/about"} className="text-light footer" style={{ textDecoration: "none" }}>
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"/contact"} className="text-light footer" style={{ textDecoration: "none" }}>
                                        Contact
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"/product"} className="text-light footer" style={{ textDecoration: "none" }}>
                                        Products
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"/blog"} className="text-light footer" style={{ textDecoration: "none" }}>
                                        Blog
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <h5 className="ms-3 text-light">Useful Links</h5>
                        <div>
                            <ul style={{ listStyleType: "none" }}>
                                <li>
                                    <Link to={"/blog"} className="text-light footer" style={{ textDecoration: "none" }}>
                                        Online Shopping
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"/blog"} className="text-light footer" style={{ textDecoration: "none" }}>
                                        Categories
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"/blog"} className="text-light footer" style={{ textDecoration: "none" }}>
                                        Electronics
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"/blog"} className="text-light footer" style={{ textDecoration: "none" }}>
                                        WebLog
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <h5 className="ms-3 text-light">Useful Links</h5>
                        <div>
                            <ul style={{ listStyleType: "none", textDecoration: "none" }}>
                                <li>
                                    <Link to={"/blog"} className="text-light footer" style={{ textDecoration: "none" }}>
                                        Online Shopping
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"/blog"} className="text-light footer" style={{ textDecoration: "none" }}>
                                        Categories
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"/blog"} className="text-light footer" style={{ textDecoration: "none" }}>
                                        Electronics
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"/blog"} className="text-light footer" style={{ textDecoration: "none" }}>
                                        WebLog
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <h5 className="ms-3 text-light text-center">Follow Us</h5>
                        <div className="row">
                            <div className="col-sm-3">
                                <a href="https://www.facebook.com">
                                    <FaFacebook
                                        className="text-light"
                                        style={{ height: "30px", width: "30px" }}
                                    />
                                </a>
                            </div>
                            <div className="col-sm-3">
                                <a href="https://x.com">
                                    <FaTwitter
                                        className="text-light"
                                        style={{ height: "30px", width: "30px" }}
                                    />
                                </a>
                            </div>
                            <div className="col-sm-3">
                                <a href="https://instagram.com">
                                    <FaInstagramSquare
                                        className="text-light"
                                        style={{ height: "30px", width: "30px" }}
                                    />
                                </a>
                            </div>

                            <div className="col-sm-3">
                                <a href="https://linkedin.com">
                                    <FaLinkedin
                                        className="text-light"
                                        style={{ height: "30px", width: "30px" }}
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}