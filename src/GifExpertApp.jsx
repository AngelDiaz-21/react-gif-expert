import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () =>{

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (newCategory) => {
        
        if(categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories])
    }

    return (
        <>
            {/* Title */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory 
                onNewCategory={ onAddCategory }
            />

            {/* Listado de Items */}
            {
                categories.map( (category) =>
                // Va a regresar un objeto por eso se ponen parentesis
                (
                    <GifGrid 
                        key={ category } 
                        category={ category }
                    />        
                ))
            }
        </>
    )
}