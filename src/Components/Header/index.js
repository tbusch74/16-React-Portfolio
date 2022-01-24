import React from "react"
import Navigation from '../Navigation'

function Header(props) {
    
    const {
        categories = [],
        setCurrentCategory,
        currentCategory
    } = props;

    return (
        <header>
            <h1>
                <a href="/">TB</a>
            </h1>
            <Navigation categories = {categories} setCurrentCategory = {setCurrentCategory} currentCategory = {currentCategory}></Navigation>
        </header>
    )
}

export default Header