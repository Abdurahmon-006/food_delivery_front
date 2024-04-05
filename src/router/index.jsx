import { Navigate, Route, Routes } from 'react-router-dom';
import { MainLayout } from '../Layouts/MainLayout';
import { authStore } from 'store/auth.store';
import { observer } from 'mobx-react-lite';
// import { StudentPath } from 'modules/Users';
// import { CoursesFundamentals } from 'modules/Users/CoursesFundamentals';
import { AuthLayout } from '../Layouts/AuthLayout';
import { Exam } from 'modules/Users/Exam/Exam';
import { Login } from 'modules/Auth/Login';
import { ResetPassword } from 'modules/Auth/ResetPassword';
import { ResetPasswordStep2 } from 'modules/Auth/ResetPassword/Components/ResetPasswordStep2';
import { ResetPasswordStep3 } from 'modules/Auth/ResetPassword/Components/ResetPasswordStep3';
import { Dashbord } from 'modules/Admin/Dashbord';
import { Groups } from 'modules/Admin/Groups';
import { Students } from 'modules/Admin/Students';
import { Mentors } from 'modules/Admin/Mentors';
import { Payments } from 'modules/Admin/Payments';
import { Reports } from 'modules/Admin/Reports';
import { Profile } from 'modules/Admin/Profile';
import { ProfileDetail } from 'modules/Admin/Profile/Components/ProfileDetail';
import { Category } from 'modules/Admin/Category';
import { Location } from 'modules/Admin/Location/Location';
import { Calendar } from 'modules/Admin/Calendar/Calendar';
import { CategoryDetail } from 'modules/Admin/Category/Components/CategoryDetail/CategoryDetail';
import { Shopping } from 'modules/Admin/Courses';

export const Router = observer(() => {
  const isAuth = authStore.isAuth;

  const role = JSON.parse(localStorage.getItem('auth'));
  const type = role?.userData?.data?.user_type;

  if (!isAuth) {
    return (
      <Routes>
        <Route path="" element={<AuthLayout />}>
          <Route path="/auth" element={<Login />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/resetPassword" element={<ResetPassword />} />
          <Route path="/auth/resetPassword/Step2" element={<ResetPasswordStep2 />} />
          <Route path="/auth/resetPassword/Step2/Step3" element={<ResetPasswordStep3 />} />
          <Route path="*" element={<Navigate to="/auth/login" />} />
          <Route path="" element={<Navigate to="/auth/login" />} />
        </Route>
      </Routes>
    );
  }

  return (
    <Routes>
      <Route path="" element={<MainLayout />}>
        <Route path="/admin/dashbord" element={<Dashbord />} />
        <Route path="/admin/shopping" element={<Shopping />} />
        <Route path="/admin/groups" element={<Groups />} />
        <Route path="/admin/students" element={<Students />} />
        <Route path="/admin/mentors" element={<Mentors />} />
        <Route path="/admin/category" element={<Category />} />
        <Route path="/admin/location" element={<Location />} />
        <Route path="/admin/categorydetail" element={<CategoryDetail />} />
        <Route path="/admin/calendar" element={<Calendar />} />
        <Route path="/admin/payments" element={<Payments />} />
        <Route path="/admin/reports" element={<Reports />} />
        <Route path="/admin/profile" element={<Profile />} />
        <Route path="/admin/profile/detail" element={<ProfileDetail />} />
        <Route path="*" element={<Navigate to="/admin/dashbord" />} />
        <Route path="" element={<Navigate to="/admin/dashbord" />} />
      </Route>
    </Routes>
  );
});
