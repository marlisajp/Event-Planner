<template>
  <div class="container">
    <div id="form-card">
      <div class="form-card-header">
        <div class="text-header">Add New Event</div>
      </div>
      <div class="form-card-body">
        <form @submit.prevent="addEvent">
          <div class="form-group">
            <label for="title">Title:</label>
            <input
              v-model="newEvent.title"
              required
              class="form-control"
              name="title"
              id="title"
              type="text"
            />
          </div>
          <div class="form-group">
            <label for="details">Details:</label>
            <textarea
              v-model="newEvent.details"
              name="details"
              id="input01"
              required
              class="form-control"
              rows="3"
              placeholder=""
            ></textarea>
          </div>
          <div class="form-group">
            <label for="password">Date:</label>
            <VueDatePicker id="date-picker" v-model="newEvent.date"></VueDatePicker>
          </div>
          <input type="submit" class="btn" value="submit" />
        </form>
      </div>
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
#date-picker {
  width: 100%;
}
#form-card {
  width: 350px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
  margin: 10px;
}

.form-card-header {
  background-color: rgb(3, 3, 54);
  padding: 16px;
  text-align: center;
}
.form-card-header .text-header {
  margin: 0;
  font-size: 18px;
  color: rgb(255, 255, 255);
}
.form-card-body {
  padding: 16px;
}
.form-group {
  margin-bottom: 10px;
}

.form-group label {
  display: block;
  font-size: 14px;
  color: #333;
  font-weight: bold;
  margin-bottom: 1px;
}

.form-group input[type='text'] {
  width: 100%;
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
#input01 {
  width: 100%;
  padding: 10px 10px 20px 10px;
  outline: 0;
  border: 1px solid rgba(105, 105, 105, 0.397);
  border-radius: 5px;
}

.btn {
  padding: 12px 24px;
  margin-left: 13px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  background-color: rgb(94, 217, 162);
  color: #000000;
  text-transform: uppercase;
  transition: background-color 0.2s ease-in-out;
  cursor: pointer;
}

.btn:hover {
  background-color: #ccc;
  color: #333;
}
</style>
