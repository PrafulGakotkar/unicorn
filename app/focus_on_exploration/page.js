import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Focus on Exploration and Discovery">
                <div>
                    <section className="service-details p_relative">
                        <div className="auto-container">
                            <div className="row clearfix">
                                <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                                    <div className="service-sidebar mr_40">
                                        <div className="sidebar-widget category-widget">
                                            <h3>All Features</h3>
                                            <ul className="category-list clearfix">
                                                <li>
                                                    <Link href="/trusted_and_engaging_content" >
                                                        Trusted and Engaging Content
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/variety_of_media">Variety of Media</Link>
                                                </li>
                                                <li>
                                                    <Link href="/focus_on_exploration" className="current">Focus on Exploration and Discovery</Link>
                                                </li>
                                                <li>
                                                    <Link href="/age_spesific_content">Age-Specific Content</Link>
                                                </li>
                                                <li>
                                                    <Link href="/interactive_learning">Interactive Learning</Link>
                                                </li>
                                                <li>
                                                    <Link href="/connection_to_real_world">Connection to Real-World Science</Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="sidebar-widget contact-widget centred">
                                            <div className="widget-content">
                                                <div
                                                    className="bg-layer"
                                                    style={{
                                                        backgroundImage: 'url(assets/images/service/service-7.jpg)',
                                                    }}
                                                ></div>
                                                <h3>
                                                    Do You Need <br />
                                                    Any <span>Help?</span>
                                                </h3>
                                                <div className="icon-box">
                                                    <i className="icon-29"></i>
                                                </div>
                                                <div className="inner-box">
                                                    <p>
                                                        <Link href="mailto:example@info.com">example@info.com</Link>
                                                    </p>
                                                    <h3>
                                                        <Link href="tel:913336660021">(+91) 333 666 0021</Link>
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-8 col-md-12 col-sm-12 content-side">
                                    <div className="service-details-content">
                                        <div className="content-one mb_90">
                                            <figure className="image-box">
                                                <img src="assets/images/service/service-10.jpg" alt="" />
                                            </figure>
                                            <div className="text">
                                                <h2>Focus on Exploration and Discovery</h2>
                                                <p>
                                                The website emphasizes the excitement of scientific discovery. Content showcases real-world science expeditions and research projects, inspiring curiosity and a sense of adventure in young minds.
                                                </p>

                                            </div>
                                            <div className="more-btn mt_60">
                                                <Link href="/services2" className="theme-btn-one">Read More</Link>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </Layout>
        </>
    )
}