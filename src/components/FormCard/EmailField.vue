<template>
  <div class="form-field">
    <label for="email">Email Address</label>
    <input
      type="text"
      id="email"
      :value="value"
      @input="$emit('input', $event.target.value)"
    >
  </div>
</template>

<script>
export default {
  props: ['value']
}
</script>

<style>
</style>
