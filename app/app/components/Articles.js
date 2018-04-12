import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import R from 'ramda';

import {fetchArticles, loadMore} from './../actions';
import {getArticles} from './../../selectors';

class Articles extends Component {
    componentDidMount() {
        this.props.fetchArticles();
    }

    renderArticle = (article, index) => {
        const excerpt = `${R.take(60, article.description)}...`;

        return (
            <div className="col-sm-6" key={index}>
                <div className="card article">
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
        const {articles, loadMore} = this.props;

        return (
            <div className="articles cards row justify-content-between">
                {articles.map((article, index) => this.renderArticle(article, index)
                )}
                <button onClick={loadMore}>Load More</button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        articles: getArticles(state)
    }
}

const mapDispatchToProps = {
    fetchArticles,
    loadMore
}

export default connect(mapStateToProps, mapDispatchToProps)(Articles);
