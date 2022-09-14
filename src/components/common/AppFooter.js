import React from 'react'
import { BackTop } from 'antd';

const AppFooter = () => {
    return (
        <>

            <div className='footer-container'>
                <div className='footer-logo'>
                    <i className="fas fa-palette"></i> Paint & Art

                </div>
                <div className='socials'>
                    <ul >
                        <li> <a href="https://www.facebook.com/"> <i className="fab fa-facebook-f"></i></a>  </li>
                        <li> <a href="https://www.twitter.com/"> <i className="fab fa-twitter"></i></a> </li>
                        <li> <a href="https://www.linkedin.com/"> <i className="fab fa-linkedin-in"></i></a>  </li>
                        <li> <a href="https://www.instagram.com/"> <i className="fab fa-instagram"></i></a>  </li>
                    </ul>
                </div>
              
            </div>
            <div className='copyright'>

                <p className='cp'>Copyright © 2022 Paint & Art.co - All Rights Reserved</p>
                <ul className='list-items'>
                    <a href="">Terms of Service</a>
                    <a href="">Cookie Policy</a>
                    <a href="">Privacy Policy</a>
                    
                </ul>
                

            </div>
            <BackTop>
                <div className='goTop'>  <i className="fas fa-arrow-circle-up"></i> </div>
            </BackTop>
            


        </>
    )
}

export default AppFooter
