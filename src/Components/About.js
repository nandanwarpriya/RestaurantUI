import React from 'react';
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from 'react-icons/bs';

const About = () => {
    return (
        <div className="about-section-container">
            <h1 className="primary-subheading">About</h1>
            <div className="about-background-image-container">
                <img src={AboutBackground} alt="" />
            </div>
            <div className="about-section-image-container">
                <img src={AboutBackgroundImage} alt="" />
            </div>
            <div className="about-section-text-container">
                <p className="primary-heading">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem soluta quisquam dolor dolorum, officiis optio at cupiditate esse voluptatibus odio.
                </p>
                <p className="primary-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, nobis nemo! Laborum voluptates nulla totam!
                </p>
                <div className="about-button-container">
                    <button className="secondary-button">Learn More</button>
                    <button className="watch-video-button"><BsFillPlayCircleFill/>Watch Video</button>
                </div>
            </div>
        </div>
    )
}

export default About;
