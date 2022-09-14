import React from 'react'
import { Col, Row } from 'antd';

const Gallery = () => {
    return (
        <>
            
            <div id='gallery' className='grid-container-col'>
                <Col className='gallery-heading'
                    xs={{
                        span: 12,
                        offset: 1,
                    }}
                    lg={{
                        span: 12,
                        offset: 2,
                    }}
                >
                    <a href="">
                        <h1 >
                            Gallery
                        </h1>
                    </a>
                    <h6>
                        The Work of Millions of Independent Artists
                    </h6>
                    <p>
                        Find art based on geography, art style, medium, and more!
                        We are an open, global community of 450,000+ independent artists from 170+ countries. We value original artwork from creators of all kinds—from painters to illustrators to photographers to pattern designers and everything in between. We empower creativity around the world—because each purchase pays an artist.
                    </p>
                   
                </Col>
                <Col className='gallery-pic'
                    xs={{
                        span: 8,
                        offset: 2,
                    }}
                    lg={{
                        span: 8,
                        offset: 2,
                    }}
                >
                    <img src={require("../../assets/gallery/g3.jpg")} alt="" />
                    <img src={require("../../assets/gallery/g4.jpg")} alt="" />

                </Col>

            </div>
        </>
    )
}

export default Gallery
