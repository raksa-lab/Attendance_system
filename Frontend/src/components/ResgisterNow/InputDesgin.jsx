"use client";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Imgevent from "../../assets/img/Imgevent.jpg";
import organizer from "../../assets/img/organizer.jpg";

// Example data structure for universities, faculties, and departments
const universityData = {
  "Royal University": {
    faculties: ["Science", "Engineering"],
    departments: {
      Science: ["Biology", "Chemistry"],
      Engineering: ["Civil", "Electrical"],
    },
  },
  HUS: {
    faculties: ["IT", "Math"],
    departments: {
      IT: ["Software", "Network"],
      Math: ["Applied Math", "Statistics"],
    },
  },
  ITC: {
    faculties: ["Technology", "Engineering"],
    departments: {
      Technology: ["Computer Science", "Information Systems"],
      Engineering: ["Mechanical", "Electrical"],
    },
  },
  CADT: {
    faculties: ["Digital", "Telecom"],
    departments: {
      Digital: ["Digital Media", "Digital Business"],
      Telecom: ["Telecom Engineering"],
    },
  },
  "Norton University": {
    faculties: ["Business", "Engineering"],
    departments: {
      Business: ["Management", "Finance"],
      Engineering: ["Civil", "Architecture"],
    },
  },
  "Pannasastra University": {
    faculties: ["Education", "Law"],
    departments: {
      Education: ["TESOL", "Primary Education"],
      Law: ["International Law", "Civil Law"],
    },
  },
  "University of Puthisastra": {
    faculties: ["Health Sciences", "ICT"],
    departments: {
      "Health Sciences": ["Pharmacy", "Nursing"],
      ICT: ["Software Engineering", "Network Engineering"],
    },
  },
};

const InputDesgin = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    university: "",
    faculties: "",
    departments: "",
    phoneNumber: "",
    year: "",
  });

  const [faculties, setFaculties] = useState([]);
  const [departments, setDepartments] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // When university changes, update faculties and reset faculty/department
    if (name === "university") {
      const selectedFaculties = universityData[value]?.faculties || [];
      setFaculties(selectedFaculties);
      setDepartments([]);
      setFormData((prev) => ({
        ...prev,
        university: value,
        faculties: "",
        departments: "",
      }));
      return;
    }

    // When faculty changes, update departments and reset department
    if (name === "faculties") {
      const selectedDepartments =
        universityData[formData.university]?.departments[value] || [];
      setDepartments(selectedDepartments);
      setFormData((prev) => ({
        ...prev,
        faculties: value,
        departments: "",
      }));
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  const navigate = useNavigate();
  return (
    <>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#110E5B] text-center py-8">
        Our Event is support Girl
      </h1>
      <div className="flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-4xl">
          {/* Header */}
          {/* <h1 className="text-3xl sm:text-xl md:text-4xl font-bold text-indigo-950 text-center mb-6 sm:mb-8 md:mb-10">
          Our Event Supports Girls
        </h1> */}
          <div className="flex justify-center ">
            <img
              src={organizer}
              alt="Event supports girls"
              className="w-full max-w-[700px] h-auto object-contain rounded-lg shadow"
            />
          </div>
          {/* Form Section */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold text-indigo-950 text-opacity-80 mb-8 text-center">
              Please Input Information
            </h2>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Left Column */}
                <div className="space-y-6">
                  <div>
                    <label className="block text-gray-700 mb-2">
                      Enter First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">
                      Enter Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2">
                      University
                    </label>
                    <select
                      name="university"
                      value={formData.university}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      required
                    >
                      <option value="">Select University</option>
                      {Object.keys(universityData).map((uni) => (
                        <option key={uni} value={uni}>
                          {uni}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2">
                      Faculties
                    </label>
                    <select
                      name="faculties"
                      value={formData.faculties}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      required
                      disabled={!faculties.length}
                    >
                      <option value="">Select Faculty</option>
                      {faculties.map((faculty) => (
                        <option key={faculty} value={faculty}>
                          {faculty}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  <div>
                    <label className="block text-gray-700 mb-2">
                      Phone Number (Tel)
                    </label>
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2">Gender</label>
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      required
                    >
                      <option value="">Select Gender</option>
                      <option value="Female">Female</option>
                      <option value="Male">Male</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2">Year</label>
                    <select
                      name="year"
                      value={formData.year}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      required
                    >
                      <option value="">Select Year</option>
                      <option value="1st Year">1st Year</option>
                      <option value="2nd Year">2nd Year</option>
                      <option value="3rd Year">3rd Year</option>
                      <option value="4th Year">4th Year</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">
                      Departments
                    </label>
                    <select
                      name="departments"
                      value={formData.departments}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      required
                      disabled={!departments.length}
                    >
                      <option value="">Select Department</option>
                      {departments.map((dept) => (
                        <option key={dept} value={dept}>
                          {dept}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={
                    !formData.firstName ||
                    !formData.lastName ||
                    !formData.university ||
                    !formData.faculties ||
                    !formData.departments ||
                    !formData.phoneNumber ||
                    !formData.gender ||
                    !formData.year
                  }
                  onClick={() => navigate("/Register-Success")}
                  className={`px-8 py-4 bg-indigo-950 text-white text-xl font-semibold rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${
                    !formData.firstName ||
                    !formData.lastName ||
                    !formData.university ||
                    !formData.faculties ||
                    !formData.departments ||
                    !formData.phoneNumber ||
                    !formData.gender ||
                    !formData.year
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:bg-indigo-900"
                  }`}
                >
                  Check In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default InputDesgin;
