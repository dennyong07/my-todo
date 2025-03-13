import React from 'react';
import { useParams } from 'react-router-dom';

function DetailPage() {
  const { index } = useParams();

  return (
    <div>
      <h2>Detail Page</h2>
      <p>You are editing task {index}</p>
    </div>
  );
}

export default DetailPage;