import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ImageCarousel from '../components/Carousel';
import facePic from '../assets/images/facePic.png'
import puppyFinn from '../assets/images/puppyFinn.jpg'
import puppyLumi from '../assets/images/puppyLumi.jpg'
import Finn from '../assets/images/Finn.jpg'
const styles = {

    aboutMeSection: {
        height: '30vh',
        maxHeight: '30vh',
        backgroundColor: 'white',
        
    },
    aboutSection: {
        marginTop: '10rem'
    },
    p: {
        fontSize: '16pt',
        lineHeight: '2.0'
    },
    img: {
        maxWidth: '100%',
        maxHeight: '100%',
        borderRadius: '20pt'
    },
    h1: {
        fontSize: '36pt'
    }
}


const classList = {
    section: `
        row 
        col-8
        justify-content-center
        mt-0
        `,
    aboutSection: `
    
        col-6

    `

    
}

function Section() {


    return (


    
        <>



            {window.innerWidth > 992 ? 

// CODE FOR XL SCREENS


        <section className='row col-12  justify-content-center' style={styles.aboutSection}>

            <div className={classList.section} style={styles.aboutMeSection}>
                <div className={classList.aboutSection}>
                    <h1 style={styles.h1}>Who am I?</h1>
                    <p style={styles.p}>
                        Hi, my name is Hunter McCarthy, and I'm a software developer based in Cocoa Beach, FL.
                        I have a background in continuous improvement, process streamlining, and Lean Six Sigma methodologies. 
                        While working as a process technician for a division of Brunswick, I became an expert at PowerApps, which is Microsoft's "low-code" platform.
                        While working with PowerApps, I realized how much I liked coding, and decided to learn to code professionally.
                        I attended the UCF Coding Boot Camp while working full-time, and learned all kinds of cool skills, such as React, Node, Bootstrap, etc.
                    
                    
                    
                    </p>
                </div>

                
                <div style={styles.aboutMeSection} className='col-6'>


                <ImageCarousel 
        images = {[
            facePic,
            Finn,
            puppyFinn,
            puppyLumi

        ]} 
        
        
        
        ></ImageCarousel>
                </div>
                    

                
            </div>
        </section>

        :

// CODE FOR LG SCREENS

        window.innerWidth > 768 && window.innerWidth <= 992 ?

        <p>LG Screen</p>

        :


// CODE FOR MD SCREENS


        window.innerWidth > 576 && window.innerWidth <= 768 ?

        <p>MD Screen {window.innerWidth}</p>

        : 


// CODE FOR SM SCREENS


        <p> SM screen {window.innerWidth}</p>
        
    }
        
        
        </>

    )



}





export default Section;