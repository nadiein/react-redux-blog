import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import R from 'ramda';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faSave from '@fortawesome/fontawesome-free-solid/faSave';

import {
    fetchArticles, 
    loadMore, 
    addArticleToBookmark
} from './../actions';
import {getArticles} from './../../selectors';

class Articles extends Component {
    componentDidMount() {
        this.props.fetchArticles();
    }

    renderArticle = (article, index) => {
        const {addArticleToBookmark} = this.props;
        const excerpt = `${R.take(60, article.description)}...`;

        return (
            <div className="col-sm-6" key={index}>
                <div className="card article">
                    <div className="card-header article-header">
                        <img src={article.picture} alt={article.name} />
                    </div>
                    <div className="card-body article-body">
                        <Link to={`/${article.id}`}>
                            <h2>{article.name}</h2>
                        </Link>
                        <p>{excerpt}</p>
                        <span>{article.tags}</span>
                    </div>
                    <button className="btn" onClick={() => addArticleToBookmark(article.id)}>
                        <FontAwesomeIcon icon={faSave} />
                    </button>
                </div>
            </div>
        )
    }

    render() {
        const {articles, loadMore} = this.props;

        return (
            <div className="d-flex flex-column">
                <div className="articles cards row justify-content-between">
                    {articles.map((article, index) => this.renderArticle(article, index)
                    )}
                </div>
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
    loadMore,
    addArticleToBookmark
}

export default connect(mapStateToProps, mapDispatchToProps)(Articles);
