import  React from 'react';
import Logo from '../../assets/images/logo.svg';
import LadingImg from '../../assets/images/landing.svg';
import StudyIcon from '../../assets/images/icons/study.svg';
import GiveClassesIcon from '../../assets/images/icons/give-classes.svg';
import PurpleHeartIcon from '../../assets/images/icons/purple-heart.svg';
import {Link} from 'react-router-dom';

import './style.css';
function Landing(){
    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div  className="logo-container">
                    <img src={Logo} alt="Proffy"/>
                    <h2>Sua Plataforma de Estudos Online.</h2>
                </div>

                <img src={LadingImg} 
                alt="Plataforma de Estudos" 
                className="hero-image"/>

                <div className="buttons-container">
                    <Link to="/study" className="study">
                        <img src={StudyIcon} alt="Estudar"/>
                        Estudar
                    </Link>
                    <Link to="/give-classes" className="give-classes">
                        <img src={GiveClassesIcon} alt="Estudar"/>
                        Estudar
                    </Link>
                </div>
                <span className="total-connections">
                    Total de 200 Conexões já realizadas <img src={PurpleHeartIcon} alt="Coração Roxo"/>
                </span>
            </div>
        </div>
    )
}

export default Landing;