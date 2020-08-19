import React from 'react';
import styles from './DisplayIngredient.module.css';
import { Link } from 'react-router-dom';

const DisplayIngredient = ( props ) => {

    console.log(props)
    const ingredients = props.location.recipeData ;
    let check;
    ingredients? check=1: check=0;

    switch(check){
        case 1: return (

            <div className={styles.container}>
                <h2>Let's cook</h2>
                <h1>{ingredients.title}!</h1>
                <ol>
               {    
                   Object.entries(ingredients.ingredients).map(ingredient => {

                    return (
                        <li key={Math.random()}>  {ingredient[1].text}</li>
                    )
                   })           
               }  
               </ol>
                <Link to='/' className={styles.myButton}>Back</Link>
            </div>
        )

        default : return ( <div><h3>Oops! somethings wrong</h3><Link to='/' className={styles.myButton}>Back</Link></div>);
    }
   
}

export default DisplayIngredient;