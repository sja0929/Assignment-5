import React, { Component } from "react";
class ArticleListItem
    extends Component {
    state = {}

    showAlert (text) {
        alert(text);
    }

    render () {
        const { slug, title, shortText, pubDate } = this.props.article
        return (<li className="">
            <h4>
                {title}
            </h4>
            <p>
                {shortText}
            </p>
            <div>
                {pubDate}
                <button onClick={() => {
                    console.log(slug);
                    this.showAlert(slug);
                }}>show article slug</button>
            </div>
        </li>);
    }
}

export default ArticleListItem
    ;