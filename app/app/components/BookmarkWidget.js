import React, { Component } from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

import {
    getTotalBookmarksCount,
    getTotalBookmarks
} from './../../selectors';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faBookmark from '@fortawesome/fontawesome-free-solid/faBookmark';

const BookmarkWidget = ({totalBookmarksCount, totalBookmarks}) => {
    return (
        <div className="bookmark">
            <Link to="/bookmarks">
                <FontAwesomeIcon icon={faBookmark} />
                <span>{totalBookmarksCount} item(s)</span>
                <div>{`Bookmarked: ${totalBookmarks}...`}</div>
            </Link>
        </div>
    );
}

const mapStateToProps = state => ({
    totalBookmarksCount: getTotalBookmarksCount(state),
    totalBookmarks: getTotalBookmarks(state)
})

export default connect(mapStateToProps, null)(BookmarkWidget);
