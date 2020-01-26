import React from 'react';
import classes from './Burger.module.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'


const burger = (props) => {

    //Object.keys()..is an inbuilt method with takes objects with key values and returns them as an array.
        let transformedIng = Object.keys(props.ingredients)
        .map(igKey => {
            return[...Array(props.ingredients[igKey])].map((_, i)=>{
                return <BurgerIngredient key = {igKey + i} type = {igKey}/>
            });
        })
        .reduce((arr, el) => {              //with reduce method we are trying to access array elemts
            return arr.concat(el)           //in transformedIng array.
        }, []);
        console.log(transformedIng);
        
        if(transformedIng.length === 0)
        {
            transformedIng = <p>Please Add Items :)</p>
        }

    return(
        <div className = {classes.Burger}>
            <BurgerIngredient type = "bread-top"/>
            {transformedIng}
            <BurgerIngredient type = "bread-bottom"/>
        </div>
    );
};

export default burger;
