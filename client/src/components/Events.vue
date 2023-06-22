<template>
  <div class="container">
    <div id="events-container">
      <div class="card" v-for="event in events" :key="event.id">
        <p class="card-title">{{ event.title }}</p>
        <p class="card-details">{{ event.details }}</p>
        <p class="card-date">{{ event.date }}</p>
      </div>
    </div>
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

<style>
#events-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  /* width: 80%; */
}
.card {
  --border-radius: 2%;
  --primary-color: #7257fa;
  --secondary-color: #3c3852;
  width: 210px;
  font-family: 'Arial';
  padding: 1rem;
  cursor: pointer;
  border-radius: var(--border-radius);
  background: #d3d3e8;
  box-shadow: 0px 8px 16px 0px rgb(0 0 0 / 3%);
  position: relative;
  margin: 10px;
}
.card-title {
  padding: 0;
  font-size: 1.3rem;
  font-weight: bold;
}
.card:hover .card-title {
  color: var(--primary-color);
  text-decoration: underline;
}
.card-details {
  color: var(--secondary-color);
  font-size: 0.86rem;
}
.card-date {
  color: #6e6b80;
  font-size: 0.8rem;
}
</style>
