import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import MainLayout from './layouts/MainLayout';


// Import for authentication
import Login from './Authentication/Login';
import Register from './Authentication/Register';
import Logout from './Authentication/Logout';

// Import for dashboard
import Dashboard from './Dashboard/Dashboard';

// Import for participants
import ParticipantsList from './Participants/ParticipantsList';
import ParticipantDetail from './Participants/ParticipantDetail';
import ParticipantForm from './Participants/ParticipantForm';

// Import for courses
import CoursesList from './Courses/CoursesList';
import CourseDetail from './Courses/CourseDetail';
import CourseForm from './Courses/CourseForm';

// Import for instructors
import InstructorsList from './Instructors/InstructorsList';
import InstructorDetail from './Instructors/InstructorDetail';
import InstructorForm from './Instructors/InstructorForm';

// Import for events
import EventsList from './Events/EventsList';
import EventDetail from './Events/EventDetail';
import EventForm from './Events/EventForm';

// Import for masterclasses
import MasterclassesList from './Masterclasses/MasterclassesList';
import MasterclassDetail from './Masterclasses/MasterclassDetail';
import MasterclassForm from './Masterclasses/MasterclassForm';

// Import for managers
import ManagersList from './Managers/ManagersList';
import ManagerDetail from './Managers/ManagerDetail';
import ManagerForm from './Managers/ManagerForm';

// Import for admins
import AdminsList from './Admins/AdminsList';
import AdminDetail from './Admins/AdminDetail';
import AdminForm from './Admins/AdminForm';

// Import for course enrollments
import CourseEnrollmentsList from './CourseEnrollments/CourseEnrollmentsList';
import CourseEnrollmentDetail from './CourseEnrollments/CourseEnrollmentDetail';
import CourseEnrollmentForm from './CourseEnrollments/CourseEnrollmentForm';

// Import Certificates Components
import CertificatesList from './Certificates/CertificatesList';
import CertificateDetail from './Certificates/CertificateDetail';
import CertificateForm from './Certificates/CertificateForm';

// Import Course Materials Components
import CourseMaterialsList from './CourseMaterials/CourseMaterialsList';
import CourseMaterialDetail from './CourseMaterials/CourseMaterialDetail';
import CourseMaterialForm from './CourseMaterials/CourseMaterialForm';

// Import Event Participants Components
import EventParticipantsList from './EventParticipants/EventParticipantsList';
import EventParticipantDetail from './EventParticipants/EventParticipantDetail';
import EventParticipantForm from './EventParticipants/EventParticipantForm';

// Import Feedback Components
import FeedbackList from './Feedback/FeedbackList';
import FeedbackDetail from './Feedback/FeedbackDetail';
import FeedbackForm from './Feedback/FeedbackForm';

// Import Announcements Components
import AnnouncementsList from './Announcements/AnnouncementsList';
import AnnouncementDetail from './Announcements/AnnouncementDetail';
import AnnouncementForm from './Announcements/AnnouncementForm';

// Import Assignments Components
import AssignmentsList from './Assignments/AssignmentsList';
import AssignmentDetail from './Assignments/AssignmentDetail';
import AssignmentForm from './Assignments/AssignmentForm';

// Import Masterclass Participants Components
import MasterclassParticipantsList from './MasterclassParticipants/MasterclassParticipantsList';
import MasterclassParticipantDetail from './MasterclassParticipants/MasterclassParticipantDetail';
import MasterclassParticipantForm from './MasterclassParticipants/MasterclassParticipantForm';

// Import Quizzes Components
import QuizzesList from './Quizzes/QuizzesList';
import QuizDetail from './Quizzes/QuizDetail';
import QuizForm from './Quizzes/QuizForm';



const App = () => {
  return (
    <Router>
     <MainLayout>
      <Switch>
        {/* Routes for Authentication */}
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/logout" component={Logout} />

        {/* Routes for Dashboard */}
        <Route path="/dashboard" component={Dashboard} />

        {/* Routes for Participants */}
        <Route path="/participants" exact component={ParticipantsList} />
        <Route path="/participants/:id" exact component={ParticipantDetail} />
        <Route path="/participants/new" component={ParticipantForm} />
        <Route path="/participants/:id/edit" component={ParticipantForm} />

        {/* Routes for Courses */}
        <Route path="/courses" exact component={CoursesList} />
        <Route path="/courses/:id" exact component={CourseDetail} />
        <Route path="/courses/new" component={CourseForm} />
        <Route path="/courses/:id/edit" component={CourseForm} />

        {/* Routes for Instructors */}
        <Route path="/instructors" exact component={InstructorsList} />
        <Route path="/instructors/:id" exact component={InstructorDetail} />
        <Route path="/instructors/new" component={InstructorForm} />
        <Route path="/instructors/:id/edit" component={InstructorForm} />

        {/* Routes for Events */}
        <Route path="/events" exact component={EventsList} />
        <Route path="/events/:id" exact component={EventDetail} />
        <Route path="/events/new" component={EventForm} />
        <Route path="/events/:id/edit" component={EventForm} />

        {/* Masterclasses Routes */}
        <Route path="/masterclasses" exact component={MasterclassesList} />
        <Route path="/masterclasses/:id" exact component={MasterclassDetail} />
        <Route path="/masterclasses/create" exact component={MasterclassForm} />
        <Route path="/masterclasses/:id/edit" exact component={MasterclassForm} />
        
        {/* Managers Routes */}
        <Route path="/managers" exact component={ManagersList} />
        <Route path="/managers/:id" exact component={ManagerDetail} />
        <Route path="/managers/create" exact component={ManagerForm} />
        <Route path="/managers/:id/edit" exact component={ManagerForm} />
        
        {/* Admins Routes */}
        <Route path="/admins" exact component={AdminsList} />
        <Route path="/admins/:id" exact component={AdminDetail} />
        <Route path="/admins/create" exact component={AdminForm} />
        <Route path="/admins/:id/edit" exact component={AdminForm} />

        {/* CourseEnrollments Routes */}
        <Route path="/courseenrollments" exact component={CourseEnrollmentsList} />
        <Route path="/courseenrollments/:id" exact component={CourseEnrollmentDetail} />
        <Route path="/courseenrollments/create" exact component={CourseEnrollmentForm} />
        <Route path="/courseenrollments/:id/edit" exact component={CourseEnrollmentForm} />
        
        {/* Certificates Routes */}
        <Route path="/certificates" exact component={CertificatesList} />
        <Route path="/certificates/:id" exact component={CertificateDetail} />
        <Route path="/certificates/create" exact component={CertificateForm} />
        <Route path="/certificates/:id/edit" exact component={CertificateForm} />

        {/* CourseMaterials Routes */}
        <Route path="/coursematerials" exact component={CourseMaterialsList} />
        <Route path="/coursematerials/:id" exact component={CourseMaterialDetail} />
        <Route path="/coursematerials/create" exact component={CourseMaterialForm} />
        <Route path="/coursematerials/:id/edit" exact component={CourseMaterialForm} />

        {/* EventParticipants Routes */}
        <Route path="/eventparticipants" exact component={EventParticipantsList} />
        <Route path="/eventparticipants/:id" exact component={EventParticipantDetail} />
        <Route path="/eventparticipants/create" exact component={EventParticipantForm} />
        <Route path="/eventparticipants/:id/edit" exact component={EventParticipantForm} />

     {/* Feedback Routes */}
        <Route path="/feedback" exact component={FeedbackList} />
        <Route path="/feedback/:id" exact component={FeedbackDetail} />
        <Route path="/feedback/create" exact component={FeedbackForm} />
        <Route path="/feedback/:id/edit" exact component={FeedbackForm} />
        
        {/* Announcements Routes */}
        <Route path="/announcements" exact component={AnnouncementsList} />
        <Route path="/announcements/:id" exact component={AnnouncementDetail} />
        <Route path="/announcements/create" exact component={AnnouncementForm} />
        <Route path="/announcements/:id/edit" exact component={AnnouncementForm} />
        
        {/* Assignments Routes */}
        <Route path="/assignments" exact component={AssignmentsList} />
        <Route path="/assignments/:id" exact component={AssignmentDetail} />
        <Route path="/assignments/create" exact component={AssignmentForm} />
        <Route path="/assignments/:id/edit" exact component={AssignmentForm} />
        
        {/* Masterclass Participants Routes */}
        <Route path="/masterclassparticipants" exact component={MasterclassParticipantsList} />
        <Route path="/masterclassparticipants/:id" exact component={MasterclassParticipantDetail} />
        <Route path="/masterclassparticipants/create" exact component={MasterclassParticipantForm} />
        <Route path="/masterclassparticipants/:id/edit" exact component={MasterclassParticipantForm} />
        
        {/* Quizzes Routes */}
        <Route path="/quizzes" exact component={QuizzesList} />
        <Route path="/quizzes/:id" exact component={QuizDetail} />
        <Route path="/quizzes/create" exact component={QuizForm} />
        <Route path="/quizzes/:id/edit" exact component={QuizForm} />

        {/* ... Add routes for other components in similar fashion ... */}
     
      </Switch>
     </MainLayout>
    </Router>
  );
}

export default App;
