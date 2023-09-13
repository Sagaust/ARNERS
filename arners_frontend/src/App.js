import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Login from './components/Authentication/Login';
import Register from './components/Authentication/Register';
import Logout from './components/Authentication/Logout';
import Dashboard from './components/Dashboard/Dashboard';
import ParticipantsList from './components/Participants/ParticipantsList';
import ParticipantDetail from './components/Participants/ParticipantDetail';
import ParticipantForm from './components/Participants/ParticipantForm';
import CoursesList from './components/Courses/CoursesList';
import CourseDetail from './components/Courses/CourseDetail';
import CourseForm from './components/Courses/CourseForm';
import InstructorsList from './components/Instructors/InstructorsList';
import InstructorDetail from './components/Instructors/InstructorDetail';
import InstructorForm from './components/Instructors/InstructorForm';
import EventsList from './components/Events/EventsList';
import EventDetail from './components/Events/EventDetail';
import EventForm from './components/Events/EventForm';
import MasterclassesList from './components/Masterclasses/MasterclassesList';
import MasterclassDetail from './components/Masterclasses/MasterclassDetail';
import MasterclassForm from './components/Masterclasses/MasterclassForm';
import ManagersList from './components/Managers/ManagersList';
import ManagerDetail from './components/Managers/ManagerDetail';
import ManagerForm from './components/Managers/ManagerForm';

// Import for admins
import AdminsList from './components/Admins/AdminsList';
import AdminDetail from './components/Admins/AdminDetail';
import AdminForm from './components/Admins/AdminForm';

// Import for course enrollments
import CourseEnrollmentsList from './components/CourseEnrollments/CourseEnrollmentsList';
import CourseEnrollmentDetail from './components/CourseEnrollments/CourseEnrollmentDetail';
import CourseEnrollmentForm from './components/CourseEnrollments/CourseEnrollmentForm';

// Import Certificates Components
import CertificatesList from './components/Certificates/CertificatesList';
import CertificateDetail from './components/Certificates/CertificateDetail';
import CertificateForm from './components/Certificates/CertificateForm';

// Import Course Materials Components
import CourseMaterialsList from './components/CourseMaterials/CourseMaterialsList';
import CourseMaterialDetail from './components/CourseMaterials/CourseMaterialDetail';
import CourseMaterialForm from './components/CourseMaterials/CourseMaterialForm';

// Import Event Participants Components
import EventParticipantsList from './components/EventParticipants/EventParticipantsList';
import EventParticipantDetail from './components/EventParticipants/EventParticipantDetail';
import EventParticipantForm from './components/EventParticipants/EventParticipantForm';

// Import Feedback Components
import FeedbackList from './components/Feedback/FeedbackList';
import FeedbackDetail from './components/Feedback/FeedbackDetail';
import FeedbackForm from './components/Feedback/FeedbackForm';

// Import Announcements Components
import AnnouncementsList from './components/Announcements/AnnouncementsList';
import AnnouncementDetail from './components/Announcements/AnnouncementDetail';
import AnnouncementForm from './components/Announcements/AnnouncementForm';

// Import Assignments Components
import AssignmentsList from './components/Assignments/AssignmentsList';
import AssignmentDetail from './components/Assignments/AssignmentDetail';
import AssignmentForm from './components/Assignments/AssignmentForm';

// Import Masterclass Participants Components
import MasterclassParticipantsList from './components/MasterclassParticipants/MasterclassParticipantsList';
import MasterclassParticipantDetail from './components/MasterclassParticipants/MasterclassParticipantDetail';
import MasterclassParticipantForm from './components/MasterclassParticipants/MasterclassParticipantForm';

// Import Quizzes Components
import QuizzesList from './components/Quizzes/QuizzesList';
import QuizDetail from './components/Quizzes/QuizDetail';
import QuizForm from './components/Quizzes/QuizForm';




const App = () => {
  return (
     <MainLayout>
      <BrowserRouter>
        <Routes>
          {/* Routes for Authentication */}
          <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Logout />} />

        {/* Routes for Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Routes for Participants */}
        <Route path="/participants" element={<ParticipantsList />} />
        <Route path="/participants/:id" element={<ParticipantDetail />} />
        <Route path="/participants/new" element={<ParticipantForm />} />
        <Route path="/participants/:id/edit" element={<ParticipantForm />} />

        {/* Routes for Courses */}
        <Route path="/courses" exact component={CoursesList} />
        <Route path="/courses/:id" exact component={CourseDetail} />
        <Route path="/courses/new" component={CourseForm} />
        <Route path="/courses/:id/edit" component={CourseForm} />

        {/* Routes for Instructors */}
<Route path="/instructors" element={<InstructorsList />} />
<Route path="/instructors/:id" element={<InstructorDetail />} />
<Route path="/instructors/new" element={<InstructorForm />} />
<Route path="/instructors/:id/edit" element={<InstructorForm />} />

{/* Routes for Events */}
<Route path="/events" element={<EventsList />} />
<Route path="/events/:id" element={<EventDetail />} />
<Route path="/events/new" element={<EventForm />} />
<Route path="/events/:id/edit" element={<EventForm />} />

{/* Masterclasses Routes */}
<Route path="/masterclasses" element={<MasterclassesList />} />
<Route path="/masterclasses/:id" element={<MasterclassDetail />} />
<Route path="/masterclasses/create" element={<MasterclassForm />} />
<Route path="/masterclasses/:id/edit" element={<MasterclassForm />} />

{/* Managers Routes */}
<Route path="/managers" element={<ManagersList />} />
<Route path="/managers/:id" element={<ManagerDetail />} />
<Route path="/managers/create" element={<ManagerForm />} />
<Route path="/managers/:id/edit" element={<ManagerForm />} />

{/* Admins Routes */}
<Route path="/admins" element={<AdminsList />} />
<Route path="/admins/:id" element={<AdminDetail />} />
<Route path="/admins/create" element={<AdminForm />} />
<Route path="/admins/:id/edit" element={<AdminForm />} />

{/* CourseEnrollments Routes */}
<Route path="/courseenrollments" element={<CourseEnrollmentsList />} />
<Route path="/courseenrollments/:id" element={<CourseEnrollmentDetail />} />
<Route path="/courseenrollments/create" element={<CourseEnrollmentForm />} />
<Route path="/courseenrollments/:id/edit" element={<CourseEnrollmentForm />} />

{/* Certificates Routes */}
<Route path="/certificates" element={<CertificatesList />} />
<Route path="/certificates/:id" element={<CertificateDetail />} />
<Route path="/certificates/create" element={<CertificateForm />} />
<Route path="/certificates/:id/edit" element={<CertificateForm />} />

{/* CourseMaterials Routes */}
<Route path="/coursematerials" element={<CourseMaterialsList />} />
<Route path="/coursematerials/:id" element={<CourseMaterialDetail />} />
<Route path="/coursematerials/create" element={<CourseMaterialForm />} />
<Route path="/coursematerials/:id/edit" element={<CourseMaterialForm />} />


  {/* EventParticipants Routes */}
<Route path="/eventparticipants" element={<EventParticipantsList />} />
<Route path="/eventparticipants/:id" element={<EventParticipantDetail />} />
<Route path="/eventparticipants/create" element={<EventParticipantForm />} />
<Route path="/eventparticipants/:id/edit" element={<EventParticipantForm />} />

{/* Feedback Routes */}
<Route path="/feedback" element={<FeedbackList />} />
<Route path="/feedback/:id" element={<FeedbackDetail />} />
<Route path="/feedback/create" element={<FeedbackForm />} />
<Route path="/feedback/:id/edit" element={<FeedbackForm />} />

{/* Announcements Routes */}
<Route path="/announcements" element={<AnnouncementsList />} />
<Route path="/announcements/:id" element={<AnnouncementDetail />} />
<Route path="/announcements/create" element={<AnnouncementForm />} />
<Route path="/announcements/:id/edit" element={<AnnouncementForm />} />

{/* Assignments Routes */}
<Route path="/assignments" element={<AssignmentsList />} />
<Route path="/assignments/:id" element={<AssignmentDetail />} />
<Route path="/assignments/create" element={<AssignmentForm />} />
<Route path="/assignments/:id/edit" element={<AssignmentForm />} />

{/* Masterclass Participants Routes */}
<Route path="/masterclassparticipants" element={<MasterclassParticipantsList />} />
<Route path="/masterclassparticipants/:id" element={<MasterclassParticipantDetail />} />
<Route path="/masterclassparticipants/create" element={<MasterclassParticipantForm />} />
<Route path="/masterclassparticipants/:id/edit" element={<MasterclassParticipantForm />} />

{/* Quizzes Routes */}
<Route path="/quizzes" element={<QuizzesList />} />
<Route path="/quizzes/:id" element={<QuizDetail />} />
<Route path="/quizzes/create" element={<QuizForm />} />
<Route path="/quizzes/:id/edit" element={<QuizForm />} />

        </Routes>
      </BrowserRouter>
    </MainLayout>
  );
}

export default App;
