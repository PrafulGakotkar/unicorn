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
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Telugu Website / AI Tools">
                <div>

                    <Helmet>
                        <title>Telugu Website / AI Tools</title>
                    </Helmet>
                    {/* service-style-two */}
                    <section className="service-style-two p_relative">
                        <div className="auto-container">

                            <div className="row clearfix">
                                <div className="sec-title centred mb_50">
                                    {/* <span className="sub-title">What We Do</span> */}
                                    <h2>Language Learning Apps</h2>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                                    <div className="service-block-two wow fadeInUp animated" data-wow-delay="0ms" data-wow-duration="1500ms">
                                        <div className="inner-box">
                                            <figure className="image-box">
                                                <img src="assets/images/service/Duolingo.jpg" alt="" />
                                            </figure>
                                            <div className="lower-content">
                                                <div className="inner">
                                                    <div className="icon-box"><i className="icon-7"></i></div>
                                                    <h3><Link href="https://www.duolingo.com/">Duolingo</Link></h3>
                                                    <p>Community-created courses for learning Telugu.
                                                    </p>
                                                    <div className="btn-box">
                                                        <Link href="https://www.duolingo.com/" className="theme-btn-one">Read More</Link>
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
                                                <img src="assets/images/service/Memrise.jpg" alt="" />
                                            </figure>
                                            <div className="lower-content">
                                                <div className="inner">
                                                    <div className="icon-box"><i className="icon-12"></i></div>
                                                    <h3><Link href="https://www.memrise.com/">Memrise</Link></h3>
                                                    <p>User-generated courses in Telugu.</p>
                                                    <div className="btn-box">
                                                        <Link href="https://www.memrise.com/" className="theme-btn-one">Read More</Link>
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
                                                <img src="assets/images/service/drops.jpg" alt="" />
                                            </figure>
                                            <div className="lower-content">
                                                <div className="inner">
                                                    <div className="icon-box"><i className="icon-8"></i></div>
                                                    <h3><Link href="https://languagedrops.com/">Drops</Link></h3>
                                                    <p>Vocabulary acquisition through interactive games and exercises.</p>
                                                    <div className="btn-box">
                                                        <Link href="https://languagedrops.com/" className="theme-btn-one">Read More</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="row clearfix">
                                <div className="sec-title centred mb_50">
                                    {/* <span className="sub-title">What We Do</span> */}
                                    <h2>Vocabulary and Phrase Learning</h2>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                                    <div className="service-block-two wow fadeInUp animated" data-wow-delay="0ms" data-wow-duration="1500ms">
                                        <div className="inner-box">
                                            <figure className="image-box">
                                                <img src="assets/images/service/anki.jpg" alt="" />
                                            </figure>
                                            <div className="lower-content">
                                                <div className="inner">
                                                    <div className="icon-box"><i className="icon-7"></i></div>
                                                    <h3><Link href="https://smmry.com/">Anki</Link></h3>
                                                    <p>  Flashcard app for creating and sharing Telugu decks.</p>
                                                    <div className="btn-box">
                                                        <Link href="https://smmry.com/" className="theme-btn-one">Read More</Link>
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
                                                <img src="assets/images/service/Quizlet.jpg" alt="" />
                                            </figure>
                                            <div className="lower-content">
                                                <div className="inner">
                                                    <div className="icon-box"><i className="icon-12"></i></div>
                                                    <h3><Link href="https://quizlet.com/">Quizlet</Link></h3>
                                                    <p>Flashcard app with several Telugu learning decks.</p>
                                                    <div className="btn-box">
                                                        <Link href="https://quizlet.com/" className="theme-btn-one">Read More</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row clearfix">
                                <div className="sec-title centred mb_50">
                                    {/* <span className="sub-title">What We Do</span> */}
                                    <h2>Interactive and Conversational</h2>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                                    <div className="service-block-two wow fadeInUp animated" data-wow-delay="0ms" data-wow-duration="1500ms">
                                        <div className="inner-box">
                                            <figure className="image-box">
                                                <img src="assets/images/service/hellotalk.jpg" alt="" />
                                            </figure>
                                            <div className="lower-content">
                                                <div className="inner">
                                                    <div className="icon-box"><i className="icon-7"></i></div>
                                                    <h3><Link href="https://www.hellotalk.com/">HelloTalk</Link></h3>
                                                    <p>  Language exchange app for practicing with native Telugu speakers.
                                                    </p>
                                                    <div className="btn-box">
                                                        <Link href="https://www.hellotalk.com/" className="theme-btn-one">Read More</Link>
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
                                                <img src="assets/images/service/Tandem.jpg" alt="" />
                                            </figure>
                                            <div className="lower-content">
                                                <div className="inner">
                                                    <div className="icon-box"><i className="icon-12"></i></div>
                                                    <h3><Link href="https://www.tandem.net/">Tandem</Link></h3>
                                                    <p>Language exchange app with text, voice, and video chat features.
                                                    </p>
                                                    <div className="btn-box">
                                                        <Link href="https://www.tandem.net/" className="theme-btn-one">Read More</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row clearfix">
                                <div className="sec-title centred mb_50">
                                    {/* <span className="sub-title">What We Do</span> */}
                                    <h2>Online Courses and Tutorials</h2>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                                    <div className="service-block-two wow fadeInUp animated" data-wow-delay="0ms" data-wow-duration="1500ms">
                                        <div className="inner-box">
                                            <figure className="image-box">
                                                <img src="assets/images/service/udemy.jpg" alt="" />
                                            </figure>
                                            <div className="lower-content">
                                                <div className="inner">
                                                    <div className="icon-box"><i className="icon-7"></i></div>
                                                    <h3><Link href="https://www.udemy.com/">Udemy</Link></h3>
                                                    <p>  Offers various Telugu language courses from beginner to advanced.</p>
                                                    <div className="btn-box">
                                                        <Link href="https://www.udemy.com/" className="theme-btn-one">Read More</Link>
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
                                                <img src="assets/images/service/coursera.jpg" alt="" />
                                            </figure>
                                            <div className="lower-content">
                                                <div className="inner">
                                                    <div className="icon-box"><i className="icon-12"></i></div>
                                                    <h3><Link href="https://www.coursera.org/">Coursera</Link></h3>
                                                    <p>Courses in linguistics and language learning techniques.<br/><br/></p>
                                                    <div className="btn-box">
                                                        <Link href="https://www.coursera.org/" className="theme-btn-one">Read More</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row clearfix">
                                <div className="sec-title centred mb_50">
                                    {/* <span className="sub-title">What We Do</span> */}
                                    <h2>Grammar and Writing</h2>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                                    <div className="service-block-two wow fadeInUp animated" data-wow-delay="0ms" data-wow-duration="1500ms">
                                        <div className="inner-box">
                                            <figure className="image-box">
                                                <img src="assets/images/service/Learn Telugu Quickly.jpg" alt="" />
                                            </figure>
                                            <div className="lower-content">
                                                <div className="inner">
                                                    <div className="icon-box"><i className="icon-7"></i></div>
                                                    <h3><Link href="https://www.duolingo.com/">Learn Telugu Quickly</Link></h3>
                                                    <p>App focused on grammar and sentence structure through exercises.</p>
                                                    <div className="btn-box">
                                                        <Link href="https://www.duolingo.com/" className="theme-btn-one">Read More</Link>
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
                                                <img src="assets/images/service/Telugu 101.jpg" alt="" />
                                            </figure>
                                            <div className="lower-content">
                                                <div className="inner">
                                                    <div className="icon-box"><i className="icon-12"></i></div>
                                                    <h3><Link href="https://www.telugu101.com/">Telugu 101</Link></h3>
                                                    <p>Comprehensive lessons on grammar, vocabulary, and writing.<br/><br/></p>
                                                    <div className="btn-box">
                                                        <Link href="https://www.telugu101.com/" className="theme-btn-one">Read More</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row clearfix">
                                <div className="sec-title centred mb_50">
                                    {/* <span className="sub-title">What We Do</span> */}
                                    <h2>Reading and Listening</h2>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                                    <div className="service-block-two wow fadeInUp animated" data-wow-delay="0ms" data-wow-duration="1500ms">
                                        <div className="inner-box">
                                            <figure className="image-box">
                                                <img src="assets/images/service/youtube.jpg" alt="" />
                                            </figure>
                                            <div className="lower-content">
                                                <div className="inner">
                                                    <div className="icon-box"><i className="icon-7"></i></div>
                                                    <h3><Link href="https://www.youtube.com/channel/UCRDBz2Ic2cUoKlXeyhN4U9g">YouTube</Link></h3>
                                                    <p>Channels offering free video lessons on learning Telugu.</p>
                                                    <div className="btn-box">
                                                        <Link href="https://www.youtube.com/channel/UCRDBz2Ic2cUoKlXeyhN4U9g" className="theme-btn-one">Read More</Link>
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
                                                <img src="assets/images/service/StoryWeaver.jpg" alt="" />
                                            </figure>
                                            <div className="lower-content">
                                                <div className="inner">
                                                    <div className="icon-box"><i className="icon-12"></i></div>
                                                    <h3><Link href="https://storyweaver.org.in/">StoryWeaver</Link></h3>
                                                    <p>Collection of children's stories in Telugu for reading practice.</p>
                                                    <div className="btn-box">
                                                        <Link href="https://storyweaver.org.in/" className="theme-btn-one">Read More</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row clearfix">
                                <div className="sec-title centred mb_50">
                                    {/* <span className="sub-title">What We Do</span> */}
                                    <h2>Dictionaries and Translation</h2>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                                    <div className="service-block-two wow fadeInUp animated" data-wow-delay="0ms" data-wow-duration="1500ms">
                                        <div className="inner-box">
                                            <figure className="image-box">
                                                <img src="assets/images/service/google Translate.jpg" alt="" />
                                            </figure>
                                            <div className="lower-content">
                                                <div className="inner">
                                                    <div className="icon-box"><i className="icon-7"></i></div>
                                                    <h3><Link href="https://translate.google.com/">Google Translate</Link></h3>
                                                    <p>Quick translations and pronunciation help.<br/><br/> </p>
                                                    <div className="btn-box">
                                                        <Link href="https://translate.google.com/" className="theme-btn-one">Read More</Link>
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
                                                <img src="assets/images/service/English to Telugu Dictionary.jpg" alt="" />
                                            </figure>
                                            <div className="lower-content">
                                                <div className="inner">
                                                    <div className="icon-box"><i className="icon-12"></i></div>
                                                    <h3><Link href="https://www.gutenberg.org/">English to Telugu Dictionary</Link></h3>
                                                    <p>App offering translations and definitions.</p>
                                                    <div className="btn-box">
                                                        <Link href="https://www.gutenberg.org/" className="theme-btn-one">Read More</Link>
                                                    </div>
                                                </div>
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