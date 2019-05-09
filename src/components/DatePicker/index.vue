<template>
  <div class="wrapper">
    <div class="card">
      <label for="datepicker">Select a Date</label>
      <Picker :value="date" @input="v => date = v"/>
    </div>
  </div>
</template>

<script>
import Picker from '@/components/DatePicker/Picker'
export default {
  components: {
    Picker
  },
  data () {
    return {
      date: 'Mon May 20 2019'
    }
  }
}
</script>

<style src="pikaday/css/pikaday.css">
</style>
