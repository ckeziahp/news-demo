import React from 'react'
import NewsCard from '../components/newsCard';
import Layout from '../components/layout';

const Sports = () => {
  return (
    <Layout>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {newsData.map((news, index) => (
                <NewsCard
                    key={index}
                    title={news.title}
                    summary={news.summary}
                    imageUrl={news.imageUrl}
                    source={news.source}
                    time={news.time}
                />
            ))}
        </div>
    </Layout>
);
};

export default Sports