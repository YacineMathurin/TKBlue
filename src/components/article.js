import React from 'react';

function Article({id, price, name, onHandleClick, articleSelected}) {
    const ref = React.useRef(null);

    
    return (
        <React.Fragment>
            <div  id='article' onClick={()=> onHandleClick(id, price)}>
                <span style={{top: !articleSelected ? "-40px":"0"}} className={'ajout'+id} id={'ajout'}>Ajouté</span>
                <span id='prix'>{price} €</span>
                <p>{name}</p>
            </div>
        </React.Fragment>
    );
}
 
export default Article;