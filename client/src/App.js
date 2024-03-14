import { Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import Sidebar from "./components/Sidebar";
import Employees from "./pages/employee/Employees";
import Department from "./pages/department/Department";
import DepartmentDetail from "./pages/department/DepartmentDetail";
import Faculty from "./pages/faculty/Faculty";
import FacultyDetail from "./pages/faculty/FacultyDetail";
import Salary from "./pages/salary/Salary";
import Work from "./pages/work/Work";
import AddEmployee from "./pages/employee/AddEmployee";
import EditEmployee from "./pages/employee/EditEmployee";
import AddDepartment from "./pages/department/AddDepartment";
import AddEmployeeDepartment from "./pages/department/AddEmployeeDepartment";
import AddFaculty from "./pages/faculty/AddFaculty";
import AddEmployeeFaculty from "./pages/faculty/AddEmployeeFaculty";
import AddWork from "./pages/work/AddWork";
function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<Sidebar />}>
        {/* employee */}
        <Route path="/" element={<Employees />} />
        <Route path="/nhan-vien/them-nhan-vien" element={<AddEmployee />} />
        <Route
          path="/nhan-vien/sua-nhan-vien/:idnhansu"
          element={<EditEmployee />}
        />
        {/* -------------------------------------------------- */}
        {/* department */}
        <Route path="/phong-ban" element={<Department />} />
        <Route path="/phong-ban/them-phong-ban" element={<AddDepartment />} />
        <Route
          path="/phong-ban/chi-tiet/:tenphongban/them-nhan-vien"
          element={<AddEmployeeDepartment />}
        />
        <Route
          path="/phong-ban/chi-tiet/:tenphongban"
          element={<DepartmentDetail />}
        />
        {/* -------------------------------------------------- */}
        {/* faculty */}
        <Route path="/khoa" element={<Faculty />} />
        <Route path="/khoa/them-khoa" element={<AddFaculty />} />
        <Route
          path="/khoa/chi-tiet/:tenkhoa/them-nhan-vien"
          element={<AddEmployeeFaculty />}
        />
        <Route path="/khoa/chi-tiet/:tenkhoa" element={<FacultyDetail />} />
        {/* -------------------------------------------------- */}
        {/* salary */}
        <Route path="/luong" element={<Salary />} />
        {/* -------------------------------------------------- */}
        {/* work */}
        <Route path="/cong-tac" element={<Work />} />
        <Route path="/cong-tac/them-cong-tac" element={<AddWork />} />
        {/* -------------------------------------------------- */}
      </Route>
    </Routes>
  );
}

export default App;
