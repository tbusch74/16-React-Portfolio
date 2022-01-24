import React, {useEffect} from "react"

function Navigation({categories, currentCategory, setCurrentCategory}) {

    useEffect(() => {document.title = currentCategory.displayName},[currentCategory])

    return (  
    <nav>
        <ul>
            {categories.map((category) => {
                return (
                <li
                    className={`${currentCategory.name === category.name && 'navActive'}`} key={category.name}
                >
                    <div
                        onClick={() => {
                            setCurrentCategory(category)
                            }}
                    >
                        {category.displayName}</div>
                </li>
                )
            })}
        </ul>
    </nav>
    )
}

export default Navigation