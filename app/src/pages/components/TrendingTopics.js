import React, { useState, useEffect } from 'react';
import { fetchTrendingTopics } from '../actions/trendingTopicsActions';

const TrendingTopics = () => {
    const [trendingTopics, setTrendingTopics] = useState([]);

    useEffect(() => {
        fetchTrendingTopics()
            .then((topics) => setTrendingTopics(topics))
            .catch((error) => console.log(error));
    }, []);

    return (
        <div className="trending-topics">
            <h2>Trending Topics</h2>
            <ul>
                {trendingTopics.map((topic) => (
                    <li key={topic.id}>
                        <a href={topic.url}>{topic.name}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TrendingTopics;