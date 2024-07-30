import Feedback from "@/components/form/feedbackForm"
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
                                                    <Link href="/math1" >Khan Academy</Link>
                                                </li>
                                                <li>
                                                    <Link href="/math2" >Purplemath</Link>
                                                </li>
                                                <li>
                                                    <Link href="/math3" >Mathway</Link>
                                                </li>
                                                <li>
                                                    <Link href="/math4" className="current">Socratic by Google AI</Link>
                                                </li>
                                                <li>
                                                    <Link href="/math5">Symbolab</Link>
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
                                                <img src="assets/images/service/math4.jpg" alt="" />
                                            </figure>
                                            <div className="text">
                                                <h2>MATHEMATICS</h2>
                                                <p> Socratic by Google AI:  Ask questions and receive explanations, visuals, and resources across math topics. While not specifically designed for math, Socratic can be a handy tool to get basic explanations or alternative ways of understanding a concept.		
                                                </p>
                                                <h4>Subject Focus
                                                </h4>
                                                <p>General (not exclusively math)
                                                </p>
                                                <h4>Math Functionality
                                                </h4>
                                                <p>Can answer math questions and provide explanations
                                                </p>
                                                <h4>Level of Detail
                                                </h4>
                                                <p>Explanations might be more basic compared to math-specific tools
                                                </p>
                                                <h4>Strength
                                                </h4>
                                                <p>Offers alternative explanations and resources for math concepts
                                                </p>
                                                <h4>Limitations
                                                </h4>
                                                <p>May not be suitable for in-depth problem solving or advanced topics
                                                </p>

                                            </div>
                                            <div className="more-btn mt_60">
                                                <Link href="https://socratic.org/" className="theme-btn-one">Read More</Link>
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
                    <Feedback />
                </div>
            </Layout>
        </>
    )
}