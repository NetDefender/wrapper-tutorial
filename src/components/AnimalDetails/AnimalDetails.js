import React from 'react';
import PropTypes from 'prop-types';
import './AnimalDetails.css'

export default function AnimalDetails({ diet, scientificName }) {
    function convertFood(food) {
        switch (food) {
            case 'insects':
                return '🐜';
            case 'meat':
                return '🍖';
            case 'plants':
            default:
                return '🌱';
        }
    }

    return (
        <div className="details">
            <h4>Details</h4>
            <div>
                Scientific name: {scientificName}
            </div>
            <div>
                Diet: {diet.map(food => convertFood(food)).join('')}
            </div>
        </div>
    )
}

AnimalDetails.propTypes = {
    diet: PropTypes.arrayOf(PropTypes.string).isRequired,
    scientificName: PropTypes.string.isRequired,
}