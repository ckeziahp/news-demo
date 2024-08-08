import React from 'react'
import NewsCard from '../components/newsCard';
import Layout from '../components/layout'
import image3   from "../assets/images/image3.jpg";
import { Link } from 'react-router-dom';

 
const newsData = [
    {
      title: 'The President has declared a Nationwide Holiday for the Country',
      summary: 'The President has declared a...',
      imageUrl: image3,
      source: 'The Graphic',
      time: '3 hours ago'
    },
    {
      title: 'Google Sounds Urgent Warning To Kill This Setting On Your Android Phone',
      summary: 'Google is advising users to turn off a certain setting...',
      imageUrl: 'https://via.placeholder.com/400',
      source: 'Hot Hardware',
      time: '4 hours ago',
      relatedArticles: [
        { title: 'Is Low Vitamin D Sabotaging Your Health?', Link: '/health', date: 'Jul 30' },
        { title: 'A Fresh Look at Vitamin D', Link: '/health', date: '6 days ago' },
    ],
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
                            relatedArticles={news.relatedArticles}
                        />
                    ))}
                </div>
            </Layout>
        );
    };

export default ForYou