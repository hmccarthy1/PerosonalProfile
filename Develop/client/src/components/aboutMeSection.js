import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const styles = {

    aboutMeSection: {
        height: '30vh',
        backgroundColor: 'white'
    },
    aboutSection: {
        marginTop: '10rem'
    },
    p: {
        fontSize: '16pt'
    }
}


const classList = {
    section: `
        row 
        col-8
        justifycontent-center
        mt-0
        `,
    aboutSection: `
    
        col-5

    `

    
}

function Section() {

    return (

        <>
        
        <section className={classList.section} style={styles.aboutMeSection}>

            <div className='row col-12  justify-content-center' style={styles.aboutSection}>
                <div className={classList.aboutSection}>
                    <h1>Who am I?</h1>
                    <p style={styles.p}>I'm a full-stack software developer based in Cocoa Beach, FL. I attended the UCF coding bootcamp.</p>
                </div>
                <div className='col-7'>
                    <img src='/public/images/facePic'>
                    
                    </img>

                </div>
            </div>
        </section>
        
        
        
        </>

    )
}






export default Section;