import React from 'react'
import { Carousel, Button  } from 'antd';


const items = [
    {
        key: '1',
        title: 'WE WILL SELL FOR YOU',
        content: 'your piece of art'
    },
    {
        key: '2',
        title: 'yes! you can buy new or used',
        content: 'what ever you want'

    },
    {
        key: '3',
        title: 'buying & selling authentic art',
        content: 'now easier than ever'
    },
    

]

const Home = () => {
    return (
        <>
            <div id='home' className='homeBlock'>
                <Carousel autoplay >
                    {
                        items.map(item => {
                            return(
                                <div className='homeCarousel'  key={item.key}>
                                    <h3 >{item.title }</h3>
                                    <p >{item.content}</p>

                                    <div className='home-btn'>
                                        <Button type="primary" className='primary-btn' ghost>Learn More</Button>
                                        <Button> <i className='fas fa-desktop'></i> Get Started</Button>


                                    </div>

                                </div>
                            )
                        })
                    }
                
                    
                </Carousel>
           
                

            </div>
            
        </>
    )
}

export default Home
