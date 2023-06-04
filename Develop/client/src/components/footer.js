import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faLinkedin, faStackOverflow } from '@fortawesome/free-brands-svg-icons'


const styles = {
    container: {
        backgroundColor: '#000',
        color: 'white',
        height: '5vh',
        maxHeight: '5vh',
        width: '100vw',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    a: {
        fontSize: '2rem',
        color: 'white'
    },
    ul: {
        display: 'flex',
        width: '10vw',
        justifyContent: 'space-evenly'

    }
}

const Footer = (props) => {
    return (

        <div className="col-12 row m-0" style={styles.container}>

        <ul style={styles.ul}>
        <a href="https://github.com/hmccarthy1" target="_blank" rel="noopener noreferrer" style={styles.a}>
        <FontAwesomeIcon icon={faGithub}/>
        </a>

        <a href="https://www.linkedin.com/in/hunter-mccarthy-7302b61b9/" target="_blank" rel="noopener noreferrer" style={styles.a}>
        <FontAwesomeIcon icon={faLinkedin}/>
        </a>

        <a href="https://stackoverflow.com/users/22018797/hmccarthy" target="_blank" rel="noopener noreferrer" style={styles.a} className="">
        <FontAwesomeIcon icon={faStackOverflow}/>
        </a>

        </ul>
        </div>

    )
}








export default Footer;