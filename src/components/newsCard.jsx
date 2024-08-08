// import React from 'react'
// import img from '../assets/images/firefun.jpg'

// // src/components/NewsCard.jsx

// const NewsCard = ({ title, summary, imageUrl, source, time }) => {
//   return (
//     <div className="max-w-sm w-full lg:max-w-full lg:flex">

//       <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t firefun.jpglg:rounded-t-none lg:rounded-l text-center overflow-hidden" 

//     //   style={{backgroundImage: `url(${imageUrl})`}} title={title}

//       >
//         <img src={img} alt="" />
//       </div>

//       <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">

//         <div className="mb-8">
//           <p className="text-sm text-gray-600 flex items-center">
//             {source}
//           </p>
//           <div className="text-gray-900 font-bold text-xl mb-2">{title}</div>
//           <p className="text-gray-700 text-base">{summary}</p>
//         </div>
//         <div className="flex items-center">
//           <div className="text-sm">
//             <p className="text-gray-600">{time}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NewsCard


// import React from 'react';

// function NewsCard({ title, summary, imageUrl, source, time }) {
//     return (
//       <div className="max-w-sm rounded overflow-hidden shadow-lg flex flex-col">
//         <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${imageUrl})` }}>
//           <img className="w-full h-full object-cover" src={imageUrl} alt={title} />
//         </div>
//         <div className="p-4 flex flex-col justify-between">
//           <div>
//             <div className="font-bold text-xl mb-2">{title}</div>
//             <p className="text-gray-700 text-base">{summary}</p>
//           </div>
//           <div className="mt-4 flex justify-between">
//             <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
//               {source}
//             </span>
//             <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
//               {time}
//             </span>
//           </div>
//         </div>
//       </div>
//     );
//   }

// export default NewsCard;


import React from 'react';
import image1 from "../assets/images/image1.jpg"
// import image2 from"../assets/images/image2.jpg"
// import image3 from "../assets/images/image3.jpg"

function NewsCard({ title, summary, source, time }) {
    return (
        <div className="flex max-w-md rounded overflow-hidden shadow-lg h-full">
            <div className="flex-none w-48 bg-cover text-center overflow-hidden">
                <img className="w-[800px] rounded-md object-cover h-[250px]" src={image1} alt={title} />
            </div>
            <div className="flex flex-col justify-between p-10 flex-grow">
                <div>
                    <div className="font-bold text-xl mb-2 p-2">{title}</div>
                    <p className="text-gray-700 text-base">{summary}</p>
                </div>
                <div className="mt-4 flex justify-between">
                    <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                        {source}
                    </span>
                    <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                        {time}
                    </span>
                </div>
            </div>

        </div>
    );
}

// function NewsCard({ title, description, author, date, imageUrl }) {
//     return (
//       <div className="flex flex-col md:flex-row bg-white shadow-md rounded-lg overflow-hidden">
//         <img src={imageUrl} alt={title} className="w-full md:w-1/2 h-64 object-cover" />
//         <div className="flex flex-col p-4 flex-grow">
//           <h2 className="text-2xl font-bold mb-2">{title}</h2>
//           <p className="text-gray-700">{description}</p>
//           <div className="flex items-center mt-4">
//             <p className="text-gray-500 mr-2">By {author}</p>
//             <p className="text-gray-500">{date}</p>
//           </div>
//         </div>
//       </div>
//     );
//   }


export default NewsCard;
