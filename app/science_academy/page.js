'use client'
import Feedback from "@/components/form/feedbackForm"
import Layout from "@/components/layout/Layout"
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
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Science Academy">
                <div>
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
                                                <img src="assets/images/service/education.jpg" alt="" />
                                            </figure>
                                            <div className="lower-content">
                                                <div className="inner">
                                                    <div className="icon-box"><i className="icon-7"></i></div>
                                                    <h3><Link href="/free_world_class_education">Free, World-Class Education
                                                    </Link></h3>
                                                    <p>Khan Academy offers all its content for free...</p>
                                                    <div className="btn-box">
                                                        <Link href="/free_world_class_education" className="theme-btn-one">Read More</Link>
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
                                                <img src="assets/images/service/personalized learning.jpg" alt="" />
                                            </figure>
                                            <div className="lower-content">
                                                <div className="inner">
                                                    <div className="icon-box"><i className="icon-12"></i></div>
                                                    <h3><Link href="/personalize_learning">Personalized Learning</Link></h3>
                                                    <p>Khan Academy uses adaptive learning technology to personalize the...</p>
                                                    <div className="btn-box">
                                                        <Link href="/personalize_learning" className="theme-btn-one">Read More</Link>
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
                                                <img src="assets/images/service/microlearning.jpg" alt="" />
                                            </figure>
                                            <div className="lower-content">
                                                <div className="inner">
                                                    <div className="icon-box"><i className="icon-8"></i></div>
                                                    <h3><Link href="/microlearning">Microlearning
                                                    </Link></h3>
                                                    <p>Content is broken down into short, manageable videos and exercises...</p>
                                                    <div className="btn-box">
                                                        <Link href="/microlearning" className="theme-btn-one">Read More</Link>
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
                                                <img src="assets/images/service/mastery based learning.jpg" alt="" />
                                            </figure>
                                            <div className="lower-content">
                                                <div className="inner">
                                                    <div className="icon-box"><i className="icon-13"></i></div>
                                                    <h3><Link href="/mastery_based_learning">Mastery-Based Learning
                                                    </Link></h3>
                                                    <p>Khan Academy focuses on mastery learning. Students ...<br /><br /></p>
                                                    <div className="btn-box">
                                                        <Link href="/mastery_based_learning" className="theme-btn-one">Read More</Link>
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
                                                <img src="assets/images/service/Practice Exercises and Quizzes .jpg" alt="" />
                                            </figure>
                                            <div className="lower-content">
                                                <div className="inner">
                                                    <div className="icon-box"><i className="icon-14"></i></div>
                                                    <h3><Link href="/practice_exercises_and_quizzes">Practice Exercises and Quizzes
                                                    </Link></h3>
                                                    <p>Khan Academy offers a vast library of practice exercises...</p>
                                                    <div className="btn-box">
                                                        <Link href="/collection_and_series" className="theme-btn-one">Read More</Link>
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
                                                <img src="assets/images/service/Progress Tracking.jpg" alt="" />
                                            </figure>
                                            <div className="lower-content">
                                                <div className="inner">
                                                    <div className="icon-box"><i className="icon-18"></i></div>
                                                    <h3><Link href="/process_tracking">Progress Tracking
                                                    </Link></h3>
                                                    <p>A personalized dashboard tracks student progress, ...<br /><br /></p>
                                                    <div className="btn-box">
                                                        <Link href="/process_tracking" className="theme-btn-one">Read More</Link>
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
                                                <img src="assets/images/service/science cources.jpg" alt="" />
                                            </figure>
                                            <div className="lower-content">
                                                <div className="inner">
                                                    <div className="icon-box"><i className="icon-19"></i></div>
                                                    <h3><Link href="/science_cources">Science Courses
                                                    </Link></h3>
                                                    <p>Khan Academy offers a wide range of science courses...</p>
                                                    <div className="btn-box">
                                                        <Link href="/science_cources" className="theme-btn-one">Read More</Link>
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
                                                <img src="assets/images/service/Expert-Created Content.jpg" alt="" />
                                            </figure>
                                            <div className="lower-content">
                                                <div className="inner">
                                                    <div className="icon-box"><i className="icon-15"></i></div>
                                                    <h3><Link href="/expert_created_content">Expert-Created Content</Link></h3>
                                                    <p>Khan Academy partners with subject-matter experts ...</p>
                                                    <div className="btn-box">
                                                        <Link href="/expert_created_content" className="theme-btn-one">Read More</Link>
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

                    <Feedback />

                </div>

            </Layout>
        </>
    )
}