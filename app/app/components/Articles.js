import React, { Component } from 'react';
import {connect} from 'react-redux';

import {fetchArticles} from '../actions';

class Articles extends Component {
    componentDidMount() {
        this.props.fetchArticles();
    }

    render() {
        return (
            <div>
                Articles
            </div>
        );
    }
}

const mapDispatchToProps = {
    fetchArticles
}

export default connect(null, mapDispatchToProps)(Articles);
