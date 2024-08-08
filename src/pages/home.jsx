import React from 'react'
import Layout from '../components/layout'
import NewsCard from '../components/newsCard'
import image1 from'../assets/images/image1.jpg'
import image2 from '../assets/images/image2.jpg'
import { Link } from 'react-router-dom'



const newsData = [
    {
      title: 'Adele Says She Won\'t Perform One Of Her Biggest Hits Ever Again',
      summary: 'Adele shares surprising update on retirement plans...',
      imageUrl: image1,
      source: 'The News International',
      time: '3 hours ago',
      relatedArticles: [
        { title: 'Is Low Vitamin D Sabotaging Your Health?', Link: '/health', date: 'Jul 30' },
        { title: 'A Fresh Look at Vitamin D', Link: '/health', date: '6 days ago' },
    ],
    },
    // {
    //   title: 'Google Sounds Urgent Warning To Kill This Setting On Your Android Phone',
    //   summary: 'Google is advising users to turn off a certain setting...',
    //   imageUrl: image2,
    //   source: 'Hot Hardware',
    //   time: '4 hours ago'
    // },
    
    
    // Add more news items here
  ];
  



   
          const Home = () => {
            return (
              <Layout>
                <div className="max-w-4xl mx-auto px-4 py-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
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
                </div>
              </Layout>
            );
          };
          
          export default Home

  
    
    // const Home = () => {
    //   return (
    //     <div>Home</div>
    //   )
    // }
    
    // export default Home