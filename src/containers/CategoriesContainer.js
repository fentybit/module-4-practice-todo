import React from 'react';

class CategoriesContainer extends React.Component {
    render() {
        const { categories, selectCategory, selectedCategory } = this.props

        return (
            <div className="categories">
                <h5>Category Filters</h5>
                {categories.map(category => <button key={category} className={selectedCategory === category ? 'selected' : ''} onClick={() => selectCategory(category)}> {category} </button>)}
            </div>
        )
    }
}

export default CategoriesContainer;