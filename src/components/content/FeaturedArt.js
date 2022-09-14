import React from 'react'
import { Col, Row, Carousel } from 'antd';

import g1 from '../../assets/gallery/g1.jpg'
import g2 from '../../assets/gallery/g2.jpg'
import g5 from '../../assets/gallery/g5.jpg'
import g6 from '../../assets/gallery/g6.jpg'
import g7 from '../../assets/gallery/g7.jpg'
import g8 from '../../assets/gallery/g8.jpg'
import g9 from '../../assets/gallery/g9.jpg'
import g10 from '../../assets/gallery/g10.jpg'

const contentStyle = {
    height: '400px',
    color: '#23263B',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

const featuredGallery = [
    {
        key: '1',
        image: g1,
        img:g7
    },
    {
        key: '2',
        image: g2,
        img: g8
    },
    {
        key: '3',
        image: g5,
        img: g9
    },
    {
        key: '4',
        image: g6,
        img: g10
    },
]

const FeaturedArt = () => {
    return (
        <Carousel autoplay>

            {featuredGallery.map(currElm => {
                return (
                    <div className='grid-container-row'>

                        <Row>
                            <Col className='featured-pic'
                                xs={{
                                    span: 10,
                                    offset: 1,
                                }}
                                md={{
                                    span: 10,
                                    offset: 1,
                                }}
                                lg={{
                                    span: 10,
                                    offset: 1,
                                }}
                            >
                                <img src={currElm.image} alt={currElm.image} />
                            </Col>
                            <Col className='featured-pic'
                                xs={{
                                    span: 10,
                                    offset: 2,

                                }}
                                md={{
                                    span: 10,
                                    offset: 2,

                                }}
                                lg={{
                                    span: 10,
                                    offset: 2,

                                }}
                            >
                                <img src={currElm.img} alt={currElm.img} />
                            </Col>
                        </Row>
                        <div className='text-container'>
                            <h1>Featured Collections</h1>
                            <a href="">SHOP THE COLLECTION</a>

                        </div>

                    </div>
                    

                )
             })}
        
          
        </Carousel>




    )
}

export default FeaturedArt
