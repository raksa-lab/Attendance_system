// import React, { useState, useRef } from "react";
// import axios from "axios";
//
// // Form section wrapper
// const FormSection = ({ title, children }) => (
//   <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-6">
//     <h2 className="text-xl font-semibold text-gray-700 mb-4 border-b pb-2">{title}</h2>
//     {children}
//   </div>
// );
//
// // Input field component
// const InputField = ({ label, name, value, onChange, type = "text", required = false }) => {
//   const base = "mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm";
//   return (
//     <div>
//       <label htmlFor={name} className="block text-sm font-medium text-gray-700">{label}</label>
//       {type === "textarea" ? (
//         <textarea id={name} name={name} value={value} onChange={onChange} rows="3" className={`${base} resize-y`} required={required}></textarea>
//       ) : (
//         <input type={type} id={name} name={name} value={value} onChange={onChange} className={base} required={required} />
//       )}
//     </div>
//   );
// };
//
// // Button component
// const Button = ({ label, onClick, type = "button", className = "" }) => (
//   <button
//     type={type}
//     onClick={onClick}
//     className={`px-4 py-2 rounded-lg font-medium text-white shadow-md transition duration-300 ease-in-out hover:scale-105 ${className}`}
//   >
//     {label}
//   </button>
// );
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
//     imageFile: null,
//   });
//
//   const [imagePreviewUrl, setImagePreviewUrl] = useState(null);
//   const [showSuccessPopup, setShowSuccessPopup] = useState(false);
//   const [createdEventData, setCreatedEventData] = useState(null);
//   const [errorMessage, setErrorMessage] = useState("");
//   const fileInputRef = useRef(null);
//
//   const handleChange = (e) => {
//     const { name, value, type, files } = e.target;
//     setErrorMessage('');
//     if (type === "file") {
//       const file = files[0];
//       setFormData((prev) => ({ ...prev, [name]: file }));
//       setImagePreviewUrl(file ? URL.createObjectURL(file) : null);
//     } else {
//       setFormData((prev) => ({ ...prev, [name]: value }));
//     }
//   };
//
//   const resetForm = () => {
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
//       imageFile: null,
//     });
//     setImagePreviewUrl(null);
//     if (fileInputRef.current) fileInputRef.current.value = "";
//   };
//
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setErrorMessage("");
//
//     let uploadedImageUrl = null;
//     if (formData.imageFile) {
//       const imageFormData = new FormData();
//       imageFormData.append("imageFile", formData.imageFile);
//       try {
//         const res = await axios.post("http://localhost:3001/api/Organizer/upload", imageFormData);
//         uploadedImageUrl = res.data.imageUrl;
//       } catch (uploadError) {
//         setErrorMessage("Image upload failed.");
//         return;
//       }
//     }
//
//     const eventDataToSend = {
//       ...formData,
//       imageUrl: uploadedImageUrl,
//     };
//
//     try {
//       const res = await axios.post("http://localhost:3001/api/Organizer", eventDataToSend);
//       setCreatedEventData(res.data);
//       setShowSuccessPopup(true);
//     } catch (error) {
//       setErrorMessage("Event creation failed.");
//       setCreatedEventData({
//         ...formData,
//         imageUrl: imagePreviewUrl,
//       });
//       setShowSuccessPopup(true);
//     }
//   };
//
//   const handleCancel = () => resetForm();
//
//   const handleClosePopup = () => {
//     setShowSuccessPopup(false);
//     setCreatedEventData(null);
//     resetForm();
//   };
//
//   const handleChooseFileClick = () => fileInputRef.current.click();
//
//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-12 sm:py-8">
//       <form onSubmit={handleSubmit} className="bg-white w-full max-w-5xl p-6 sm:p-10 rounded-xl shadow-xl">
//         <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">Create New Event</h1>
//
//         {errorMessage && (
//           <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
//             <strong className="font-bold">Error!</strong> <span className="block sm:inline">{errorMessage}</span>
//           </div>
//         )}
//
//         <FormSection title="Information">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <InputField label="Full Name Event:" name="fullNameEvent" value={formData.fullNameEvent} onChange={handleChange} required />
//             <InputField label="Short Name Event:" name="shortNameEvent" value={formData.shortNameEvent} onChange={handleChange} required />
//             <div className="md:col-span-2">
//               <InputField label="Description:" name="description" value={formData.description} onChange={handleChange} type="textarea" required />
//             </div>
//           </div>
//
//           <div className="mt-6">
//             <label className="block text-sm font-medium text-gray-700 mb-2">Event Image:</label>
//             <input
//               type="file"
//               id="imageFile"
//               name="imageFile"
//               accept="image/*"
//               onChange={handleChange}
//               ref={fileInputRef}
//               className="hidden"
//             />
//             <div className="flex items-center space-x-3">
//               <Button type="button" onClick={handleChooseFileClick} label="Choose File" className="bg-blue-500 hover:bg-blue-600" />
//               <span className="text-gray-600 text-sm">{formData.imageFile ? formData.imageFile.name : "No file chosen"}</span>
//             </div>
//             {imagePreviewUrl ? (
//               <div className="mt-4 p-2 border border-gray-300 rounded-lg shadow-inner bg-white">
//                 <p className="font-medium text-sm mb-2 text-gray-700">Image Preview:</p>
//                 <img src={imagePreviewUrl} alt="Preview" className="w-full h-48 object-cover rounded-md" />
//               </div>
//             ) : (
//               <div className="mt-4 p-4 border-2 border-dashed border-gray-300 rounded-lg text-center text-gray-500 h-48 flex items-center justify-center bg-gray-50">
//                 No image selected for preview.
//               </div>
//             )}
//           </div>
//         </FormSection>
//
//         <FormSection title="Date & Time">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <InputField label="Start Date:" name="startDate" value={formData.startDate} onChange={handleChange} type="date" required />
//             <InputField label="End Date:" name="endDate" value={formData.endDate} onChange={handleChange} type="date" required />
//             <InputField label="Start Time:" name="startTime" value={formData.startTime} onChange={handleChange} type="time" required />
//             <InputField label="End Time:" name="endTime" value={formData.endTime} onChange={handleChange} type="time" required />
//           </div>
//         </FormSection>
//
//         <FormSection title="Location">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <InputField label="Venue:" name="venue" value={formData.venue} onChange={handleChange} required />
//             <InputField label="Address:" name="address" value={formData.address} onChange={handleChange} required />
//           </div>
//         </FormSection>
//
//         <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
//           <Button type="submit" label="Create Event" className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white" />
//           <Button type="button" label="Cancel" onClick={handleCancel} className="w-full sm:w-auto bg-red-500 hover:bg-red-600 text-white" />
//         </div>
//       </form>
//
//       {showSuccessPopup && createdEventData && (
//         <EventSuccessPopup eventData={createdEventData} onClose={handleClosePopup} />
//       )}
//     </div>
//   );
// };
//
// const EventSuccessPopup = ({ eventData, onClose }) => {
//   if (!eventData) return null;
//
//   const fullImageUrl = eventData.imageUrl
//     ? eventData.imageUrl.startsWith("blob:")
//       ? eventData.imageUrl
//       : `http://localhost:3001${eventData.imageUrl}`
//     : null;
//
//   return (
//     <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center z-50 p-4">
//       <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg mx-auto p-8">
//         <div className="pb-4 border-b border-gray-200 mb-4">
//           <h2 className="text-2xl font-semibold text-gray-800 text-center">Event Created Successfully!</h2>
//         </div>
//         <div className="space-y-2 text-gray-700">
//           <div className="bg-gray-100 rounded-lg p-4">
//             <div className="mb-1"><span className="font-medium">Full Name:</span> {eventData.fullNameEvent}</div>
//             <div className="mb-1"><span className="font-medium">Short Name:</span> {eventData.shortNameEvent}</div>
//             <div className="mb-1"><span className="font-medium">Description:</span> {eventData.description}</div>
//             <div className="mb-1"><span className="font-medium">Date:</span> {eventData.startDate} - {eventData.endDate}</div>
//             <div className="mb-1"><span className="font-medium">Time:</span> {eventData.startTime} - {eventData.endTime}</div>
//             <div className="mb-1"><span className="font-medium">Venue:</span> {eventData.venue}</div>
//             <div className="mb-1"><span className="font-medium">Address:</span> {eventData.address}</div>
//             {fullImageUrl && (
//               <div className="mt-4">
//                 <p className="font-medium text-sm mb-2">Image:</p>
//                 <img
//                   src={fullImageUrl}
//                   alt="Event"
//                   className="w-full h-48 object-cover rounded-md border border-gray-200 shadow-sm"
//                   onError={(e) => {
//                     e.target.onerror = null;
//                     e.target.src = 'https://placehold.co/400x200/cccccc/000000?text=Image+Not+Found';
//                   }}
//                 />
//               </div>
//             )}
//           </div>
//         </div>
//         <div className="flex justify-center space-x-4 mt-6">
//           <button onClick={onClose} className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700">Okay</button>
//           <button onClick={() => window.print()} className="px-6 py-2 bg-teal-600 text-white rounded-lg shadow-md hover:bg-teal-700">Export</button>
//         </div>
//       </div>
//     </div>
//   );
// };
//
// export default EventForm;






import React, { useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate

// Form section wrapper
const FormSection = ({ title, children }) => (
    <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-6">
      <h2 className="text-xl font-semibold text-gray-700 mb-4 border-b pb-2">{title}</h2>
      {children}
    </div>
);

// Input field component
const InputField = ({ label, name, value, onChange, type = "text", required = false }) => {
  const base = "mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm";
  return (
      <div>
        <label htmlFor={name} className="block text-sm font-medium text-gray-700">{label}</label>
        {type === "textarea" ? (
            <textarea id={name} name={name} value={value} onChange={onChange} rows="3" className={`${base} resize-y`} required={required}></textarea>
        ) : (
            <input type={type} id={name} name={name} value={value} onChange={onChange} className={base} required={required} />
        )}
      </div>
  );
};

// Button component
const Button = ({ label, onClick, type = "button", className = "" }) => (
    <button
        type={type}
        onClick={onClick}
        className={`px-4 py-2 rounded-lg font-medium text-white shadow-md transition duration-300 ease-in-out hover:scale-105 ${className}`}
    >
      {label}
    </button>
);

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
    imageFile: null,
  });

  const [imagePreviewUrl, setImagePreviewUrl] = useState(null);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [createdEventData, setCreatedEventData] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const fileInputRef = useRef(null);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setErrorMessage('');
    if (type === "file") {
      const file = files[0];
      setFormData((prev) => ({ ...prev, [name]: file }));
      setImagePreviewUrl(file ? URL.createObjectURL(file) : null);
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
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
      imageFile: null,
    });
    setImagePreviewUrl(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    let uploadedImageUrl = null;
    if (formData.imageFile) {
      const imageFormData = new FormData();
      imageFormData.append("imageFile", formData.imageFile);
      try {
        const res = await axios.post("http://localhost:3001/api/Organizer/upload", imageFormData);
        uploadedImageUrl = res.data.imageUrl;
      } catch (uploadError) {
        setErrorMessage("Image upload failed.");
        return;
      }
    }

    const eventDataToSend = {
      ...formData,
      imageUrl: uploadedImageUrl,
    };

    try {
      const res = await axios.post("http://localhost:3001/api/Organizer", eventDataToSend);
      setCreatedEventData(res.data);
      setShowSuccessPopup(true);
      // Navigate to event detail page after successful creation
      navigate(`/event/${res.data._id}`); // Assuming the response contains an _id for the new event
    } catch (error) {
      setErrorMessage("Event creation failed.");
      // Even on failure, you might want to show the popup with the data the user tried to submit
      // This part of the original code seems to intend to show the entered data even if the API call failed.
      // If you only want the popup on success, move this block into the try block.
      setCreatedEventData({
        ...formData,
        imageUrl: imagePreviewUrl, // Use the client-side preview URL for the popup if upload failed
      });
      setShowSuccessPopup(true);
    }
  };

  const handleCancel = () => resetForm();

  const handleClosePopup = () => {
    setShowSuccessPopup(false);
    setCreatedEventData(null);
    resetForm();
  };

  const handleChooseFileClick = () => fileInputRef.current.click();

  return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-12 sm:py-8">
        <form onSubmit={handleSubmit} className="bg-white w-full max-w-5xl p-6 sm:p-10 rounded-xl shadow-xl">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">Create New Event</h1>

          {errorMessage && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
                <strong className="font-bold">Error!</strong> <span className="block sm:inline">{errorMessage}</span>
              </div>
          )}

          <FormSection title="Information">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputField label="Full Name Event:" name="fullNameEvent" value={formData.fullNameEvent} onChange={handleChange} required />
              <InputField label="Short Name Event:" name="shortNameEvent" value={formData.shortNameEvent} onChange={handleChange} required />
              <div className="md:col-span-2">
                <InputField label="Description:" name="description" value={formData.description} onChange={handleChange} type="textarea" required />
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Event Image:</label>
              <input
                  type="file"
                  id="imageFile"
                  name="imageFile"
                  accept="image/*"
                  onChange={handleChange}
                  ref={fileInputRef}
                  className="hidden"
              />
              <div className="flex items-center space-x-3">
                <Button type="button" onClick={handleChooseFileClick} label="Choose File" className="bg-blue-500 hover:bg-blue-600" />
                <span className="text-gray-600 text-sm">{formData.imageFile ? formData.imageFile.name : "No file chosen"}</span>
              </div>
              {imagePreviewUrl ? (
                  <div className="mt-4 p-2 border border-gray-300 rounded-lg shadow-inner bg-white">
                    <p className="font-medium text-sm mb-2 text-gray-700">Image Preview:</p>
                    <img src={imagePreviewUrl} alt="Preview" className="w-full h-48 object-cover rounded-md" />
                  </div>
              ) : (
                  <div className="mt-4 p-4 border-2 border-dashed border-gray-300 rounded-lg text-center text-gray-500 h-48 flex items-center justify-center bg-gray-50">
                    No image selected for preview.
                  </div>
              )}
            </div>
          </FormSection>

          <FormSection title="Date & Time">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputField label="Start Date:" name="startDate" value={formData.startDate} onChange={handleChange} type="date" required />
              <InputField label="End Date:" name="endDate" value={formData.endDate} onChange={handleChange} type="date" required />
              <InputField label="Start Time:" name="startTime" value={formData.startTime} onChange={handleChange} type="time" required />
              <InputField label="End Time:" name="endTime" value={formData.endTime} onChange={handleChange} type="time" required />
            </div>
          </FormSection>

          <FormSection title="Location">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputField label="Venue:" name="venue" value={formData.venue} onChange={handleChange} required />
              <InputField label="Address:" name="address" value={formData.address} onChange={handleChange} required />
            </div>
          </FormSection>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <Button type="submit" label="Create Event" className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white" />
            <Button type="button" label="Cancel" onClick={handleCancel} className="w-full sm:w-auto bg-red-500 hover:bg-red-600 text-white" />
          </div>
        </form>

        {/* The success popup will still show, but the navigation will happen simultaneously */}
        {showSuccessPopup && createdEventData && (
            <EventSuccessPopup eventData={createdEventData} onClose={handleClosePopup} />
        )}
      </div>
  );
};

const EventSuccessPopup = ({ eventData, onClose }) => {
  if (!eventData) return null;

  const fullImageUrl = eventData.imageUrl
      ? eventData.imageUrl.startsWith("blob:")
          ? eventData.imageUrl
          : `http://localhost:3001${eventData.imageUrl}`
      : null;

  return (
      <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg mx-auto p-8">
          <div className="pb-4 border-b border-gray-200 mb-4">
            <h2 className="text-2xl font-semibold text-gray-800 text-center">Event Created Successfully!</h2>
          </div>
          <div className="space-y-2 text-gray-700">
            <div className="bg-gray-100 rounded-lg p-4">
              <div className="mb-1"><span className="font-medium">Full Name:</span> {eventData.fullNameEvent}</div>
              <div className="mb-1"><span className="font-medium">Short Name:</span> {eventData.shortNameEvent}</div>
              <div className="mb-1"><span className="font-medium">Description:</span> {eventData.description}</div>
              <div className="mb-1"><span className="font-medium">Date:</span> {eventData.startDate} - {eventData.endDate}</div>
              <div className="mb-1"><span className="font-medium">Time:</span> {eventData.startTime} - {eventData.endTime}</div>
              <div className="mb-1"><span className="font-medium">Venue:</span> {eventData.venue}</div>
              <div className="mb-1"><span className="font-medium">Address:</span> {eventData.address}</div>
              {fullImageUrl && (
                  <div className="mt-4">
                    <p className="font-medium text-sm mb-2">Image:</p>
                    <img
                        src={fullImageUrl}
                        alt="Event"
                        className="w-full h-48 object-cover rounded-md border border-gray-200 shadow-sm"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = 'https://placehold.co/400x200/cccccc/000000?text=Image+Not+Found';
                        }}
                    />
                  </div>
              )}
            </div>
          </div>
          <div className="flex justify-center space-x-4 mt-6">
            <button onClick={onClose} className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700">Okay</button>
            <button onClick={() => window.print()} className="px-6 py-2 bg-teal-600 text-white rounded-lg shadow-md hover:bg-teal-700">Export</button>
          </div>
        </div>
      </div>
  );
};

export default EventForm;