import React, { useEffect, useState } from 'react';
import axios from 'axios';

const InstructorList = () => {
    const [instructors, setInstructors] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/instructors/')  // Replace with your API endpoint
        .then(response => {
            setInstructors(response.data);
        })
        .catch(error => {
            console.log('Error fetching data:', error);
        });
    }, []);

    return (
        <div>
            {instructors.map(instructor => (
                <div key={instructor.id}>
                    {instructor.name}  {/* Replace with your model fields */}
                </div>
            ))}
        </div>
    );
};

export default InstructorList;
