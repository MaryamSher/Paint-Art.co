import React, { useState } from 'react';
import { Anchor, Button, Drawer } from 'antd';
const { Link } = Anchor;

const Appheader = () => {

    const [visible, setVisible] = useState(false);
    const [placement, setPlacement] = useState('right');

    const showDrawer = () => {
        setVisible(true);
    };

    const onChange = (e) => {
        setPlacement(e.target.value);
    };

    const onClose = () => {
        setVisible(false);
    };
    return (
        <>
            <div className='navbar'>
                <div className='nav-logo'>
                    <i className="fas fa-palette"></i> Paint & Art

                </div>
                <div className='nav-items'>
                    <Anchor targetOffset='65'>
                        <Link href="#home" title="Home" />
                        <Link href="#about" title="About" />
                        <Link href="#art" title="Art" />
                        <Link href="#artists" title="Artists" />
                        <Link href="#gallery" title="Gallery" />
                        <Link href="#faq" title="FAQ" />
                        <Link href="#contact" title="Contact" />

                    </Anchor>

                </div>
                <div className='mobileVisible'>
                    <Button className='drawer-btn' onClick={showDrawer}>
                        <i className="fas fa-bars"></i>

                    </Button>
                    <Drawer
                        
                        placement='right' 
                        onClose={onClose}
                        visible={visible}
                        width={250}
                       
                    >
                       
                        <Anchor targetOffset='65'>
                            <Link href="#home" title="Home" />
                            <Link href="#about" title="About" />
                            <Link href="#art" title="Art" />
                            <Link href="#artists" title="Artists" />
                            <Link href="#gallery" title="Gallery" />
                            <Link href="#faq" title="FAQ" />
                            <Link href="#contact" title="Contact" />

                        </Anchor>
                    </Drawer>


                </div>

            </div>
        </>
    )
}

export default Appheader
