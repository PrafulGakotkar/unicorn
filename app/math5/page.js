import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="MATHEMATICS">
                <div>
                    <section className="service-details p_relative">
                        <div className="auto-container">
                            <div className="row clearfix">
                                <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                                    <div className="service-sidebar mr_40">
                                        <div className="sidebar-widget category-widget">
                                            <h3>All Subjects</h3>
                                            <ul className="category-list clearfix">
                                                
                                                <li>
                                                    <Link href="/math1" >MATHEMATICS 1 </Link>
                                                </li>
                                                <li>
                                                    <Link href="/math2">MATHEMATICS 2</Link>
                                                </li>
                                                <li>
                                                    <Link href="/math3">MATHEMATICS 3</Link>
                                                </li>
                                                <li>
                                                    <Link href="/math4">MATHEMATICS 4</Link>
                                                </li>
                                                <li>
                                                    <Link href="/math5" className="current">MATHEMATICS 5</Link>
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
                                                <img src="assets/images/service/math5.jpg" alt="" />
                                            </figure>
                                            <div className="text">
                                                <h2>MATHEMATICS</h2>
                                                <p> Symbolab:  Solve math problems and get step-by-step explanations (free for basic problems, paid subscription for advanced features). Similar to Mathway, Symbolab can solve math problems and show the steps involved. It also offers features like graphing and plotting, which can be helpful for visualizing concepts.		
                                                </p>
                                                <h4>Main Functionality
                                                </h4>
                                                <p>Solve math problems and get step-by-step explanations
                                                </p>
                                                <h4>Problem Input</h4>
                                                <p>Allows users to type or upload an image of the math problem
                                                </p>
                                                <h4>Solution Output</h4>
                                                <p>Provides step-by-step explanations for solving the problem
                                                </p>
                                                <h4>Additional Features</h4>
                                                <p>Offers graphing, plotting, and other visualization tools (may vary depending on subscription level)
                                                </p>
                                                <h4>Cost</h4>
                                                <p>Free for basic problems, paid subscription for advanced features
                                                </p>
                                                <h4>Strengths</h4>
                                                <p>Great for checking work, understanding problem-solving processes, and visualizing concepts
                                                </p>
                                                <h4>Limitations</h4>
                                                <p>Free version may have limitations on problem complexity or features
                                                </p>

                                            </div>
                                            <div className="more-btn mt_60">
                                                <Link href="https://www.symbolab.com/" className="theme-btn-one">Read More</Link>
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