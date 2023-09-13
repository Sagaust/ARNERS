import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CertificateDetail = ({ match }) => {
  const [certificate, setCertificate] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/certificates/${match.params.id}/`); // Replace with your Django API endpoint
        setCertificate(response.data);
      } catch (error) {
        console.error('An error occurred while fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [match.params.id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="certificate-detail">
      <h1>{certificate.name}</h1>
      <p>Course: {certificate.courseName}</p>
      {/* Add other certificate details here */}
    </div>
  );
};

export default CertificateDetail;
