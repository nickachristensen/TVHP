import React from "react";

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
      <button
        key={cat}
        onClick={handleClick}
        name={cat}
        variant={variant}
        >
          {cat}
      </button>
      )
    })


    return (
        <>
        <h4>Sort By:</h4>
          <div>
            {buttons}
          </div>
          </>
    )
}

export default SortArt