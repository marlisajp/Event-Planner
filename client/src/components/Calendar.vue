<script>
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'

import EventService from '../services/EventService'

export default {
  components: {
    FullCalendar
  },
  data() {
    return {
      calendarOptions: {
        plugins: [dayGridPlugin, interactionPlugin],
        initialView: 'dayGridMonth'
      },
      events: [] // Add this line to initialize events array
    }
  },
  mounted() {
    this.$store.watch(
      (state, getters) => state.events.events, // watches the 'events' state under 'events' module
      (newEvents, oldEvents) => {
        // Format newEvents as necessary and update calendarOptions.events
        this.calendarOptions.events = newEvents.map((event) => ({
          id: event.id,
          title: event.title,
          start: event.date // assuming the date field is a full ISO8601 date string
        }))
      }
    )
  },
  async created() {
    const { data } = await EventService.getEvents()
    this.calendarOptions.events = data.map((event) => ({
      id: event.id,
      title: event.title,
      start: event.date
    }))
  }
}
</script>

<template>
  <div id="calendar-container">
    <FullCalendar :options="calendarOptions" />
  </div>
</template>

<style>
#calendar-container {
  width: 600px;
  margin-left: 30px;
  z-index: -2;
}

.fc-day {
  background-color: rgba(94, 217, 162, 0.307);
}

.fc-col-header {
  background-color: rgb(3, 3, 54);
}
.fc {
  color: aliceblue;
}
</style>
