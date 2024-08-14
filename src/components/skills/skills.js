import React from "react";
import './skills.css'

import uiux from '../../assets/uiux.png'
import webapp from '../../assets/webapp.png'
import mobapp from '../../assets/mobapp.png'


const Skills = () =>{
    return(
        <section id="skills" >
        <span className="skillTitle">What I Do</span>
        <span className="skillDesc">Iam a skilled and passionate web designer with experience in creating visually appealing and user-friendly website. i have a strong understanding of design and a keen eye for detail. I am proficient in HTML5, CSS3, and JavaScript, as well as design software such as Adobe Photoshop, Illustrator and Coreldraw</span>
        <div className="skillBars">
            <div className="skillBar">
                <img src={uiux} alt="uiux" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>UI/UX Design</h2>
                    <p>This a demo text, you can write your own content here.</p>
                </div>

            </div>
            <div className="skillBar">
                <img src={webapp} alt="webapp" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Website Design</h2>
                    <p>This demo text can be changed while making the production ready site.</p>
                </div>

            </div>
            <div className="skillBar">
                <img src={mobapp} alt="mobapp" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Mobile App Design</h2>
                    <p>You can write text related to mobile app development.</p>
                </div>

            </div>
        </div>
        </section>
    )
}

export default Skills