import './works.css'
import React from 'react'
import work1 from '../../assets/ux.png'
import work2 from '../../assets/desktop.png'
import work3 from '../../assets/mobappdev.png'
import work4 from '../../assets/vcontrol.png'
import work5 from '../../assets/jira.png'
import work6 from '../../assets/photoshop.png'



const Works = () =>{
    return(
        <section id='works'>
        <h2 className='worksTitle'>My Portfolio</h2>
        <span className='worksDesc'>UI Developer with 6 years of experience, seeking a position to leverage extensive knowledge in creating detailed
        design specifications and front-end applications.</span>
        <div className='worksImgs'>
            <img src={work1} alt='work1' className='workImg'/>
            <img src={work2} alt='work2' className='workImg'/>
            <img src={work3} alt='work3' className='workImg'/>
            <img src={work4} alt='work4' className='workImg'/>
            <img src={work5} alt='work5' className='workImg'/>
            <img src={work6} alt='work6' className='workImg'/>
        </div>
        <button className='worksBtn'>See More</button>
        </section>
    )
}

export default Works