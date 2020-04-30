import React from 'react';


function CategoryList({category}) {
    return (
        <li> {category.name}</li>
    );
}

export default CategoryList;