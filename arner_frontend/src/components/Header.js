import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">ArnersLearn</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/dashboard">Dashboard</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/courses">Courses</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/events">Events</Link>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownParticipants" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Participants
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownParticipants">
              <Link className="dropdown-item" to="/participants/list">List</Link>
              <Link className="dropdown-item" to="/participants/detail">Detail</Link>
              <Link className="dropdown-item" to="/participants/form">Form</Link>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownInstructors" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Instructors
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownInstructors">
              <Link className="dropdown-item" to="/instructors/list">List</Link>
              <Link className="dropdown-item" to="/instructors/detail">Detail</Link>
              <Link className="dropdown-item" to="/instructors/form">Form</Link>
            </div>
          </li>

 <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownEvents" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Events
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownEvents">
              <Link className="dropdown-item" to="/events/list">List</Link>
              <Link className="dropdown-item" to="/events/detail">Detail</Link>
              <Link className="dropdown-item" to="/events/form">Form</Link>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMasterclasses" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Masterclasses
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMasterclasses">
              <Link className="dropdown-item" to="/masterclasses/list">List</Link>
              <Link className="dropdown-item" to="/masterclasses/detail">Detail</Link>
              <Link className="dropdown-item" to="/masterclasses/form">Form</Link>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownManagers" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Managers
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownManagers">
              <Link className="dropdown-item" to="/managers/list">List</Link>
              <Link className="dropdown-item" to="/managers/detail">Detail</Link>
              <Link className="dropdown-item" to="/managers/form">Form</Link>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownAdmins" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Admins
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownAdmins">
              <Link className="dropdown-item" to="/admins/list">List</Link>
              <Link className="dropdown-item" to="/admins/detail">Detail</Link>
              <Link className="dropdown-item" to="/admins/form">Form</Link>
            </div>
          </li>

          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownCourseEnrollments" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Course Enrollments
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownCourseEnrollments">
              <Link className="dropdown-item" to="/courseenrollments/list">List</Link>
              <Link className="dropdown-item" to="/courseenrollments/detail">Detail</Link>
              <Link className="dropdown-item" to="/courseenrollments/form">Form</Link>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownCertificates" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Certificates
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownCertificates">
              <Link className="dropdown-item" to="/certificates/list">List</Link>
              <Link className="dropdown-item" to="/certificates/detail">Detail</Link>
              <Link className="dropdown-item" to="/certificates/form">Form</Link>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownCourseMaterials" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Course Materials
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownCourseMaterials">
              <Link className="dropdown-item" to="/coursematerials/list">List</Link>
              <Link className="dropdown-item" to="/coursematerials/detail">Detail</Link>
              <Link className="dropdown-item" to="/coursematerials/form">Form</Link>
            </div>
          </li>
    
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownEventParticipants" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Event Participants
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownEventParticipants">
              <Link className="dropdown-item" to="/eventparticipants/list">List</Link>
              <Link className="dropdown-item" to="/eventparticipants/detail">Detail</Link>
              <Link className="dropdown-item" to="/eventparticipants/form">Form</Link>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownFeedback" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Feedback
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownFeedback">
              <Link className="dropdown-item" to="/feedback/list">List</Link>
              <Link className="dropdown-item" to="/feedback/detail">Detail</Link>
              <Link className="dropdown-item" to="/feedback/form">Form</Link>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownAnnouncements" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Announcements
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownAnnouncements">
              <Link className="dropdown-item" to="/announcements/list">List</Link>
              <Link className="dropdown-item" to="/announcements/detail">Detail</Link>
              <Link className="dropdown-item" to="/announcements/form">Form</Link>
            </div>
          </li>
          {/* ... continue this pattern for additional components */}

          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownAssignments" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Assignments
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownAssignments">
              <Link className="dropdown-item" to="/assignments/list">List</Link>
              <Link className="dropdown-item" to="/assignments/detail">Detail</Link>
              <Link className="dropdown-item" to="/assignments/form">Form</Link>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMasterclassParticipants" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Masterclass Participants
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMasterclassParticipants">
              <Link className="dropdown-item" to="/masterclassparticipants/list">List</Link>
              <Link className="dropdown-item" to="/masterclassparticipants/detail">Detail</Link>
              <Link className="dropdown-item" to="/masterclassparticipants/form">Form</Link>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownQuizzes" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Quizzes
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownQuizzes">
              <Link className="dropdown-item" to="/quizzes/list">List</Link>
              <Link className="dropdown-item" to="/quizzes/detail">Detail</Link>
              <Link className="dropdown-item" to="/quizzes/form">Form</Link>
            </div>
          </li>
            {/* ... more dropdowns for other components */}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
