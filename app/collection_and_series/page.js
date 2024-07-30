import Feedback from "@/components/form/feedbackForm"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Collections and Series">
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
                                                    <Link href="/news_articles" >
                                                        News Articles
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/in_depth_features" >In-Depth Features</Link>
                                                </li>
                                                <li>
                                                    <Link href="/video_and_audio_content" >Video and Audio Content</Link>
                                                </li>
                                                <li>
                                                    <Link href="/interactive_features" >Interactive Features</Link>
                                                </li>
                                                <li>
                                                    <Link href="/collection_and_series" className="current">Collections and Series</Link>
                                                </li>
                                                {/* <li>
                                                    <Link href="/insurance-strategy">Insurance Strategy</Link>
                                                </li> */}
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
                                                        <Link href="#">info@serpointservices.com</Link>
                                                    </p>
                                                    <h3>
                                                        <Link href="#">+91 8247266609</Link>
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
                                                    <img src="assets/images/service/collection1.jpg" alt="" />
                                                </figure>
                                                <div className="text">
                                                    <h2>Collections and Series</h2>
                                                    <p>BBC Science organizes content into curated collections and thematic series. This allows users to explore specific areas of science in more detail, following a particular theme or ongoing research project.
                                                    </p>

                                                </div>
                                                <div className="more-btn mt_60">
                                                    <Link href="https://www.sciencefocus.com/" className="theme-btn-one">Read More</Link>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                            </div>
                        </div>
                    </section>
                    <Feedback />
                </div>
            </Layout>
        </>
    )
}