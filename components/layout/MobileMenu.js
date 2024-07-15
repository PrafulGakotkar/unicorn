'use client'
import Link from "next/link";
import { useState } from "react";

export default function MobileMenu({ isSidebar, handleMobileMenu, handleSidebar }) {
    const [activeMenu, setActiveMenu] = useState({
        mainMenu: null,
        subMenu: null,
        subSubMenu: null,
    });

    const handleToggle = (menuLevel, key) => {
        setActiveMenu((prevState) => ({
            ...prevState,
            [menuLevel]: prevState[menuLevel] === key ? null : key,
        }));
    };

    const handleLinkClick = () => {
        handleMobileMenu();
    };

    return (
        <>
            <div className="mobile-menu">
                <div className="menu-backdrop" onClick={handleMobileMenu} />
                <div className="close-btn" onClick={handleMobileMenu}><span className="far fa-times" /></div>
                <nav className="menu-box">
                    <div className="nav-logo"><Link href="/"><img src="/assets/images/logo.png" alt="" onClick={handleLinkClick} /></Link></div>
                    <div className="menu-outer">
                        <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                            <ul className="navigation clearfix">
                                <li><Link href="/" onClick={handleLinkClick}>Home</Link></li>
                                <li className={activeMenu.mainMenu === 2 ? "dropdown current" : "dropdown"}>
                                    <Link href="/#" onClick={handleLinkClick}>Subject</Link>
                                    <ul style={{ display: `${activeMenu.mainMenu === 2 ? "block" : "none"}` }}>
                                        <li className={activeMenu.subMenu === 3 ? "dropdown current" : "dropdown"}>
                                            <Link href="/#" onClick={handleLinkClick}>Science</Link>
                                            <ul style={{ display: `${activeMenu.subMenu === 3 ? "block" : "none"}` }}>
                                                {/* <li className={activeMenu.subSubMenu === 4 ? "dropdown current" : "dropdown"}>
                                                    <Link href="/#" onClick={handleLinkClick}>Team</Link>
                                                    <ul style={{ display: `${activeMenu.subSubMenu === 4 ? "block" : "none"}` }}>
                                                        <li><Link href="/team" onClick={handleLinkClick}>Team Member</Link></li>
                                                        <li><Link href="/team-details" onClick={handleLinkClick}>Team Details</Link></li>
                                                    </ul>
                                                    <div className={activeMenu.subSubMenu === 4 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle('subSubMenu', 4)}><span className="fa fa-angle-right" /></div>
                                                </li> */}
                                                <li><Link href="/bbc_news">BBC News</Link></li>
                                                <li><Link href="/science_academy">Science Academy</Link></li>
                                                <li><Link href="/science_buddies">Science Buddies</Link></li>
                                                <li><Link href="/crazy_scientist">Crazy Scientist </Link></li>
                                                <li><Link href="/national_geographic_science">National Geographic Science</Link></li>
                                            </ul>
                                            <div className={activeMenu.subMenu === 3 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle('subMenu', 3)}><span className="fa fa-angle-right" /></div>
                                        </li>
                                        <li className={activeMenu.subMenu === 4 ? "dropdown current" : "dropdown"}>
                                            <Link href="/#" onClick={handleLinkClick}>Social</Link>
                                            <ul style={{ display: `${activeMenu.subMenu === 4 ? "block" : "none"}` }}>
                                                <li><Link href="/social1">Socratic by Google AI</Link></li>
                                                <li><Link href="/social2">Khan Academy</Link></li>
                                                <li><Link href="/social3">iCivics</Link></li>
                                                <li><Link href="/social4">Newsela</Link></li>
                                                <li><Link href="/social5">Library of Congress</Link></li>
                                            </ul>
                                            <div className={activeMenu.subMenu === 4 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle('subMenu', 4)}><span className="fa fa-angle-right" /></div>
                                        </li>
                                        <li className={activeMenu.subMenu === 5 ? "dropdown current" : "dropdown"}>
                                            <Link href="/#" onClick={handleLinkClick}>Mathematics</Link>
                                            <ul style={{ display: `${activeMenu.subMenu === 5 ? "block" : "none"}` }}>
                                                <li><Link href="/math1">Khan Academy</Link></li>
                                                <li><Link href="/math2">Purplemath</Link></li>
                                                <li><Link href="/math3">Mathway</Link></li>
                                                <li><Link href="/math4">Socratic by Google AI</Link></li>
                                                <li><Link href="/math5">Symbolab</Link></li>
                                            </ul>
                                            <div className={activeMenu.subMenu === 5 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle('subMenu', 5)}><span className="fa fa-angle-right" /></div>
                                        </li>
                                        <li className={activeMenu.subMenu === 6 ? "dropdown current" : "dropdown"}>
                                            <Link href="/#" onClick={handleLinkClick}>AI Tools</Link>
                                            <ul style={{ display: `${activeMenu.subMenu === 6 ? "block" : "none"}` }}>

                                                <li><Link href="/ai_tools">30 AI Tools(free)</Link></li>
                                                <li><Link href="/reacherstools">Research Tools</Link></li>
                                                <li><Link href="/website_designing">Website Designing sites</Link></li>
                                                <li><Link href="/data_analyst">AI Tool For Data Analyst</Link></li>
                                                <li><Link href="/english_ai_tools">English Website / AI Tools</Link></li>
                                                <li><Link href="/telugu_ai_tools">Telugu Website / AI Tools</Link></li>
                                                <li><Link href="/most_useful_ai_tools">Most Useful AI Tools</Link></li>

                                            </ul>
                                            <div className={activeMenu.subMenu === 6 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle('subMenu', 6)}><span className="fa fa-angle-right" /></div>
                                        </li>
                                    </ul>
                                    <div className={activeMenu.mainMenu === 2 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle('mainMenu', 2)}><span className="fa fa-angle-right" /></div>
                                </li>
                                <li><Link href="/contact" onClick={handleLinkClick}>Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                    {/*Social Links*/}
                    <div className="social-links">
                        <ul className="clearfix">
                            <li><Link href="/#" onClick={handleLinkClick}><span className="fab fa-twitter" /></Link></li>
                            <li><Link href="/#" onClick={handleLinkClick}><span className="fab fa-facebook-square" /></Link></li>
                            <li><Link href="/#" onClick={handleLinkClick}><span className="fab fa-pinterest-p" /></Link></li>
                            <li><Link href="/#" onClick={handleLinkClick}><span className="fab fa-instagram" /></Link></li>
                            <li><Link href="/#" onClick={handleLinkClick}><span className="fab fa-youtube" /></Link></li>
                        </ul>
                    </div>
                </nav>
            </div>
            {/* End Mobile Menu */}
            <div className="nav-overlay" style={{ display: `${isSidebar ? "block" : "none"}` }} onClick={handleSidebar} />
        </>
    );
}
