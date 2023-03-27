import {BrowserRouter, Routes, Route} from "react-router-dom"
import LandingPage from "../pages/landingpage/LandingPage"
//admin
import AdminLogin from "../components/admin/AdminLogin";
import Dashboard from "../pages/admin/Dashboard";
import Admin from "../pages/admin/crud_admin/Admin";
import AddAdmin from "../pages/admin/crud_admin/AddAdmin";
import EditAdmin from "../pages/admin/crud_admin/EditAdmin";
import Kelas from "../pages/admin/crud_kelas/Kelas";
import AddKelas from "../pages/admin/crud_kelas/AddKelas";
import EditKelas from "../pages/admin/crud_kelas/EditKelas";
import Spp from "../pages/admin/crud_spp/Spp";
import AddSpp from "../pages/admin/crud_spp/AddSpp";
import EditSpp from "../pages/admin/crud_spp/EditSpp";
import Siswa from "../pages/admin/crud_siswa/Siswa";
import AddSiswa from "../pages/admin/crud_siswa/AddSiswa";
import EditSiswa from "../pages/admin/crud_siswa/EditSiswa";
import Pembayaran from "../pages/admin/crud_pembayaran/Pembayaran";
import AddPembayaran from "../pages/admin/crud_pembayaran/AddPembayaran";
import EditPembayaran from "../pages/admin/crud_pembayaran/EditPembayaran";
//siswa
import SiswaLogin from "../components/siswa/SiswaLogin";
import Home from "../pages/siswa/Home";
import HistoryPembayaranSiswa from "../pages/siswa/HistoryPembayaranSiswa"

function App() {
  return (
    <div>
        <BrowserRouter>
          <Routes>
            {/* admin */}
            <Route path="/" element={<LandingPage/>}></Route>
            <Route path="/loginadmin" element={<AdminLogin/>}></Route>
            <Route path="/dashboard" element={<Dashboard/>}></Route>
            <Route path="/admin" element={<Admin/>}></Route>
            <Route path="/admin/add" element={<AddAdmin/>}></Route>
            <Route path="/admin/edit/:id" element={<EditAdmin/>}></Route>
            <Route path="/kelas" element={<Kelas/>}></Route>
            <Route path="/kelas/add" element={<AddKelas/>}></Route>
            <Route path="/kelas/edit/:id" element={<EditKelas/>}></Route>
            <Route path="/spp" element={<Spp/>}></Route>
            <Route path="/spp/add" element={<AddSpp/>}></Route>
            <Route path="/spp/edit/:id" element={<EditSpp/>}></Route>
            <Route path="/siswa" element={<Siswa/>}></Route>
            <Route path="/siswa/add" element={<AddSiswa/>}></Route>
            <Route path="/siswa/edit/:id" element={<EditSiswa/>}></Route>
            <Route path="/pembayaran" element={<Pembayaran/>}></Route>
            <Route path="/pembayaran/add" element={<AddPembayaran/>}></Route>
            <Route path="/pembayaran/edit/:id" element={<EditPembayaran/>}></Route>
            {/* siswa */}
            <Route path="/loginsiswa" element={<SiswaLogin/>}></Route>
            <Route path="/home" element={<Home/>}></Route>
            <Route path="/historypembayaransiswa" element={<HistoryPembayaranSiswa/>}></Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App; 
