import React from 'react'
import './footer.css'


const Footer = () => {
    return (
        <>
            <div className="Footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-5 col-12 ft-1">
                            <h3><span>Scrap</span>Mart</h3>
                            <p>Scrap Mart your local scrap buyer in Pune. We collect all kind of Plastic &amp; metals scrap (Bhangar) like Newspaper, books, waste Iron scrap, Copper, aluminum, Brass, Steel, etc from both commercial and residential public with market price.</p>
                            <div className="footer-icons">
                                <i class="fa-brands fa-facebook"></i>
                                <i class="fa-brands fa-twitter"></i>
                                <i class="fa-brands fa-instagram"></i>
                                <i class="fa-brands fa-linkedin-in"></i>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 col-12 ft-2">
                            <h5>Quick Links</h5>
                            <ul>
                                <li className="nav-item">
                                    <a className="" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/">Pricing</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/">Contact</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/">Request for Pickup</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6 col-lg-4 col-12 ft-3">
                            <h5>Quick Links</h5>
                            <p><i class="fa-solid fa-phone-volume"></i> +91 9213240830</p>
                            <p><i class="fa-solid fa-envelope"></i> scrapmart@gmail.com</p>
                            <p><i class="fa-solid fa-paper-plane"></i> Hadapsar, Pune, Maharashtra, India.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='Last-footer'>
                <p>Designed and Developed By Gagan Mishra</p>
            </div>
        </>
    )
}

export default Footer