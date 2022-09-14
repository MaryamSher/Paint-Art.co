import React from 'react'
import { Card } from 'antd';

const gridStyle = {
    width: '25%',
    height: '20vh',
    textAlign: 'center',
};

const Art = () => {
    return (
        <>
            <div id='art' className='art-bg'>
                <div  className='titleHolder'>
                    <h2>Art</h2>
                    <p>find the art you love </p>
                </div>
                <Card className='art-bg-grid'>
                    <Card.Grid style={gridStyle}><a href="">Paintings</a></Card.Grid>
                    <Card.Grid style={gridStyle}> <a href="">Abstract Art</a> </Card.Grid>
                    <Card.Grid style={gridStyle}> <a href="">Oil Paintings</a> </Card.Grid>
                    <Card.Grid style={gridStyle}> <a href="">Landscapes</a> </Card.Grid>
                    <Card.Grid style={gridStyle}> <a href="">Glass Art</a> </Card.Grid>
                    <Card.Grid style={gridStyle}> <a href="">Sculpture</a> </Card.Grid>
                    <Card.Grid style={gridStyle}> <a href="">Drawings</a> </Card.Grid>
                    <Card.Grid style={gridStyle}> <a href="">Photogaraphy</a> </Card.Grid>
                    
                </Card>


            </div>
           
        </>
    )
}

export default Art
