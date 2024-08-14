import './intro.css'

import React from 'react'
import pic from '../../assets/pic.PNG'
import { Link } from 'react-scroll'
import hire from '../../assets/hire.png'

const Intro = ()=>{
    return(
        <section id='intro'>
            <div className='introContent'>
                <span className='hello'>Hello,</span>
                <span className='introText' >I'm <span className='introName'>Suresh</span><br/> UI Developer</span>
                <p className='introPara'>Passionate Frontend Developer | JavaScript, HTML, CSS <br/>Expert | UI/UX Enthusiast</p>
                <Link ><button className='hireBtn'><img src={hire} alt='hire' className='hireMe'></img>Hire Me</button></Link>
            </div>
            <img src={pic} alt='pic' className='bg'></img>
        </section>
    )
}

export default Intro