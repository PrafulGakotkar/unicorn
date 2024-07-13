import Link from "next/link"
// import { useRouter } from "next/router"

export default function Menu() {
    // const router = useRouter()

    return (
        <>

            {/* <ul className="sub-menu">
                <Link className={router.pathname == "/" ? "active" : ""}>Home Default</Link>
                <Link className={router.pathname == "/index-2" ? "active" : ""}>Home Interior</Link>
            </ul> */}

            <ul className="navigation clearfix">
                {/* <li className="dropdown"><Link href="/">Home</Link> */}
                <li className=""><Link href="/">Home</Link>
                    {/* <ul>
                        <li><Link href="/">Home Page 01</Link></li>
                        <li><Link href="/index-2">Home Page 02</Link></li>
                        <li><Link href="/index-3">Home Page 03</Link></li>
                    </ul> */}
                </li>
                <li className="dropdown"><Link href="#">Subjects</Link>
                    <ul>
                        <li className="dropdown"><Link href="#">Science</Link>
                            <ul>
                                <li><Link href="/bbc_news">BBC News</Link></li>
                                <li><Link href="/science_academy">Science Academy</Link></li>
                                <li><Link href="/science_buddies">Science Buddies</Link></li>
                                <li><Link href="/crazy_scientist">Crazy Scientist </Link></li>
                                <li><Link href="/national_geographic_science">National Geographic Science</Link></li>
                            </ul>
                        </li>
                        <li className="dropdown"><Link href="#">Social</Link>
                            <ul>
                                <li><Link href="/social1">Socratic by Google AI</Link></li>
                                <li><Link href="/social2">Khan Academy</Link></li>
                                <li><Link href="/social3">iCivics</Link></li>
                                <li><Link href="/social4">Newsela</Link></li>
                                <li><Link href="/social5">Library of Congress</Link></li>

                            </ul>
                        </li>
                        <li className="dropdown"><Link href="#">Mathematics</Link>
                            <ul>
                                <li><Link href="/math1">Khan Academy</Link></li>
                                <li><Link href="/math2">Purplemath</Link></li>
                                <li><Link href="/math3">Mathway</Link></li>
                                <li><Link href="/math4">Socratic by Google AI</Link></li>
                                <li><Link href="/math5">Symbolab</Link></li>

                            </ul>
                        </li>
                        <li className="dropdown"><Link href="#">AI Tool's</Link>
                            <ul>
                                <li><Link href="/ai_tools">30 AI Tools</Link></li>
                                <li><Link href="/reacherstools">Reachers Tools</Link></li>
                                <li><Link href="/website_designing">Website Designing sites</Link></li>
                                <li><Link href="/math4">Socratic by Google AI</Link></li>
                                <li><Link href="/math5">Symbolab</Link></li>

                            </ul>
                        </li>
                        {/* <li><Link href="/financial-advices">Financial Advices</Link></li>
                        <li><Link href="/insurance-strategy">Insurance Strategy</Link></li> */}
                    </ul>
                </li>
                {/* <li className="dropdown"><Link href="#">Pages</Link>
                    <ul>
                        <li className="dropdown"><Link href="#">Team</Link>
                            <ul>
                                <li><Link href="/team">Team Member</Link></li>
                                <li><Link href="/team-details">Team Details</Link></li>
                            </ul>
                        </li>
                        <li><Link href="/portfolio">Portfolio</Link></li>
                        <li><Link href="/about-us">About Us</Link></li>
                        <li><Link href="/pricing-table">Pricing Table</Link></li>
                        <li><Link href="/career">Career</Link></li>
                        <li><Link href="/faq">Faq’s</Link></li>
                        <li><Link href="/testimonials">Testimonials</Link></li>
                        <li><Link href="/404">404</Link></li>
                    </ul>
                </li>
                <li className="dropdown"><Link href="#">Shop</Link>
                    <ul>
                        <li><Link href="/shop">Products</Link></li>
                        <li><Link href="/product-details">Product Details</Link></li>
                        <li><Link href="/shopping-cart">Shopping Cart</Link></li>
                        <li><Link href="/checkout">Checkout</Link></li>
                    </ul>
                </li>
                <li className="dropdown"><Link href="#">Blog</Link>
                    <ul>
                        <li><Link href="/blog">Blog Grid</Link></li>
                        <li><Link href="/blog-2">Blog Standard</Link></li>
                        <li><Link href="/blog-details">Blog Details</Link></li>
                    </ul>
                </li>  */}
                <li><Link href="/contact">Contact</Link></li>
            </ul>
        </>
    )
}
