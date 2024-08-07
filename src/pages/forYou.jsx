import React from 'react'
import NewsCard from '../components/newsCard';
import Layout from '../components/layout';

 
const newsData = [
    {
      title: 'The President has declared a Nationwide Holiday for the Country',
      summary: 'The President has declared a...',
      imageUrl: 'https://via.placeholder.com/400',
      source: 'The Graphic',
      time: '3 hours ago'
    },
    {
      title: 'Google Sounds Urgent Warning To Kill This Setting On Your Android Phone',
      summary: 'Google is advising users to turn off a certain setting...',
      imageUrl: 'https://via.placeholder.com/400',
      source: 'Hot Hardware',
      time: '4 hours ago'
    },
    {
      title: 'Google Sounds Urgent Warning To Kill This Setting On Your Android Phone',
      summary: 'Google is advising users to turn off a certain setting...',
      imageUrl: 'https://via.placeholder.com/400',
      source: "Ghana Web",
      time: '4 hours ago'
    },
    {
      title: 'Google Sounds Urgent Warning To Kill This Setting On Your Android Phone',
      summary: 'Google is advising users to turn off a certain setting...',
      imageUrl: 'https://via.placeholder.com/400',
      source: 'Hot Hardware',
      time: '4 hours ago'
    },
    {
      title: 'Google Sounds Urgent Warning To Kill This Setting On Your Android Phone',
      summary: 'Google is advising users to turn off a certain setting...',
      imageUrl: 'https://via.placeholder.com/400',
      source: 'Hot Hardware',
      time: '4 hours ago'
    },
    // Add more news items here
  ];



    const ForYou = () => {
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

export default ForYou