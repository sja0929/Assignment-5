import React from "react";
import ArticleListItem from './ArticleListItem';

class ArticleList extends React.Component {
    state = {}
    render () {
        const articles = this.props.articles;
        //console.log(this.props)
        return (<div className="">
            <ul className="">
                {articles.map((article, index) => {
                    return (
                        <ArticleListItem key={index}
                            article={article}
                        />
                    );
                })}
            </ul>
        </div>);
    }
}

export default ArticleList;