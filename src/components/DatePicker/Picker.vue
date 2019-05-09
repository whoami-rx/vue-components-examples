<template>
  <input
    type="text"
    id="datepicker"
    placeholder="YYYY-MM-DD"
    :value="value"
    ref="picker"
  >
</template>

<script>
import Pikaday from 'pikaday'
export default {
  props: ['value'],
  mounted () {
    const picker = new Pikaday({
      field: this.$refs.picker,
      format: 'YYYY-MM-DD',
      onSelect: () => {
        this.$emit('input', picker.toString())
      }
    })
  }
}
</script>

<style>
</style>
