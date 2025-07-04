// import React, { useState } from "react";
// import axios from "axios";
// import FormSection from "./FormSection";
// import InputField from "./InputField";
// import Button from "./Button";

// const EventForm = () => {
//   const [formData, setFormData] = useState({
//     fullNameEvent: "",
//     shortNameEvent: "",
//     description: "",
//     startDate: "",
//     endDate: "",
//     startTime: "",
//     endTime: "",
//     venue: "",
//     address: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post("http://localhost:3001/api/Organizer", formData);
//       console.log("✅ Event created:", response.data);
//       alert("🎉 Event created successfully!");
//       // Reset form after success
//       setFormData({
//         fullNameEvent: "",
//         shortNameEvent: "",
//         description: "",
//         startDate: "",
//         endDate: "",
//         startTime: "",
//         endTime: "",
//         venue: "",
//         address: "",
//       });
//     } catch (error) {
//       console.error("❌ Error creating event:", error);
//       alert("Something went wrong while creating the event.");
//     }
//   };

//   const handleCancel = () => {
//     setFormData({
//       fullNameEvent: "",
//       shortNameEvent: "",
//       description: "",
//       startDate: "",
//       endDate: "",
//       startTime: "",
//       endTime: "",
//       venue: "",
//       address: "",
//     });
//     console.log("Form cancelled and reset.");
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-12 sm:py-8">
//       <form
//         className="bg-white w-full max-w-5xl p-6 sm:p-10 rounded-xl shadow-xl"
//         onSubmit={handleSubmit}
//       >
//         <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-10">
//           Create New Event
//         </h1>

//         <FormSection title="Information">
//           <div className="mb-4">
//             <InputField
//               label="Full Name Event :"
//               name="fullNameEvent"
//               value={formData.fullNameEvent}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="mb-4">
//             <InputField
//               label="Short Name Event :"
//               name="shortNameEvent"
//               value={formData.shortNameEvent}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="mb-4">
//             <InputField
//               label="Description :"
//               name="description"
//               value={formData.description}
//               onChange={handleChange}
//               type="textarea"
//             />
//           </div>
//         </FormSection>

//         <FormSection title="Date & Time">
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             <div>
//               <InputField
//                 label="Start Date:"
//                 name="startDate"
//                 value={formData.startDate}
//                 onChange={handleChange}
//                 type="date"
//               />
//             </div>
//             <div>
//               <InputField
//                 label="End Date:"
//                 name="endDate"
//                 value={formData.endDate}
//                 onChange={handleChange}
//                 type="date"
//               />
//             </div>
//             <div>
//               <InputField
//                 label="Start Time:"
//                 name="startTime"
//                 value={formData.startTime}
//                 onChange={handleChange}
//                 type="time"
//               />
//             </div>
//             <div>
//               <InputField
//                 label="End Time:"
//                 name="endTime"
//                 value={formData.endTime}
//                 onChange={handleChange}
//                 type="time"
//               />
//             </div>
//           </div>
//         </FormSection>

//         <FormSection title="Location">
//           <div className="mb-4">
//             <InputField
//               label="Venue:"
//               name="venue"
//               value={formData.venue}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="mb-4">
//             <InputField
//               label="Address:"
//               name="address"
//               value={formData.address}
//               onChange={handleChange}
//             />
//           </div>
//         </FormSection>

//         {/* <FormSection title="QR Code Generation">
//           <p className="flex justify-center items-center text-center italic text-gray-600 py-2">
//             A Unique QR Code will be automatically generated for this event once you save
//           </p>
//         </FormSection> */}

//         <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mt-8">
//           <Button
//             type="submit"
//             label="Create"
//             className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white"
//           />
//           <Button
//             type="button"
//             label="Cancel"
//             onClick={handleCancel}
//             className="w-full sm:w-auto bg-red-500 hover:bg-red-600 text-white"
//           />
//         </div>
//       </form>
//     </div>
//   );
// };

// export default EventForm;







import React, { useState, useRef } from "react"; // Import useRef
import axios from "axios";

// Define FormSection component directly within this file for self-containment
const FormSection = ({ title, children }) => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-6">
      <h2 className="text-xl font-semibold text-gray-700 mb-4 border-b pb-2">
        {title}
      </h2>
      {children}
    </div>
  );
};

// Define InputField component directly within this file for self-containment
const InputField = ({ label, name, value, onChange, type = "text" }) => {
  const commonClasses = "mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm";
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          rows="3"
          className={`${commonClasses} resize-y`}
        ></textarea>
      ) : (
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className={commonClasses}
        />
      )}
    </div>
  );
};

// Define Button component directly within this file for self-containment
const Button = ({ label, onClick, type = "button", className = "" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 rounded-lg font-medium text-white shadow-md transition duration-300 ease-in-out hover:scale-105 ${className}`}
    >
      {label}
    </button>
  );
};


// Define EventSuccessPopup component directly within this file for self-containment
const EventSuccessPopup = ({ eventData, onClose }) => {
  if (!eventData) return null; // Don't render if no event data

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md mx-auto p-6 transform transition-all duration-300 ease-in-out scale-100 opacity-100">
        {/* Popup Header */}
        <div className="pb-4 border-b border-gray-200 mb-4">
          <h2 className="text-2xl font-semibold text-gray-800">Event Created Successfully!</h2>
        </div>

        {/* Event Details */}
        <div className="space-y-4 text-gray-700">
          <div className="bg-gray-100 rounded-lg p-4">
            <p className="text-sm">
              <span className="font-medium">Full Name Event:</span> {eventData.fullNameEvent}
            </p>
            <p className="text-sm mt-1">
              <span className="font-medium">Short Name Event:</span> {eventData.shortNameEvent}
            </p>
            <p className="text-sm mt-1">
              <span className="font-medium">Description:</span> {eventData.description}
            </p>
            {eventData.imageUrl && ( // Display image if URL is available
              <div className="mt-4">
                <p className="font-medium text-sm mb-2">Event Image:</p>
                <img
                  src={eventData.imageUrl}
                  alt="Event"
                  className="w-full h-auto rounded-md object-cover"
                  onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x200/cccccc/000000?text=Image+Not+Found'; }}
                />
              </div>
            )}
          </div>

          <div className="space-y-3">
            <div className="flex items-center text-sm">
              {/* Calendar icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-500 mr-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span>{eventData.startDate} - {eventData.endDate}</span>
            </div>

            <div className="flex items-center text-sm">
              {/* Clock icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-500 mr-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>{eventData.startTime} - {eventData.endTime}</span>
            </div>

            <div className="flex items-center text-sm">
              {/* Location icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-500 mr-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span>{eventData.venue}, {eventData.address}</span>
            </div>

            {/* Placeholder for Registered count, unless your backend returns this data */}
            <div className="flex items-center text-sm">
              {/* Users icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-500 mr-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 20v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2m3-2h4m-4 0h4m-1-5a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
              <span>150/200 Registered (Placeholder - if not from backend)</span>
            </div>
          </div>
        </div>

        {/* Popup Actions */}
        <div className="flex justify-center space-x-4 mt-6">
          <button
            onClick={onClose} // Call onClose prop to close the popup
            className="px-6 py-2 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-75"
          >
            Back to Form
          </button>
          <button
            className="px-6 py-2 bg-teal-600 text-white rounded-lg shadow-md hover:bg-teal-700 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-75"
          >
            Export
          </button>
        </div>
      </div>
    </div>
  );
};


const EventForm = () => {
  const [formData, setFormData] = useState({
    fullNameEvent: "",
    shortNameEvent: "",
    description: "",
    startDate: "",
    endDate: "",
    startTime: "",
    endTime: "",
    venue: "",
    address: "",
    imageFile: null, // State for the image file object
  });

  const [imagePreviewUrl, setImagePreviewUrl] = useState(null); // State for image preview URL
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [createdEventData, setCreatedEventData] = useState(null);

  const fileInputRef = useRef(null); // Ref for the hidden file input

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      const file = files[0];
      setFormData((prevData) => ({
        ...prevData,
        [name]: file, // Store the file object
      }));
      if (file) {
        setImagePreviewUrl(URL.createObjectURL(file)); // Create a URL for preview
      } else {
        setImagePreviewUrl(null);
      }
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const resetForm = () => {
    setFormData({
      fullNameEvent: "",
      shortNameEvent: "",
      description: "",
      startDate: "",
      endDate: "",
      startTime: "",
      endTime: "",
      venue: "",
      address: "",
      imageFile: null, // Reset file input
    });
    setImagePreviewUrl(null); // Clear image preview
    if (fileInputRef.current) {
        fileInputRef.current.value = ""; // Clear the file input element
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData(); // Use FormData for file uploads
    for (const key in formData) {
      data.append(key, formData[key]);
    }

    try {
      // Ensure your backend is configured to handle 'multipart/form-data'
      const response = await axios.post("http://localhost:3001/api/Organizer", data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log("✅ Event created:", response.data);
      setCreatedEventData(response.data); // Store the created event data
      setShowSuccessPopup(true); // Show the popup
    } catch (error) {
      console.error("❌ Error creating event:", error);
      alert("Something went wrong while creating the event."); // Consider a more user-friendly modal here
    }
  };

  const handleCancel = () => {
    resetForm();
    console.log("Form cancelled and reset.");
  };

  const handleClosePopup = () => {
    setShowSuccessPopup(false);
    setCreatedEventData(null); // Clear the data
    resetForm(); // Reset form after popup is closed
  };

  // Function to trigger the hidden file input click
  const handleChooseFileClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-12 sm:py-8">
      <form
        className="bg-white w-full max-w-5xl p-6 sm:p-10 rounded-xl shadow-xl"
        onSubmit={handleSubmit}
      >
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-10">
          Create New Event
        </h1>

        <FormSection title="Information">
          <div className="mb-4">
            <InputField
              label="Full Name Event :"
              name="fullNameEvent"
              value={formData.fullNameEvent}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <InputField
              label="Short Name Event :"
              name="shortNameEvent"
              value={formData.shortNameEvent}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <InputField
              label="Description :"
              name="description"
              value={formData.description}
              onChange={handleChange}
              type="textarea"
            />
          </div>
          {/* Enhanced Input for Image Upload */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Event Image:
            </label>
            <input
              type="file"
              id="imageFile"
              name="imageFile"
              accept="image/*" // Restrict to image files
              onChange={handleChange}
              ref={fileInputRef} // Attach ref to the hidden input
              className="hidden" // Hide the default file input
            />
            <div className="flex items-center space-x-3">
              <button
                type="button"
                onClick={handleChooseFileClick}
                className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-600 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75"
              >
                Choose File
              </button>
              <span className="text-gray-600 text-sm">
                {formData.imageFile ? formData.imageFile.name : "No file chosen"}
              </span>
            </div>

            {imagePreviewUrl ? ( // Display image preview if URL exists
              <div className="mt-4 p-2 border border-gray-300 rounded-lg shadow-inner bg-white">
                <p className="font-medium text-sm mb-2 text-gray-700">Image Preview:</p>
                <img
                  src={imagePreviewUrl}
                  alt="Image Preview"
                  className="w-full h-48 object-cover rounded-md border border-gray-200 shadow-sm"
                />
              </div>
            ) : (
              <div className="mt-4 p-4 border-2 border-dashed border-gray-300 rounded-lg text-center text-gray-500 h-48 flex items-center justify-center bg-gray-50">
                No image selected for preview.
              </div>
            )}
          </div>
        </FormSection>

        <FormSection title="Date & Time">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <InputField
                label="Start Date:"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                type="date"
              />
            </div>
            <div>
              <InputField
                label="End Date:"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
                type="date"
              />
            </div>
            <div>
              <InputField
                label="Start Time:"
                name="startTime"
                value={formData.startTime}
                onChange={handleChange}
                type="time"
              />
            </div>
            <div>
              <InputField
                label="End Time:"
                name="endTime"
                value={formData.endTime}
                onChange={handleChange}
                type="time"
              />
            </div>
          </div>
        </FormSection>

        <FormSection title="Location">
          <div className="mb-4">
            <InputField
              label="Venue:"
              name="venue"
              value={formData.venue}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <InputField
              label="Address:"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>
        </FormSection>

        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mt-8">
          <Button
            type="submit"
            label="Create"
            className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white"
          />
          <Button
            type="button"
            label="Cancel"
            onClick={handleCancel}
            className="w-full sm:w-auto bg-red-500 hover:bg-red-600 text-white"
          />
        </div>
      </form>

      {/* Render the popup if showSuccessPopup is true and data is available */}
      {showSuccessPopup && createdEventData && (
        <EventSuccessPopup eventData={createdEventData} onClose={handleClosePopup} />
      )}
    </div>
  );
};

export default EventForm;
