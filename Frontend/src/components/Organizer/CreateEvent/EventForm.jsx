import React, { useState } from 'react';
import FormSection from './FormSection';
import InputField from './InputField';
import Button from './Button';

const EventForm = () => {
  const [formData, setFormData] = useState({
    fullNameEvent: '',
    shortNameEvent: '',
    description: '',
    startDate: '',
    endDate: '',
    startTime: '',
    endTime: '',
    venue: '',
    address: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    alert('Event creation initiated! (Check console for form data)');
  };

  const handleCancel = () => {
    setFormData({
      fullNameEvent: '',
      shortNameEvent: '',
      description: '',
      startDate: '',
      endDate: '',
      startTime: '',
      endTime: '',
      venue: '',
      address: '',
    });
    console.log('Form cancelled and reset.');
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

        <FormSection title="QR Code Generation">
          <p className="flex justify-center items-center text-center italic text-gray-600 py-2">
            A Unique QR Code will be automatically generated for this event once you save
          </p>
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
    </div>
  );
};

export default EventForm;
