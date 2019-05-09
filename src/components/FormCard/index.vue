<template>
  <form
    class="form-card"
    @submit.prevent="handleSubmit"
  >
    <email-field :value="email" @input="handleChange"/>
    <toggle-field :value="receiveNews" @input="toggleNews"/>
    <div class="form-field">
      <button type="submit">Subscribe</button>
    </div>
  </form>
</template>

<script>
import EmailField from '@/components/FormCard/EmailField'
import ToggleField from '@/components/FormCard/ToggleField'
export default {
  components: {
    ToggleField,
    EmailField
  },
  data () {
    return {
      email: '',
      receiveNews: false
    }
  },
  methods: {
    handleChange (val) {
      this.email = val
    },
    toggleNews (val) {
      this.receiveNews = val
    },
    handleSubmit () {
      const { email, receiveNews } = this
      console.log(`Email: ${email}, ${receiveNews}`)
    }
  }
}
</script>

<style>
.form-card {
  background: #f8f8f8;
  padding: 30px 15px;
  box-shadow: 0 0 5px #999;
  width: 320px;
  margin: 0 auto;
}
.form-field {
  display: flex;
  flex-direction: column;
}
.form-field:not(:last-child) {
  margin-bottom: 20px;
}
label {
  align-self: flex-start;
  font-size: 0.8em;
}
[type="text"] {
  font-weight: lighter;
  color: #999;
  width: 100%;
  padding: 10px;
  font-size: 1.2em;
  background: #fff;
  border: 1px dotted green;
}

[type="submit"] {
  cursor: pointer;
  background: #000;
  color: #fff;
  font-weight: bold;
  padding: 10px 5px;
}

[type="checkbox"] {
  transform: translateY(-15px) translateX(135px);
}
</style>
