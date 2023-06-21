<template>
  <div>
    <h1>Events</h1>
    <ul>
      <li v-for="event in events" :key="event.id">
        <h2>{{ event.title }}</h2>
        <p>{{ event.details }}</p>
        <p>{{ event.date }}</p>
        <p>{{ event.time }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { format } from 'date-fns'

export default {
  name: 'Events',
  mounted() {
    this.$store.dispatch('loadEvents')
  },
  computed: {
    events() {
      const formatDate = this.formatDate
      return this.$store.state.events.map((event) => {
        event.date = formatDate(event.date)
        return event
      })
    }
  },
  methods: {
    formatDate(dateString) {
      const date = new Date(dateString)
      return format(date, 'MM/dd/yyyy, hh:mm a')
    }
  }
}
</script>

<style></style>
