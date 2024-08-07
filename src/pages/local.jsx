import React from 'react'
import Layout from '../components/layout';
import NewsCard from '../components/newsCard';

  
const newsData = [
  {
    title: 'Adele Says She Won\'t Perform One Of Her Biggest Hits Ever Again',
    summary: 'Adele shares surprising update on retirement plans...',
    imageUrl: 'https://via.placeholder.com/400',
    source: 'The News International',
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



  const Local = () => {
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

export default Local