import React, { useEffect, useState } from 'react';
import ImageSearch from '../components/ImageSearch';

import axios from 'axios';
import Button from './Button';

const DailyImage = () => {
  	const [apodData, setApodData] = useState(null);
  	const [searchedImageUrl, setSearchedImageUrl] = useState(null);
  	const [showExplanation, setShowExplanation] = useState(false);

  	useEffect(() => {
    	const fetchApodData = async () => {
      	try {
        		const response = await axios.get(
          		`https://api.nasa.gov/planetary/apod?api_key=${import.meta.env.VITE_NASA_API_KEY}`
        		);
        		setApodData(response.data);
      	} catch (error) {
        		console.error('Error fetching APOD data:', error);
      	}
    	};

    	fetchApodData();
  	}, []);

  	const handleImageSearch = async (imageUrl) => {
    	setSearchedImageUrl(imageUrl);
    	console.log('Retrieved new image URL:', imageUrl);
  	};

  	const handleToggleExplanation = () => {
    	setShowExplanation(!showExplanation);
  	};

  	if (!apodData) {
    	return <div>Loading...</div>;
  	}

  	return (
    	<section>
      	<div className="flex flex-col justify-center items-center mb-[100px]">
        		<div className="content" data-testid="image-heading">
          		<div className="image-container">
            		<div className="py-1 px-2 text-white bg-red-500 absolute">Today's image:</div>
            		<img
              			data-testid="image-display"
              			className="image"
         				src={apodData.url}
           				alt={apodData.title}
         			/>
          		</div>
          	<div className="w-[800px] explanation">
            	<h1 className="title">
              		{apodData.title}
            	</h1>
            	
					{showExplanation ? (
              		<>
              			<Button 
                    		onClick={handleToggleExplanation}
                    		text="Hide description"
                    		color="red"
                    		textColor="white"
                		/>
                		<p className="explanation text-white">{apodData.explanation}</p>
              		</>
            		) : (
                		<Button 
                   		onClick={handleToggleExplanation}
                    		text="Read more"
                    		color="red"
                    		textColor="white"
                		/>
            		)}
          	</div>
        	</div>
      </div>

      <ImageSearch onSearch={handleImageSearch} searchedImageUrl={searchedImageUrl} />
    </section>
  );
};

export default DailyImage;
