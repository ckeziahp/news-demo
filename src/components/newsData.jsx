import React from 'react'

const newsData = {
    image: 'https://via.placeholder.com/150', // Replace with your image source
    title: 'Nearly 1 in 4 Americans is deficient in Vitamin D. How do you know if you\'re one of them?',
    time: '4 hours ago',
    author: 'Hannah Yasharoff',
    source: 'USA TODAY',
    relatedArticles: [
        { title: 'Is Low Vitamin D Sabotaging Your Health?', link: '#', date: 'Jul 30' },
        { title: 'A Fresh Look at Vitamin D', link: '#', date: '6 days ago' },
    ],
};

return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <NewsCard 
            image={newsData.image} 
            title={newsData.title} 
            time={newsData.time} 
            author={newsData.author} 
            source={newsData.source} 
            relatedArticles={newsData.relatedArticles} 
        />
    </div>
);




export default newsData




