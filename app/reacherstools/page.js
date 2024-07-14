'use client'
import Layout from "@/components/layout/Layout"
import { Helmet } from 'react-helmet';
import Link from "next/link"
import { useState } from 'react'
export default function Home() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Research Tools">
                <div>

                <Helmet>
                        <title>Research Tools</title>
                    </Helmet>
                    {/* service-style-two */}
                    <section className="service-style-two p_relative">
                        <div className="auto-container">
                            {/* <div className="sec-title centred mb_50">
                            <span className="sub-title">What We Do</span>
                            <h2>Provide the Best Consulting <br />in This Industry</h2>
                            </div> */}
                            <div className="row clearfix">
                            <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                                <div className="service-block-two wow fadeInUp animated" data-wow-delay="0ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <figure className="image-box">
                                    <img src="assets/images/service/newsArticles.jpg" alt="" />
                                    </figure>
                                    <div className="lower-content">
                                    <div className="inner">
                                        <div className="icon-box"><i className="icon-7"></i></div>
                                        <h3><Link href="/news_articles">Elicit</Link></h3>
                                        <p>  A tool for organizing and summarizing research materials1.</p>
                                        <div className="btn-box">
                                        <Link href="/news_articles" className="theme-btn-one">Read More</Link>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                                <div className="service-block-two wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <figure className="image-box">
                                    <img src="assets/images/service/inDepthFeature.jpg" alt="" />
                                    </figure>
                                    <div className="lower-content">
                                    <div className="inner">
                                        <div className="icon-box"><i className="icon-12"></i></div>
                                        <h3><Link href="/in_depth_features">Connected Papers</Link></h3>
                                        <p>Helps you explore related research papers and build connections2.</p>
                                        <div className="btn-box">
                                        <Link href="/in_depth_features" className="theme-btn-one">Read More</Link>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                                <div className="service-block-two wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <figure className="image-box">
                                    <img src="assets/images/service/videoAudio.jpg" alt="" />
                                    </figure>
                                    <div className="lower-content">
                                    <div className="inner">
                                        <div className="icon-box"><i className="icon-8"></i></div>
                                        <h3><Link href="/video_and_audio_content">Research Rabbit</Link></h3>
                                        <p>Create a research library and get recommendations for new papers3.</p>
                                        <div className="btn-box">
                                        <Link href="/video_and_audio_content" className="theme-btn-one">Read More</Link>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                                <div className="service-block-two wow fadeInUp animated" data-wow-delay="0ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <figure className="image-box">
                                    <img src="assets/images/service/interactive feature.jpg" alt="" />
                                    </figure>
                                    <div className="lower-content">
                                    <div className="inner">
                                        <div className="icon-box"><i className="icon-13"></i></div>
                                        <h3><Link href="/interactive_features">Litmaps</Link></h3>
                                        <p> Visualize the landscape of academic literature4 (use code “STAPLETON” for a 10% discount on the Pro subscription).</p>
                                        <div className="btn-box">
                                        <Link href="/interactive_features" className="theme-btn-one">Read More</Link>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                                <div className="service-block-two wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <figure className="image-box">
                                    <img src="assets/images/service/collection.jpg" alt="" />
                                    </figure>
                                    <div className="lower-content">
                                    <div className="inner">
                                        <div className="icon-box"><i className="icon-14"></i></div>
                                        <h3><Link href="/collection_and_series">Consensus</Link></h3>
                                        <p> Search databases and filter research papers for quality</p>
                                        <div className="btn-box">
                                        <Link href="/collection_and_series" className="theme-btn-one">Read More</Link>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                           
                            </div>
                        </div>
                    </section>
                    {/* service-style-two end */}


                    {/* chooseus-style-two */}
                    {/* <section className="chooseus-style-two sec-pad">
                        <div className="bg-layer parallax-bg" data-parallax='{"y": 100}' style={{ backgroundImage: 'url(assets/images/background/chooseus-bg-2.jpg)' }}></div>
                        <div className="auto-container">
                            <div className="row clearfix">
                                <div className="col-xl-6 col-lg-12 offset-xl-6 content-column">
                                    <div className="content_block_six">
                                        <div className="content-box p_relative ml_30">
                                            <div className="sec-title mb_50">
                                                <span className="sub-title">Why Choose BizTech</span>
                                                <h2>Reason For Choosing Our Consultancy</h2>
                                            </div>
                                            <ul className="accordion-box">
                                                {/*Accordion Block
                                                <li className="accordion block">
                                                    <div className={isActive.key == 1 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(1)}>
                                                        <div className="icon-box"></div>
                                                        <h3>Quick Response</h3>
                                                    </div>
                                                    <div className={isActive.key == 1 ? "acc-content current" : "acc-content"}>
                                                        <div className="content">
                                                            <div className="text">Sodales posuere facilisi metus elementum ipsum egestas amet amet mattis commodo Nunc tempor amet massa diam mauris Risus sodales interdum.
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                {/*Accordion Block
                                                <li className="accordion block">
                                                    <div className={isActive.key == 2 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(2)}><div className="icon-box"></div><h3>Experience Consultant</h3></div>
                                                    <div className={isActive.key == 2 ? "acc-content current" : "acc-content"}>
                                                        <div className="content">
                                                            <div className="text">Sodales posuere facilisi metus elementum ipsum egestas amet amet mattis commodo Nunc tempor amet massa diam mauris Risus sodales interdum.
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                {/*Accordion Block
                                                <li className="accordion block">
                                                    <div className={isActive.key == 3 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(3)}><div className="icon-box"></div><h3>Flexible Payment</h3></div>
                                                    <div className={isActive.key == 3 ? "acc-content current" : "acc-content"}>
                                                        <div className="content">
                                                            <div className="text">Sodales posuere facilisi metus elementum ipsum egestas amet amet mattis commodo Nunc tempor amet massa diam mauris Risus sodales interdum.
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section> */}
                    {/* chooseus-style-two end */}



                    {/* working-process-section */}
                    {/* <section className="working-process-section alternat-2 sec-pad centred">
                        <div className="pattern-layer">
                            <div className="pattern-1" style={{ backgroundImage: 'url(assets/images/shape/shape-25.png)' }}></div>
                            <div className="pattern-2" style={{ backgroundImage: 'url(assets/images/shape/shape-26.png)' }}></div>
                        </div>
                        <div className="auto-container">
                            <div className="sec-title mb_100">
                                <span className="sub-title">Working Process</span>
                                <h2>3 Easy Steps to Get <br />Quick Help</h2>
                            </div>
                            <div className="inner-container">
                                <div className="working-block-one">
                                    <div className="inner-box">
                                        <div className="shape" style={{ backgroundImage: 'url(assets/images/shape/shape-24.png)' }}></div>
                                        <div className="count-text">
                                            <h3>01 <span>Step</span></h3>
                                        </div>
                                        <div className="text">
                                            <div className="inner">
                                                <h3>Fill In The Required Form</h3>
                                                <p>Amet minim mollit no duis deserunt ulamco.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="working-block-one">
                                    <div className="inner-box">
                                        <div className="shape" style={{ backgroundImage: 'url(assets/images/shape/shape-24.png)' }}></div>
                                        <div className="count-text">
                                            <h3>02 <span>Step</span></h3>
                                        </div>
                                        <div className="text">
                                            <div className="inner">
                                                <h3>Submit <br />Your Documents</h3>
                                                <p>Amet minim mollit no duis deserunt ulamco.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="working-block-one">
                                    <div className="inner-box">
                                        <div className="count-text">
                                            <h3>03 <span>Step</span></h3>
                                        </div>
                                        <div className="text">
                                            <div className="inner">
                                                <h3>Get Ready To <br />Receive your Visa</h3>
                                                <p>Amet minim mollit no duis deserunt ulamco.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section> */}
                    {/* working-process-section end */}

                </div>

            </Layout>
        </>
    )
}