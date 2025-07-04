const API_BASE_URL = 'http://localhost:3001/api/Organizer';

export const OrganizerAPI = {
  // Get all organizers
  getAll: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/Organizer`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching organizers:', error);
      throw error;
    }
  },

  // Get a single organizer by ID
  getById: async (id) => {
    try {
      const response = await fetch(`${API_BASE_URL}/Organizer/${id}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return await response.json();
    } catch (error) {
      console.error(`Error fetching organizer with ID ${id}:`, error);
      throw error;
    }
  },

  // Create a new organizer
  create: async (organizerData) => {
    try {
      const response = await fetch(`${API_BASE_URL}/Organizer`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(organizerData),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return await response.json();
    } catch (error) {
      console.error('Error creating organizer:', error);
      throw error;
    }
  },

  // Update an existing organizer
  update: async (id, organizerData) => {
    try {
      const response = await fetch(`${API_BASE_URL}/Organizer/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(organizerData),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return await response.json();
    } catch (error) {
      console.error(`Error updating organizer with ID ${id}:`, error);
      throw error;
    }
  },

  // Delete an organizer
  delete: async (id) => {
    try {
      const response = await fetch(`${API_BASE_URL}/Organizer/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return await response.json();
    } catch (error) {
      console.error(`Error deleting organizer with ID ${id}:`, error);
      throw error;
    }
  },
};