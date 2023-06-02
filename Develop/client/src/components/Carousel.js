import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';

const styles = {
    carouselStyles: {
        maxHeight: '100%'
    },
    images: {
        width: '100%',
        maxHeight: '100%'
    }
}

function ImageCarousel(props) {
    
    const  mapImages = (images) => {
        console.log(images)
        return images.map((image) =>  (
        
        <Carousel.Item>
            <img 
                src={image} style={styles.images}
                


            ></img>
        </Carousel.Item>
        
        )

        )
    }
    
    return (
        <>
        

            <Carousel style={styles.carouselStyles}>

            {mapImages(props.images)}


            </Carousel>

        
        </>
    )
}




export default ImageCarousel;