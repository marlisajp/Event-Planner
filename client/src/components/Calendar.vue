<script>
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'

export default {
  components: {
    FullCalendar
  },
  data() {
    return {
      calendarOptions: {
        plugins: [dayGridPlugin, interactionPlugin],
        initialView: 'dayGridMonth'
      }
    }
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
}

.fc-day {
  background-color: rgb(142, 190, 190);
}
</style>
