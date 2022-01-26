import React from "react";

import { Button } from "./SortArt.styles";

function SortArt({ handleCategory, art, filterCategory}) {

    function handleClick(e) {
        handleCategory(e)
    }

    const allCategories = art.map(art => art.category)
    console.log(allCategories)

    const categories = [...new Set(allCategories)]
    categories.unshift('All Works')


    const buttons = categories.map(cat => {
      const variant = filterCategory === cat ? "secondary" : "outline-secondary"
      return (
      <Button
        key={cat}
        onClick={handleClick}
        name={cat}
        variant={variant}
        >
          {cat.charAt(0).toUpperCase() + cat.slice(1)}
      </Button>
      )
    })


    return (
          <div>
            {buttons}
          </div>
    )
}

export default SortArt