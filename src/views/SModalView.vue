<template>
  <div class="wrapper">
    <button @click="modalOpen = true">Show Modal</button>

    <SimpleModal :show="modalOpen" @close="modalOpen = false"/>
    <div class="test-scroll">ScrollMe</div>
  </div>
</template>

<script>
import SimpleModal from '@/components/SimpleModal'
export default {
  data () {
    return {
      modalOpen: false
    }
  },
  components: {
    SimpleModal
  }
}
</script>

<style>
button {
  width: 100%;
  background: #000;
  border: none;
  color: #FFF;
  font-weight: bold;
  cursor: pointer;
  padding: 1em;
}
.test-scroll {
  margin-top: 20px;
  min-height: 120vh;
}
</style>
