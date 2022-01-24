import React from "react"
import Navigation from '../Navigation'

function Header(props) {
    
    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
        contactSelected,
        setContactSelected
    } = props;

    return (
        <header>
            <h1>
                <a href="/">TB</a>
            </h1>

            <Navigation contactSelected = {contactSelected} setContactSelected = {setContactSelected} categories = {categories} setCurrentCategory = {setCurrentCategory} currentCategory = {currentCategory}></Navigation>
        </header>
    )
}

export default Header