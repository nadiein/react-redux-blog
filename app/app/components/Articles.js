import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import R from 'ramda';

import {fetchArticles} from './../actions';
import {getArticles} from './../../selectors';

class Articles extends Component {
    componentDidMount() {
        this.props.fetchArticles();
    }

    renderArticle = (article, index) => {
        const excerpt = `${R.take(60, article.description)}...`;

        return (
            <div className="col-sm-6">
                <div key={index} className="card article">
                    <div className="card-header article-header">
                        <img src={article.picture} alt={article.name} />
                    </div>
                    <div className="card-body article-body">
                        <Link to={`/articles/${article.id}`}>
                            <h2>{article.name}</h2>
                        </Link>
                        <p>{excerpt}</p>
                        <span>{article.tags}</span>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        const {articles} = this.props;
        console.log(articles);
        return (
            <div className="articles cards row justify-content-between">
                {articles.map((article, index) => this.renderArticle(article, index)
                )}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    articles: getArticles(state)
})

const mapDispatchToProps = {
    fetchArticles
}

export default connect(mapStateToProps, mapDispatchToProps)(Articles);
