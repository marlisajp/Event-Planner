// Import axios library
import axios from 'axios'

// Set a base URL for axios instance
const apiClient = axios.create({
  baseURL: 'http://localhost:3000/api', // your server URL
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  // Fetch all events
  getEvents() {
    return apiClient.get('/events')
  },

  // Get a single event
  // getEvent(id) {
  //   return apiClient.get(`/events/${id}`)
  // },

  // Create a new event
  addEvent(event) {
    return apiClient.post('/events/add', event)
  }

  // // Update an existing event
  // updateEvent(event) {
  //   return apiClient.put(`/events/${event.id}`, event)
  // },

  // // Delete an event
  // deleteEvent(id) {
  //   return apiClient.delete(`/events/${id}`)
  // }
}
