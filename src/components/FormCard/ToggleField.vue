<template>
  <div class="form-field">
    <label for="receiveNews">Receive News</label>
    <input
      type="checkbox"
      id="receiveNews"
      :checked="value"
      @input="$emit('input', !value)"
    >
  </div>
</template>

<script>
export default {
  props: [
    'value'
  ]
}
</script>

<style>
</style>
