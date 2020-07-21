import React, {useEffect, useState} from 'react';
import Display from './Display';
import styles from './Home.module.css';
import ClipLoader from "react-spinners/ClipLoader";

export default function Home() {
const ApiId = '5835f7d6';
const ApiKey = '4eff08e584d30f3ac406cf1b600fd0e2';

const [recipes, setRecipes] = useState([]);
const [search, setSearch] = useState('');
const [searchFor, setSearchFor] = useState('k');
const [load, setLoad] = useState(true);
 
useEffect(()=>{
getRecipe();
}, [searchFor]);

const handleChange = e =>{
    setSearch(e.target.value);
}

const handleSubmit = e =>{
    e.preventDefault();
    setSearchFor(search);
}

const getRecipe = async () =>{
const response = await fetch(`https://api.edamam.com/search?q=${searchFor.toLowerCase()}&app_id=${ApiId}&app_key=${ApiKey}`)
const json = await response.json();
setRecipes(json.hits);
setSearch('');
json.count? (setLoad(false)): (setLoad(true));
}
    return (
        <div>
            <form onSubmit={handleSubmit} >
                <input type="text" value={search} onChange={handleChange} placeholder="Search for a recipe.."/>
            </form>
            <div className={styles.container}>
            { load?  ( <ClipLoader size={ 50 } color={"#123abc"}/>) : (recipes.map( recipe => (<Display title={recipe.recipe.label} image={recipe.recipe.image} healthLabels= {recipe.recipe.healthLabels} ingredients={recipe.recipe.ingredients} key={ Math.random()}/>)))} 
            </div>
        </div>
    )
}
