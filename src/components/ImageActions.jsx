import React, { useState } from 'react';

const ImageActions = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div>
      <button onClick={toggleLike}>{isLiked ? 'Unlike' : 'Like'}</button>
      <button onClick={toggleFavorite}>
        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
    </div>
  );
};

export default ImageActions;