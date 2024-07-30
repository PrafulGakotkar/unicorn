'use client'
import Layout from "@/components/layout/Layout"
import { Helmet } from 'react-helmet';
import Link from "next/link"
import { useState } from 'react'
import pdf from "@/components/data/pdf";
import image from "@/components/data/image";
import voice from "@/components/data/voice";
import video from "@/components/data/video";
import text_doc from "@/components/data/text_doc";
import analyst from "@/components/data/analyst";
import Feedback from "@/components/form/feedbackForm";
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
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="AI Tool For Data Analyst">
                <div>

                    <Helmet>
                        <title>AI Tool For Data Analyst</title>
                    </Helmet>
                    {/* service-style-two */}
                    <section className="service-style-two p_relative">
                        <div className="auto-container">

                            <div className="row">

                                {/* <h1 style={{ fontWeight: "700", marginBottom: 20 }}>Text & Document Translation</h1> */}
                                {analyst.map((data) =>
                                    <div className="col-lg-3 col-md-3 col-sm-6 tools" key={data.id}>
                                        <Link href={data.link} >
                                            {/* <figure className="image-box1">
                                                <img src={data.img} alt="" />
                                            </figure> */}
                                            <h4 className="hed_text">{data.heading}</h4>
                                            <p>{data.description}</p>
                                        </Link>
                                    </div>
                                )}
                            </div>


                        </div>
                    </section>
                    <Feedback/>
                </div>

            </Layout>
        </>
    )
}