import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Fun and Engaging Experiments">
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
                                                    <Link href="/fun_and_engineering" className="current">
                                                    Fun and Engaging Experiments
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/simple_and_safe_instructions">Simple and Safe Instructions</Link>
                                                </li>
                                                <li>
                                                    <Link href="/household_materials">Household Materials</Link>
                                                </li>
                                                <li>
                                                    <Link href="/categorized_activities">Categorized Activities</Link>
                                                </li>
                                                <li>
                                                    <Link href="/explanations">Explanations</Link>
                                                </li>
                                                <li>
                                                    <Link href="/printable_resources">Printable Resources</Link>
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
                                                <img src="assets/images/service/Science Fair Tools.jpg" alt="" />
                                            </figure>
                                            <div className="text">
                                                <h2>Fun and Engaging Experiments</h2>
                                                <p>
                                                Crazy Scientist offers a variety of science experiments and activities designed to be exciting and capture children's imaginations. Experiments cover a wide range of scientific topics, making learning enjoyable.
                                                </p>

                                            </div>
                                            <div className="more-btn mt_60">
                                                <Link href="https://www.thecrazyscientist.com/" className="theme-btn-one">Read More</Link>
                                            </div>
                                        </div>
                                        {/* <div className="content-two mb_90">
                                <div className="row clearfix">
                                <div className="col-lg-6 col-md-6 col-sm-12 text-column">
                                    <div className="text-box">
                                    <h3>Overview</h3>
                                    <p>
                                        Dolor felis sapien sit egestas venenatis faucibus non sed
                                        faucibus mauris ultricies. Cras varius proin amet vehicula magna.
                                        Ultricies gravida vel volutpat sed platea sed fames at egestas
                                        amet feugiat laoreet sed potenti integer.
                                    </p>
                                    <ul className="list-style-one clearfix">
                                        <li>Holiday Trash & Recycling</li>
                                        <li>Things To Do In Govarnex</li>
                                        <li>Rent a Picnic Shelter</li>
                                    </ul>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                                    <figure className="image-box">
                                    <img src="assets/images/service/service-9.jpg" alt="" />
                                    </figure>
                                </div>
                                </div>
                            </div>
                            <div className="content-three mb_85">
                                <div className="text mb_100">
                                <h3>Our Solutions</h3>
                                <p>
                                    Enim justo, in mauris posuere dolor. Dolor felis sapien sit egestas. Ut
                                    venenatis faucibus non sed faucibus mauris ultricies. Cras varius proin
                                    amet vehicula magna. Ultricies gravida vel volutpat sed. Platea sed fames
                                    at egestas amet feugiat laoreet sed potenti integer.
                                </p>
                                </div>
                                <div className="row clearfix">
                                <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                    <div className="single-item">
                                    <div className="icon-box">
                                        <i className="icon-8"></i>
                                    </div>
                                    <h3>Tax Strategy</h3>
                                    <p>Cras varius proin amet vehicula magna tricies gravida vel volutpat.</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                    <div className="single-item">
                                    <div className="icon-box">
                                        <i className="icon-13"></i>
                                    </div>
                                    <h3>Investment Policy</h3>
                                    <p>Cras varius proin amet vehicula magna tricies gravida vel volutpat.</p>
                                    </div>
                                </div>
                                </div>
                                <div className="text mt_50">
                                <p>
                                    Enim justo, in mauris posuere dolor. Dolor felis sapien sit egestas. Ut
                                    venenatis faucibus non sed faucibus mauris ultricies. Cras varius proin
                                    amet vehicula magna. Ultricies gravida vel volutpat sed. Platea sed fames
                                    at egestas amet feugiat laoreet sed potenti integer.
                                </p>
                                </div>
                            </div>
                            <div className="content-four">
                                <h3>Download Resources</h3>
                                <ul className="download-list clearfix">
                                <li>
                                    <div className="icon-box">
                                    <i className="icon-30"></i>
                                    </div>
                                    <h5>Company Briefing Update for the Year</h5>
                                    <span>Pdf(160kb)</span>
                                    <button type="button">Download</button>
                                </li>
                                <li>
                                    <div className="icon-box">
                                    <i className="icon-30"></i>
                                    </div>
                                    <h5>Cultural Centers and Event schedule</h5>
                                    <span>Pdf(160kb)</span>
                                    <button type="button">Download</button>
                                </li>
                                </ul>
                            </div> */}
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