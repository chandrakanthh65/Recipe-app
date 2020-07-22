import React from 'react';
import styles from './Display.module.css';
import {Link} from 'react-router-dom';

 const Display = ({ title, healthLabels, image, ingredients }) => {

  const recipeData = { title, healthLabels, image, ingredients };

    return (
        <div className={styles.container}>
            <img src={image} alt=""/>
            <div className={styles.innercontainer}>
            <h2>{title}</h2>
            <div className={styles.details}>
             {
             healthLabels.slice(0,2).map(healthLabel => (
                 <ul key={Math.random()}>
                     <li >{healthLabel} </li>
                 </ul>

            ))}
            </div>

            </div>
            <Link to={{pathname: '/DisplayIngredient', recipeData}} className={styles.myButton}>Get ingredients</Link>

        </div>
    );
}

export default React.memo(Display);