import React, { Component } from 'react';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faBookmark from '@fortawesome/fontawesome-free-solid/faBookmark';

const Bookmarks = () => {
    return (
        <div className="bookmark">
            <Link to="/bookmarks">
                <FontAwesomeIcon icon={faSave} onClick={() => addArticleToBookmark(article.id)} />
            </Link>
        </div>
    );
}

export default Bookmarks;
