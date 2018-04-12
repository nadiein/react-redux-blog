import React, { Component } from 'react';
import {connect} from 'react-redux';
import R from 'ramda';

import {fetchArticleById} from './../actions';

class Article extends Component {
    componentDidMount() {
        this.props.fetchArticleById(this.props.params.id);
    }

    render() {

        return (
            <div className="articles cards row justify-content-between">
                Phone
            </div>
        );
    }
}

const mapDispatchToProps = {
    fetchArticleById
}

export default connect(null, mapDispatchToProps)(Article);
