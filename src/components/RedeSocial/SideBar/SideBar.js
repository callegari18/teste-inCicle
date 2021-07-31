import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';
import './SideBar.css';
const iconWork = <FontAwesomeIcon icon={faBriefcase} />
const iconLocation = <FontAwesomeIcon icon={faGlobeAmericas} />

const RedeSocialSideBar = ({perfil}) =>(
    <div className="sideBar-perfil">
        <div className="sideBar-perfil__info">
            <header className="sideBar-perfil__header">
                <div className="img">
                <img 
                src={perfil.imageUrl} 
                alt={perfil.name}
                className="sideBar-perfil__image"
                />
                </div>
            </header>
            <section className="sideBar-perfil__section">
                <div className="sideBar-perfil__name">{perfil.name}</div>
                <div className="sideBar-perfil__instagram">{perfil.instagram}</div>
                <div className="sideBar-perfil__profession">{perfil.professison}</div>
            </section>
            <footer className="sideBar-perfil__footer">
                <div className="sideBar-perfil__location">{iconLocation} {perfil.location}</div>
                <div className="sideBar-perfil__works">
                    <div className="sideBar-perfil__work">{iconWork} {perfil.works[0].work}</div>
                    <div className="sideBar-perfil__work">{iconWork} {perfil.works[1].work}</div>
                   
                    
                </div>
            </footer>
        </div>
    </div>
);

export default RedeSocialSideBar;