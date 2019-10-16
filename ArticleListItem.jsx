import React from 'react';
import PropTypes from 'prop-types';
import SlugButton from './SlugButton';
import ArticleImage from './ArticleImage';
import './ArticleListItem.module.css'

 const ArticleListItem = props => (
     return(
         <div>
             <ArticleImage article = {props.article}/>
             <strong><b>
                 {props.article.title}
             </b>
                 </strong> 
                 <p>
                     {props.article.shortText}
                 </p>
                 <b>
                     <time datetime = {props.article.pubYear}>{props.article.pubDate}
                     </time>
                 </b>
                 <SlugButton article = {props.article}/>
         </div>
     );
 );

ArticleListItem.propTypes = {
    articles: PropTypes.object.isRequired
};
export default ArticleListItem;
