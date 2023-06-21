<template>
  <div class="container">
    <h1>Add New Event</h1>
    <div id="input-container">
      <div class="one-input">
        <span>Title:</span>
        <input v-model="newEvent.title" type="text" />
      </div>
      <div class="one-input">
        <span>Details:</span>
        <input v-model="newEvent.details" type="text" />
      </div>
      <div class="one-input">
        <span>Date:</span>
        <VueDatePicker v-model="newEvent.date"></VueDatePicker>
      </div>

      <button @click="addEvent">Add Event</button>
    </div>
  </div>
</template>

<script>
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'

export default {
  name: 'AddEvent',
  components: {
    VueDatePicker
  },
  data() {
    return {
      newEvent: {
        title: '',
        details: '',
        date: null,
        time: ''
      }
    }
  },
  methods: {
    addEvent() {
      this.$store.dispatch('addEvent', this.newEvent)
      this.newEvent = {
        title: '',
        details: '',
        date: null,
        time: ''
      }
    }
  }
}
</script>

<style>
.container {
  align-items: center;
  border-radius: 15px;
  display: flex;
  height: 100vh;
  justify-content: center;
  flex-direction: column;
}

#input-container {
  height: 300px;
  width: 300px;
  border: 2px solid;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 20px;
}

.one-input {
  display: flex;
  justify-content: space-between;
}
</style>
