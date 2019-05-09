<template>
  <div class="modal-wrapper" v-show="show">
    <div class="modal">
      <h1>Modal Title</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, quae!</p>
      <button @click="$emit('close')">Close</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['show'],
  watch: {
    show: {
      immediate: true,
      handler: function (show) {
        if (show) {
          document.body.style.setProperty('overflow', 'hidden')
        } else {
          document.body.style.removeProperty('overflow')
        }
      }
    }
  },
  created () {
    /* Escape Event */
    this.escapeHandler = e => {
      if (e.key === 'Escape' && this.show) {
        this.$emit('close')
      }
    }
    document.addEventListener('keydown', this.escapeHandler)
    this.$once('hook:destroyed', () => {
      /* Remove Escape Event */
      document.removeEventListener('keydown', this.escapeHandler)
    })
  }
}
</script>

<style>
.modal-wrapper {
  background: rgba(0, 0, 0, 0.4);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #f8f8f8;
  width: 350px;
  padding: 2em;
}
.modal h1 {
  color: #999;
  font-weight: 900;
  font-size: 1.5em;
}
.modal p {
  margin: 15px 0 10px 0;
}
</style>
