import React, {useEffect, useState} from 'react';
import Display from './Display';
import styles from './Home.module.css';
import ClipLoader from "react-spinners/ClipLoader";

const Home = ({searchFor, setSearchForFunction}) => {

const ApiId = '5835f7d6';
const ApiKey = '4eff08e584d30f3ac406cf1b600fd0e2';
const [recipes, setRecipes] = useState([]);
const [search, setSearch] = useState('');
const [load, setLoad] = useState(true);
const [isAvailable, setisAvailable] = useState(true);
 
useEffect(()=>{
    const getRecipe = () => {

        fetch(`https://api.edamam.com/search?q=${searchFor.toLowerCase()}&app_id=${ApiId}&app_key=${ApiKey}`)
        .then(response => response.json())
        .then(data => {
            setisAvailable(data.more);
            data.count? (setLoad(false)): (setLoad(true));
            return setRecipes(data.hits);
        });
        
        setSearch('');
        
        }

getRecipe()
}, [searchFor])

const handleChange = e =>{
    setSearch(e.target.value);
}

const handleSubmit = e =>{
    e.preventDefault();
    setSearchForFunction(search);
}


    return (
        <div>
            <form onSubmit={handleSubmit} >
                <input type="text" value={search} onChange={handleChange} placeholder="Search for a recipe.."/>
            </form>
            <div className={styles.container}>
             { load? ( isAvailable? <ClipLoader size={ 50 } color={"#123abc"}/> : <h1>No recipes available for the search " {searchFor} "</h1>) : (recipes.map( recipe => (<Display title={recipe.recipe.label} image={recipe.recipe.image} healthLabels= {recipe.recipe.healthLabels} ingredients={recipe.recipe.ingredients} key={ Math.random()}/>)))} 
            </div>
        </div>
    )
}

export default Home;