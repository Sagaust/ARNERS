import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CertificatesList = () => {
  const [certificates, setCertificates] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/certificates/'); // Replace with your Django API endpoint
        setCertificates(response.data);
      } catch (error) {
        console.error('An error occurred while fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="certificates-list">
      <h1>Certificates</h1>
      <ul>
        {certificates.map((certificate) => (
          <li key={certificate.id}>{certificate.name} - {certificate.courseName}</li>
        ))}
