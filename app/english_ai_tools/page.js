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
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="English Website / AI Tools">
                <div>

                    <Helmet>
                        <title>English Website / AI Tools</title>
                    </Helmet>
                    {/* service-style-two */}
                    <section className="service-style-two p_relative">
                        <div className="auto-container">

                            <div className="row clearfix">
                                <div className="sec-title centred mb_50">
                                    {/* <span className="sub-title">What We Do</span> */}
                                    <h2>Grammar and Writing Assistance</h2>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                                    <div className="service-block-two wow fadeInUp animated" data-wow-delay="0ms" data-wow-duration="1500ms">
                                        <div className="inner-box">
                                            <figure className="image-box">
                                                <img src="assets/images/service/newsArticles.jpg" alt="" />
                                            </figure>
                                            <div className="lower-content">
                                                <div className="inner">
                                                    <div className="icon-box"><i className="icon-7"></i></div>
                                                    <h3><Link href="https://www.grammarly.com/">Grammarly</Link></h3>
                                                    <p>  AI-powered writing assistant for grammar, punctuation, style, and plagiarism checks.
                                                    </p>
                                                    <div className="btn-box">
                                                        <Link href="https://www.grammarly.com/" className="theme-btn-one">Read More</Link>
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
                                                    <h3><Link href="https://prowritingaid.com/">ProWritingAid</Link></h3>
                                                    <p>Detailed reports on grammar, style, and readability.<br/><br/></p>
                                                    <div className="btn-box">
                                                        <Link href="https://prowritingaid.com/" className="theme-btn-one">Read More</Link>
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
                                                    <h3><Link href="https://hemingwayapp.com/">Hemingway Editor</Link></h3>
                                                    <p>Highlights complex sentences and common errors to make writing clear and concise.
                                                    </p>
                                                    <div className="btn-box">
                                                        <Link href="https://hemingwayapp.com/" className="theme-btn-one">Read More</Link>
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
                                    <h2>Reading and Comprehension</h2>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                                    <div className="service-block-two wow fadeInUp animated" data-wow-delay="0ms" data-wow-duration="1500ms">
                                        <div className="inner-box">
                                            <figure className="image-box">
                                                <img src="assets/images/service/newsArticles.jpg" alt="" />
                                            </figure>
                                            <div className="lower-content">
                                                <div className="inner">
                                                    <div className="icon-box"><i className="icon-7"></i></div>
                                                    <h3><Link href="https://smmry.com/">SMMRY
                                                    </Link></h3>
                                                    <p>  Summarizes articles and texts for quick understanding.<br/><br/>
                                                    </p>
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
                                                <img src="assets/images/service/inDepthFeature.jpg" alt="" />
                                            </figure>
                                            <div className="lower-content">
                                                <div className="inner">
                                                    <div className="icon-box"><i className="icon-12"></i></div>
                                                    <h3><Link href="https://rewordify.com/">Rewordify
                                                    </Link></h3>
                                                    <p>Simplifies complex texts by replacing difficult words with easier synonyms.
                                                    </p>
                                                    <div className="btn-box">
                                                        <Link href="https://rewordify.com/" className="theme-btn-one">Read More</Link>
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
                                    <h2>Vocabulary Building</h2>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                                    <div className="service-block-two wow fadeInUp animated" data-wow-delay="0ms" data-wow-duration="1500ms">
                                        <div className="inner-box">
                                            <figure className="image-box">
                                                <img src="assets/images/service/newsArticles.jpg" alt="" />
                                            </figure>
                                            <div className="lower-content">
                                                <div className="inner">
                                                    <div className="icon-box"><i className="icon-7"></i></div>
                                                    <h3><Link href="https://quizlet.com/">Quizlet

                                                    </Link></h3>
                                                    <p>  Platform for creating and studying flashcards with games and quizzes.
                                                    </p>
                                                    <div className="btn-box">
                                                        <Link href="https://quizlet.com/" className="theme-btn-one">Read More</Link>
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
                                                    <h3><Link href="https://www.vocabulary.com/">Vocabulary.com

                                                    </Link></h3>
                                                    <p>Adaptive learning tool for vocabulary improvement through practice and quizzes.
                                                    </p>
                                                    <div className="btn-box">
                                                        <Link href="https://www.vocabulary.com/" className="theme-btn-one">Read More</Link>
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
                                    <h2>Literature and Analysis</h2>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                                    <div className="service-block-two wow fadeInUp animated" data-wow-delay="0ms" data-wow-duration="1500ms">
                                        <div className="inner-box">
                                            <figure className="image-box">
                                                <img src="assets/images/service/newsArticles.jpg" alt="" />
                                            </figure>
                                            <div className="lower-content">
                                                <div className="inner">
                                                    <div className="icon-box"><i className="icon-7"></i></div>
                                                    <h3><Link href="https://www.sparknotes.com/">SparkNotes</Link></h3>
                                                    <p>Summaries, analyses, and study guides for a wide range of literature.
                                                    </p>
                                                    <div className="btn-box">
                                                        <Link href="https://www.sparknotes.com/" className="theme-btn-one">Read More</Link>
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
                                                    <h3><Link href="https://www.litcharts.com/">LitCharts</Link></h3>
                                                    <p>Detailed summaries, themes, and analyses of literary works.</p>
                                                    <div className="btn-box">
                                                        <Link href="https://www.litcharts.com/" className="theme-btn-one">Read More</Link>
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
                                    <h2>Essay Writing and Research</h2>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                                    <div className="service-block-two wow fadeInUp animated" data-wow-delay="0ms" data-wow-duration="1500ms">
                                        <div className="inner-box">
                                            <figure className="image-box">
                                                <img src="assets/images/service/newsArticles.jpg" alt="" />
                                            </figure>
                                            <div className="lower-content">
                                                <div className="inner">
                                                    <div className="icon-box"><i className="icon-7"></i></div>
                                                    <h3><Link href="https://www.literatureandlatte.com/scrivener/">Scrivener</Link></h3>
                                                    <p>  Writing tool designed for long-form content creation, ideal for essays and research projects.
                                                    </p>
                                                    <div className="btn-box">
                                                        <Link href="https://www.literatureandlatte.com/scrivener/" className="theme-btn-one">Read More</Link>
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
                                                    <h3><Link href="https://scholar.google.com/">Google Scholar</Link></h3>
                                                    <p>AI-powered search engine for academic research, finding scholarly articles and books.
                                                    </p>
                                                    <div className="btn-box">
                                                        <Link href="https://scholar.google.com/" className="theme-btn-one">Read More</Link>
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
                                    <h2>Language Learning and Practice</h2>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                                    <div className="service-block-two wow fadeInUp animated" data-wow-delay="0ms" data-wow-duration="1500ms">
                                        <div className="inner-box">
                                            <figure className="image-box">
                                                <img src="assets/images/service/newsArticles.jpg" alt="" />
                                            </figure>
                                            <div className="lower-content">
                                                <div className="inner">
                                                    <div className="icon-box"><i className="icon-7"></i></div>
                                                    <h3><Link href="https://www.duolingo.com/">Duolingo</Link></h3>
                                                    <p>English language course for non-native speakers, focusing on vocabulary and grammar.
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
                                                <img src="assets/images/service/inDepthFeature.jpg" alt="" />
                                            </figure>
                                            <div className="lower-content">
                                                <div className="inner">
                                                    <div className="icon-box"><i className="icon-12"></i></div>
                                                    <h3><Link href="https://www.babbel.com/">Babbel</Link></h3>
                                                    <p>Structured English language courses with interactive lessons and conversation exercises.
                                                    </p>
                                                    <div className="btn-box">
                                                        <Link href="https://www.babbel.com/" className="theme-btn-one">Read More</Link>
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
                                    <h2>AI Tutoring and Homework Help</h2>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                                    <div className="service-block-two wow fadeInUp animated" data-wow-delay="0ms" data-wow-duration="1500ms">
                                        <div className="inner-box">
                                            <figure className="image-box">
                                                <img src="assets/images/service/newsArticles.jpg" alt="" />
                                            </figure>
                                            <div className="lower-content">
                                                <div className="inner">
                                                    <div className="icon-box"><i className="icon-7"></i></div>
                                                    <h3><Link href="https://www.khanacademy.org/">Khan Academy</Link></h3>
                                                    <p>Free online courses, lessons, and practice in various subjects, including English.<br/><br/></p>
                                                    <div className="btn-box">
                                                        <Link href="https://www.khanacademy.org/" className="theme-btn-one">Read More</Link>
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
                                                    <h3><Link href="https://brainly.com/">Brainly
                                                    </Link></h3>
                                                    <p>Peer-to-peer learning platform for asking questions and getting answers from students and experts.
                                                    </p>
                                                    <div className="btn-box">
                                                        <Link href="https://brainly.com/" className="theme-btn-one">Read More</Link>
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
                                                <img src="assets/images/service/newsArticles.jpg" alt="" />
                                            </figure>
                                            <div className="lower-content">
                                                <div className="inner">
                                                    <div className="icon-box"><i className="icon-7"></i></div>
                                                    <h3><Link href="https://www.audible.com/">Audible</Link></h3>
                                                    <p>Audiobook service with a vast collection of literature and educational books.
                                                   <br/> </p>
                                                    <div className="btn-box">
                                                        <Link href="https://www.audible.com/" className="theme-btn-one">Read More</Link>
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
                                                    <h3><Link href="https://www.gutenberg.org/">Project Gutenberg</Link></h3>
                                                    <p>Over 60,000 free eBooks, including many classic works of literature.
                                                    </p>
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