import React from 'react';

const RefreshButton = () => {
  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <button onClick={refreshPage}>
      Restart Game
    </button>
  );
};

export default RefreshButton;