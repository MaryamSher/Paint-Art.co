import React from 'react'
import { Col, Row } from 'antd';

const Items = [
    {
        key: '1',
        icon: <i className="fas fa-paint-brush"></i>,
        title: 'Make an Art',
        content: 'Do not fear mistakes - there are none, so just create the one.'
    },
    {
        key: '2',
        icon: <i className="fas fa-user-plus"></i>,
        title: 'Sign up',
        content: 'Create a free account, take a picture of your product and list it here, YES! its that simple'
    },
    {
        key: '3',
        icon: <i className="fas fa-shopping-cart"></i>,
        title: 'Start selling',
        content: 'Use one platform to sell products to anyone, anywhere.'
    },
]

const items = [
    {
        key: '4',
        icon: <i className="fas fa-search"></i>,
        title: 'BROWSE',
        content: 'Browse art in a range of styles, with straight-forward pricing set by our expert curators.'
    },
    {
        key: '5',
        icon: <i className="fas fa-hand-holding"></i>,
        title: ' RECEIVE',
        content: 'Art is shipped directly from artists studios in custom-built boxes. No peanuts, no mess.'
    },
    {
        key: '6',
        icon: <i className="fas fa-hands"></i>,
        title: 'HANG',
        content: 'Artwork arrives at your doorstep ready-to-hang! Free shipping, free returns.'
    },
]

const About = () => {
    return (
        <>
            <div id='about' className='titleHolder'>
                <h2>About Us</h2>
                <p>everything you need to know</p>
            </div>
            <div className='content'>
                <p>
                    It's a start up, based on the idea of Empowering Artist who want to monetize their skills but lack a platform for it, it's for those who want to start something but does't have an initial investment, it's for those who have inner talent but no one knows yet, Now is the time to tell the world who you are and what you possess.
                </p>

            </div>
            <Row gutter={[0, 16]}>
                <Col
                    xs={{
                        span: 8,

                    }}
                    lg={{
                        span: 8,

                    }}
                >

                </Col>
                <Col
                    xs={{
                        span: 8,

                    }}
                    lg={{
                        span: 8,

                    }}
                    className='roadmap'
                >
                    <h3>ROADMAP FOR SELLER</h3>
                </Col>
                <Col
                    xs={{
                        span: 8,

                    }}
                    lg={{
                        span: 8,

                    }}
                >

                </Col>


            </Row>
            <div className='about-row-container'>
                <Row gutter={[16, 16]}>
                    {
                        Items.map(item => {
                            return (
                                <Col
                                    xs={{
                                        span: 24,

                                    }}
                                    md={{
                                        span: 8,

                                    }}
                                    lg={{
                                        span: 8,

                                    }}

                                >
                                    <div className='about-card'>
                                        <div className='icon'>
                                            {item.icon}
                                        </div>
                                        <h3>{item.title}</h3>
                                        <p>{item.content}</p>

                                    </div>
                                </Col>

                            )
                        })
                    }


                </Row>

            </div>



            <Row gutter={[16, 16]}>
                <Col
                    xs={{
                        span: 8,

                    }}
                    lg={{
                        span: 8,

                    }}
                >

                </Col>
                <Col
                    xs={{
                        span: 8,

                    }}
                    lg={{
                        span: 8,

                    }}
                    className='roadmap'
                >
                    <h3>ROADMAP FOR BUYER</h3>
                </Col>
                <Col
                    xs={{
                        span: 8,

                    }}
                    lg={{
                        span: 8,

                    }}
                >

                </Col>


            </Row>
            <div className='about-row-container'>
                <Row gutter={[16, 16]}>
                    {
                        items.map(item => {
                            return (
                                <Col
                                    xs={{
                                        span: 24,

                                    }}
                                    md={{
                                        span: 8,

                                    }}
                                    lg={{
                                        span: 8,

                                    }}
                                >
                                    <div className='about-card'>
                                        <div className='icon'>
                                            {item.icon}
                                        </div>
                                        <h3>{item.title}</h3>
                                        <p>{item.content}</p>

                                    </div>
                                </Col>

                            )
                        })
                    }


                </Row>


            </div>
           
        </>
    )
}

export default About
