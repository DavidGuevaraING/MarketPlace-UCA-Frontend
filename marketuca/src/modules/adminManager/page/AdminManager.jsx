import Navbar from "../../utils/navbar/Navbar.jsx";
import Footer from "../../utils/footer/Footer.jsx";
import AcceptAdmin from "../components/AcceptAdmin.jsx";

const AdminManager = ({isAdmin}) => {
    const users = [
        {
            name: "Juan Pérez",
            email: "juan.perez@uca.edu.sv",
            role: "STUDENT",
            faculty: "Facultad de Ingeniería y Arquitectura"
        },
        {
            name: "Juan Dio",
            email: "juan.dio@uca.edu.sv",
            role: "ADMIN",
            faculty: "Facultad de Ingeniería y Arquitectura"
        }
    ];
  return(
      <div className={`${isAdmin ? "visible" : "hidden"} px-4 py-2`}>
          <Navbar isAdmin={true} />
          <AcceptAdmin users={users}/>
          <Footer/>

      </div>
  );
}
export default AdminManager;