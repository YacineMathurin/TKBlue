import React from 'react';

function Article() {
    const ref = React.useRef(null);

    const handleClick = () => {
        const spanAjout = ref.current; // corresponding DOM node
        spanAjout.style.top="0";
    }
    return ( 
        <React.Fragment>
            <div  id='article' onClick={()=>handleClick()}>
                <span ref={ref} id='ajout'>Ajouté</span>
                <span id='prix'>225 $</span>
                <p>Aide à l'utilisation du calculateur GCI</p>
            </div>
        </React.Fragment>
     );
}
 
export default Article;