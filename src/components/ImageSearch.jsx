import React, { useState } from 'react';
import axios from 'axios';

const ImageSearch = ({ onSearch, searchedImageUrl }) => {
  const [searchDate, setSearchDate] = useState('');
  const [formattedDate, setFormattedDate] = useState('');

  const handleInputChange = (event) => {
    const selectedDate = new Date(event.target.value);
    setSearchDate(event.target.value);
    setFormattedDate(
      selectedDate.toLocaleDateString('en-US', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      })
    );
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.get(
        `https://api.nasa.gov/planetary/apod?api_key=CNCR3kHpR52WQrd9974i30CnQlEIcGrkH9hI7CBG&date=${searchDate}`
      );

      onSearch(response.data.url);
    } catch (error) {
      console.error('Error fetching image:', error);
    }
  };

  return (
    <section className="flex flex-col justify-center items-center">
      <h2 className="type-mark text-5xl text-white py-5">Search for a certain day's snap</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="date"
          value={searchDate}
          onChange={handleInputChange}
          placeholder="Select a date"
          className="pl-1"
        />
        <button className="ml-3 py-1 px-2 bg-red-500 text-white" type="submit">
          Search
        </button>
      </form>

      {searchedImageUrl ? (
        <div className="flex flex-col text-center mt-5">
          <h3 className="mb-1 text-lg text-white">{formattedDate}</h3>
          <img src={searchedImageUrl} className="image-container image" alt="Searched Image" />
        </div>
      ) : (
        <div className="flex flex-col text-center mt-5">
          <p className="text-white">Please select a previous date.</p>
        </div>
      )}
    </section>
  );
};

export default ImageSearch;