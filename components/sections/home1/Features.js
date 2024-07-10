import Link from "next/link"


export default function Features() {
    return (
        <>
        
            <section className="feature-section bg-color-1 sec-pad centred">
                <div className="pattern-layer">
                    <div className="pattern-1" style={{ backgroundImage: 'url(assets/images/shape/shape-2.png)' }}></div>
                    <div className="pattern-2" style={{ backgroundImage: 'url(assets/images/shape/shape-3.png)' }}></div>
                </div>
                <div className="auto-container">
                    <div className="sec-title mb_50">
                    <span className="sub-title">Feature</span>
                    <h2>Domains</h2>
                    </div>
                    <div className="row clearfix">
                    <div className="col-lg-6 col-md-6 col-sm-12 feature-block">
                        <div className="feature-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                            <figure className="image-box"><img src="assets/images/resource/mthematics.png" alt="" /></figure>
                            <div className="lower-content">
                            <div className="icon-box"><i className="icon-7"></i></div>
                            <h3><Link href="/">MATHEMATICS</Link></h3>
                            {/* <p>Amet minim mollit no duis sit enim aliqua dolor do amet officia.</p> */}
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 feature-block ">
                        <div className="feature-block-one wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                            <figure className="image-box"><img src="assets/images/resource/science.png" alt="" /></figure>
                            <div className="lower-content">
                            <div className="icon-box"><i className="icon-7"></i></div>
                            <h3><Link href="/">SCIENCE</Link></h3>
                            {/* <p>Amet minim mollit no duis sit enim aliqua dolor do amet officia.</p> */}
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 feature-block" style={{marginTop:80}}>
                        <div className="feature-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                            <figure className="image-box"><img src="assets/images/resource/social.png" alt="" /></figure>
                            <div className="lower-content">
                            <div className="icon-box"><i className="icon-7"></i></div>
                            <h3><Link href="/">SOCIAL</Link></h3>
                            {/* <p>Amet minim mollit no duis sit enim aliqua dolor do amet officia.</p> */}
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 feature-block" style={{marginTop:80}}>
                        <div className="feature-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                            <figure className="image-box"><img src="assets/images/resource/AITool.png" alt="" /></figure>
                            <div className="lower-content">
                            <div className="icon-box"><i className="icon-7"></i></div>
                            <h3><Link href="/">AI TOOLS</Link></h3>
                            {/* <p>Amet minim mollit no duis sit enim aliqua dolor do amet officia.</p> */}
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </>
    )
}
