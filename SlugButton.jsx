import React from 'react';
import PropTypes from  'PropTypes';
import './SlugButton.module.css'

const SlugButton = props => (
    <button onClick = {()=> alert(props.article.slug)}>(props.article.author})
    </button>
);

SlugButton.propTypes = {
    articles: PropTypes.object.isRequired
};
export default SlugButton;