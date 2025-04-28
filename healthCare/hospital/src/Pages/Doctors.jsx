import { useEffect, useState } from "react";
import Loders from "../components/Loder";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
const specializations = [
  "All",
  "Cardiologist",
  "Orthopedic",
  "Neurologist",
  "Pediatrician",
  "Dermatologist",
  "Urologist",
  "Psychiatrist",
  "Endocrinologist",
  "Pulmonologist",
  "Nephrologist",
];

export default function DoctorDirectory() {
  const [doctors, setDoctors] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  // Fetch doctor data from API
  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await fetch("https://5x5syj-3001.csb.app/AllDoctor");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setDoctors(data.info);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchDoctors();
  }, []);

  const filteredDoctors =
    selectedCategory === "All"
      ? doctors
      : doctors.filter((doc) => doc.specialization === selectedCategory);

  if (loading)
    return (
      <div className="d-flex justify-content-center mt-5">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  if (error) return <p className="text-center text-danger my-5">{error}</p>;

  return (
    <div
      style={{
        backgroundImage:
          "url('https://cdn.pixabay.com/photo/2017/08/07/20/05/doctors-2607295_640.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      <div className="container py-5">
        <h2 className="display-5 fw-bold text-center mb-4 animate__animated animate__rubberBand">
          Meet Our Expert Doctors
        </h2>

        {/* Specialization Filter Buttons */}
        <div
          className="d-flex flex-wrap justify-content-center gap-2 mb-4"
          style={{ maxWidth: "100%", overflowX: "auto" }}>
          {specializations.map((spec) => (
            <button
              key={spec}
              onClick={() => setSelectedCategory(spec)}
              className={`btn ${
                selectedCategory === spec
                  ? "btn-primary"
                  : "btn-outline-primary"
              }`}>
              {spec}
            </button>
          ))}
        </div>

        {/* Doctor Cards */}
        <div className="row g-3">
          {filteredDoctors.map((doctor, index) => (
            <div key={index} className="col-12 col-sm-6 col-md-4">
              <div className="card shadow-sm p-3 rounded h-100">
                <div className="card-body d-flex flex-column justify-content-between">
                  <div>
                    <h3 className="card-title">{doctor.name}</h3>
                    <p className="text-primary fw-medium">
                      {doctor.specialization}
                    </p>
                    <p className="text-muted">{doctor.education}</p>
                  </div>

                  <button
                    className="btn btn-primary mt-auto animate__animated animate__rubberBand"
                    onClick={() => navigate(`${doctor._id}`)}>
                    Book An Appointment
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Outlet />
    </div>
  );
}
