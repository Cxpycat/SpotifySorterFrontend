<template>
  <div class="redirect-container">
    <ErrorPopup :message="this.errorRequest"/>

    <div class="loader">
      <div class="spinner"></div>
      <p>{{ $t('authorization') }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ErrorPopup from "@/components/ErrorPopup.vue";

export default {
  name: 'RedirectView',
  components: {ErrorPopup},

  data() {
    return {
      errorRequest: ''
    }
  },

  mounted() {
    this.sendCode()
  },

  methods: {
    sendCode() {
      const code = this.$route.query.code;
      const state = this.$route.query.state;

      axios.post('http://localhost:8080/auth/code', {
        code: code,
        state: state
      }).then(response => {
        localStorage.setItem('access_token', response.data.user.access_token);
        this.$router.push({name: 'Playlists'});
      }).catch(error => {
        this.errorRequest = error.response.data.error
      });
    },
  }
}
</script>

<style scoped>
/* Стили для контейнера редиректа */
.redirect-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: var(--background-base, #121212);
  color: var(--text-base, #fff);
  font-family: 'Arial', sans-serif;
  text-align: center;
}


</style>
