import React, { useState } from 'react';

import { Button } from 'antd';
import { Card, Col, Row } from 'antd';
import ahsan from '../../assets/artist/ahsan.jpg'
import zahida from '../../assets/artist/zahida.jpg'
import adil from '../../assets/artist/adil.jpg'
import maryam from '../../assets/artist/maryam.jpg'

const { Meta } = Card;

const artists = [
    {
        key: '1',
        title: 'Ahsan',
        description: 'Isb,Pakistan',
        image: ahsan,
    },
    {
        key: '2',
        title: 'Adil',
        description: 'Dubai, UAE',
        image: adil
    },
    {
        key: '3',
        title: 'Maryam',
        description: 'Houston - TX, USA',
        image: maryam
    },
    {
        key: '4',
        title: 'Zahida',
        description: 'Lahore, Pakistan',
        image: zahida
    },

]

const Artist = () => {


    const [loadings, setLoadings] = useState([]);

    const enterLoading = (index) => {
        setLoadings((prevLoadings) => {
            const newLoadings = [...prevLoadings];
            newLoadings[index] = true;
            return newLoadings;
        });
        setTimeout(() => {
            setLoadings((prevLoadings) => {
                const newLoadings = [...prevLoadings];
                newLoadings[index] = false;
                return newLoadings;
            });
        }, 3000);
    };


    return (
        <>
            <div id='artists' className='titleHolder'>
                <h2>Artists</h2>
                <p>millions of independent artists</p>
            </div>
            <div className='artist-bg'>


                <Row gutter={16}>
                    {artists.map(artist => {
                        return (
                            <Col
                                xs={{
                                    span: 24,

                                }}
                                sm={{
                                    span: 12,

                                }}
                                md={{
                                    span: 6,

                                }}
                                lg={{
                                    span: 6,

                                }}

                            >

                                <div key={artist.key} className='artist-container'>
                                    <Card className='artist'
                                        hoverable
                                        cover={<img alt={artist.title} src={artist.image} />}
                                    >
                                        <Meta title={artist.title} description={artist.description} />
                                    </Card>
                                </div>


                            </Col>

                        )
                    })
                    }

                </Row>
                <div className='artist-btnHolder'>
                    <Button className='artist-btn' type="primary" loading={loadings[0]} onClick={() => enterLoading(0)}>
                        Explore More Artists
                    </Button>

                </div>

            </div>





        </>
    )
}

export default Artist
