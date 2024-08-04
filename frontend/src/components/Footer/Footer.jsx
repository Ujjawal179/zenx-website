import React from 'react';
import styles from './Footer.module.css';
import { FaMapMarkerAlt, FaPhone, FaEnvelopeOpen, FaFacebookF, FaTwitter, FaGooglePlusG, FaTelegramPlane } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className={styles.footerSection}>
            <div c>
                <div className={`${styles.footerContent} pt-5 pb-5`}>
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 mb-50">
                            <div className={styles.footerWidget}>
                                <div className={styles.footerLogo}>
                                    <a href="index.html">
                                        <img src='/logo.png' className={styles.logo} alt="Logo" />
                                    </a>
                                </div>
                                <div className={styles.footerText}>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                                <div className={styles.footerSocialIcon}>
                                    <span>Follow us</span>
                                    <a href="#"><FaFacebookF className="icon" /></a>
                                    <a href="#"><FaTwitter className="icon" /></a>
                                    <a href="#"><FaGooglePlusG className="icon" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                            <div className={styles.footerWidget}>
                                <div className={styles.footerWidgetHeading}>
                                    <h3>Useful Links</h3>
                                </div>
                                <ul>
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">About Us</a></li>
                                    <li><a href="#">Our Services</a></li>
                                    <li><a href="#">Our Experts</a></li>
                                    <li><a href="#">Membership Plans</a></li>
                                    <li><a href="#">Gallery</a></li>
                                    <li><a href="#">Blog</a></li>
                                    <li><a href="#">Contact us</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                            <div className={styles.footerWidget}>
                                <div className={styles.footerWidgetHeading}>
                                    <h3>Subscribe</h3>
                                </div>
                                <div className={`${styles.footerText} mb-25`}>
                                    <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                                </div>
                                <div className={styles.subscribeForm}>
                                    <form action="#">
                                        <input type="text" placeholder="Email Address" />
                                        <button><FaTelegramPlane className="icon" /></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.copyrightArea}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                            <div className={styles.copyrightText}>
                                <p>&copy; 2024, All Right Reserved <a href="#">ZenX</a></p>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                            <div className={styles.footerMenu}>
                                <ul>
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">Terms & Conditions</a></li>
                                    <li><a href="#">Privacy</a></li>
                                    <li><a href="#">Policy</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
