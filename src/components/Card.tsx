import React from 'react'
import {ImageBody} from './ImageBody'
import '../styles/card.css';

type CardProps = {
    title: string,
    img: string,
}

export const Card = ({title, img}: CardProps) => <div className="post"> 
    <h2>{ title }</h2>
    <ImageBody url={img} />
    <div className="bottom">
        <div><span role="img" aria-label="heart">❤</span> <span role="img" aria-label="like">👍</span></div>
        COMMENTS - TODO
    </div>
</div>
