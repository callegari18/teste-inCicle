import React  from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentAlt, faShareAlt, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import './CommentCard.css';

//  icones
const iconNoLike = <FontAwesomeIcon icon={faThumbsUp} />
const iconComment = <FontAwesomeIcon icon={faCommentAlt} />
const iconShare = <FontAwesomeIcon icon={faShareAlt} />

const comment = 
  {
    "id": 1,
    "name": "Patricia Santos",
    "date": "14/04/20201",
    "imageUrl": "./img/patriciaPerfil.jpg",
    "url": "#",
    "comments": [
      {
        "id": 1,
        "comment": "Essa publicação está configurada no modo privado somente eu",
      }
    ],
    "likes":[
      {
        "id":1,
        "likes":1
      },
      {
        "id":2,
        "likes":1
      }
    ]
  }
;


const RedeSocialCard = (props) =>(
    
        
        <div className="comment-card">
        
        <div className="comment-card__info">
            <header className="comment-card__header">
            <img 
            src={comment.imageUrl} 
            alt={comment.name}
            className="comment-card__image"
            />
            <div>
                <div className="comment-card__title">{comment.name}</div>
                <div className="comment-card__date">{comment.date}</div>
            </div>
            </header>
            <section>
                {comment.comments.length > 0 && (
                    <div className="comment-card__comment">"{comment.comments[0].comment}"</div>
                    )}
                <div className="comment-card__likes-and-comment">
                    <div className="comment-card__like-count">
                        {props.like}{' '} 
                        {props.like >= 1 ? 'Pessoas curtiu isso' : 'Seja o primeiro a curtir'}
                    </div>
                    <div className="comment-card__likes-and-comment">
                        <div className="comment-card__comments-count">
                            {comment.comments.length}{' '} 
                            {comment.comments.length > 1 ? 'Comentários' : 'comentário'}
                        </div>
                        <div className="comment-card__comments-count">
                            {comment.comments.length}{' '} 
                            {comment.comments.length > 1 ? 'Compartilhamentos' : ' Compartilhamento'} 
                        </div>
                    </div>
                </div>
            </section>
            <footer className="comment-card__footer">   
                <div className="comment-card__link" onClick={()=>props.setLike (props.like+1)}>{iconNoLike} Curtir</div>
                <div className="comment-card__link" >{iconComment} Comentário</div>
                <div className="comment-card__link" >{iconShare} Compartilhar</div>
            </footer>
        </div>
       
    </div>
);

export default RedeSocialCard;