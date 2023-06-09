import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/Header'
import DailyImage from './components/DailyImage';

const App = () => {
  	const [apodData, setApodData] = useState(null);

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

  	if (!apodData) {
    	return <div>Loading...</div>;
  	}

  	return (
    	<div className="flex flex-col">
      	<Header />
      	<DailyImage />
    	</div>
  	);
};

export default App;
