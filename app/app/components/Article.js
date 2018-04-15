import React, { Component } from 'react';
import {connect} from 'react-redux';
import R from 'ramda';

import {fetchArticleById} from './../actions';
import {getArticleById} from './../../selectors';

class Article extends Component {
    componentDidMount() {
        this.props.fetchArticleById(this.props.params.id);
    }

    renderFields = () => {
        const {article} = this.props;

        const articleFields = R.compose(
            R.toPairs,
            R.pick([
                'name',
                'age',
                'eyeColor',
                'company',
                'email',
                'phone',
                'address',
                'description'
            ])
        )(article);

        return articleFields.map(([key, value]) => (
            <div className="article-info" key={key}>
                {key === 'email' ? <a href={`mailto:${value}`}>{value}</a> : <p>{value}</p> && key === 'phone' ? <a href={`tel:${value}`}>{value}</a> : <p>{value}</p>}
            </div>
        ))
    }

    renderContent = () => {
        const {article} = this.props;
        return (
            <div className="row">
                <div className="col-sm-3 picture-holder">
                    <img src={article.pictureFull} />
                </div>
                <div className="col-sm-9">
                    <div className="d-flex flex-column">
                        {this.renderFields()}
                    </div>
                </div>
            </div>
        )
    }

    renderSidebar = () => {
        return (
            <span>SideBar</span>
        )
    }

    render() {
        const {article} = this.props;
        return (
            <div className="container">
                <div className="article row">
                    <div className="col-sm-3 sidebar-holder">
                        {article && this.renderSidebar()}
                    </div>
                    <div className="col-sm-9 connect-holder">
                        {article && this.renderContent()}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    article: getArticleById(state, state.articlePage.id)
})

const mapDispatchToProps = {
    fetchArticleById
}

export default connect(mapStateToProps, mapDispatchToProps)(Article);
