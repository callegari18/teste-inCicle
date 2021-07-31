import React,{useState}from 'react';
import CommentCard from 'components/RedeSocial/Card/Card';
import SideBarPerfil from 'components/RedeSocial/SideBar/SideBar';
import SideBarRigth from 'components/RedeSocial/SideBarRigth/SideBar'
import './Painel.css';

  const perfil = {
    "id": 1,
    "name": "Vinicius Adams",
    "instagram": "@vinicius_adams",
    "professison": "Front-end Developer",
    "location": "São Paulo | SP - Brasil",
    "imageUrl": "./img/adamsPerfil.jpg",
    "works": [
      {
        "id":1,
          "work":"inCicle"
      },
      {
        "id":2,
          "work":"Uninorte"
      }
    ]
  };


const PagesRedeSocialPainel = () =>{
  

  const [like1, setLike1]=useState (0);
  const [like2, setLike2]=useState (2);

  return( 
    
    <div className="container-painel">
      <div className="sideBarLeft">
        <SideBarPerfil perfil={perfil}/>
      </div>
      <div className="mainPainel">
        
        
        <CommentCard card={1} like={like1} setLike={setLike1}  />
        <CommentCard card={2} like={like2} setLike={setLike2}  />
        
        
      </div>
      <div className="sideBarRigth">
        <SideBarRigth />
      </div>
    </div>
  );
};

export default PagesRedeSocialPainel;