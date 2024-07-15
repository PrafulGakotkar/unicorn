import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Synthesia">
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
                                                    <Link href="/chatgpt" >
                                                        ChatGPT</Link>
                                                </li>
                                                <li>
                                                    <Link href="/grammarly" >Grammarly</Link>
                                                </li>
                                                <li>
                                                    <Link href="/jasper" >Jasper</Link>
                                                </li>
                                                <li>
                                                    <Link href="/voice_repurpose">Voice Repurpose</Link>
                                                </li>
                                                <li>
                                                    <Link href="/synthesia" className="current" >Synthesia</Link>
                                                </li>
                                                <li>
                                                    <Link href="/deepart">DeepArt</Link>
                                                </li>
                                                <li>
                                                    <Link href="/power_drill_website" >PowerDrillWebsite
                                                    </Link>
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
                                                        <Link href="mailto:info@serpointservices.com">info@serpointservices.com</Link>
                                                    </p>
                                                    <h3>
                                                        <Link href="tel:913336660021">+91 8247266609</Link>
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
                                                <img src="assets/images/service/Synthesia1.jpg" alt="" />
                                            </figure>
                                            <div className="text">
                                                <h2>Synthesia</h2>
                                                <h4>Uses</h4>
                                                <p>Video creation, personalized videos
                                                </p>
                                                <h4>Features</h4>
                                                <p>AI avatars, text-to-speech, language support
                                                </p>
                                                <h4>Description</h4>
                                                <p>A platform for creating AI-generated videos using customizable avatars and text-to-speech technology.</p>
                                            </div>
                                            <div className="more-btn mt_60">
                                                <Link href="https://www.synthesia.io/" className="theme-btn-one">Read More</Link>
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