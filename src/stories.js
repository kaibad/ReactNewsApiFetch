import React from 'react';
import { useGlobalContext } from './context';

const Stories = () => {
    const { hits, isLoading, removePost } = useGlobalContext();

    if (isLoading) {
        return (
            <>
                <h2>Loading..!!</h2>
            </>
        );
    }

    return (
        <>
            <div className="news-card-container">
                {hits.map((currentPost) => {
                    const { title, author, num_comments, url, updated_at, objectID } = currentPost;
                    return (
                        <div className="news-card" key={objectID}>
                            <h2>{title}</h2>
                            <p>By <span>{author}</span> | <span>{num_comments}</span> Comments </p>
                            <p>Last Updated: <span>{updated_at}</span></p>
                            <div className="news-card-button">
                                <a href={url} target='_blank' rel='noopener noreferrer'>Read More</a>
                                <a href="#" rel='noopener noreferrer' onClick={() => removePost(objectID)}>Remove</a>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default Stories;
