'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from 'react'
import analyst from "@/components/data/analyst";
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

                    {/* service-style-two */}
                    <section className="service-style-two p_relative">
                        <div className="auto-container">

                            <div className="row">

                                {/* <h1 style={{ fontWeight: "700", marginBottom: 20 }}>Text & Document Translation</h1> */}
                                {analyst.map((data) =>
                                    <div className="col-lg-3 col-md-3 col-sm-6 tools" key={data.id}>
                                        <Link href={data.link} >
                                            <figure className="image-box1" style={{margin: " 0 60px"}}>
                                                <img src={data.img} alt="" />
                                            </figure>
                                            <h4 className="hed_text">{data.heading}</h4>
                                            <p>{data.description}</p>
                                        </Link>
                                    </div>
                                )}
                            </div>


                        </div>
                    </section>
                </div>

            </Layout>
        </>
    )
}