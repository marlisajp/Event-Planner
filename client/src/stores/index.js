import { createStore } from 'vuex'
import EventService from '@/services/EventService'

export default createStore({
  state: {
    events: []
  },
  mutations: {
    setEvents(state, events) {
      state.events = events
    },
    addEvent(state, event) {
      state.events.push(event)
    }
  },
  actions: {
    async loadEvents({ commit }) {
      try {
        const response = await EventService.getEvents()
        commit('setEvents', response.data)
      } catch (error) {
        console.error(error)
      }
    },
    async addEvent({ commit }, newEvent) {
      try {
        const response = await EventService.addEvent(newEvent)
        commit('addEvent', response.data)
      } catch (error) {
        console.error(error)
      }
    }
  },
  modules: {}
})
