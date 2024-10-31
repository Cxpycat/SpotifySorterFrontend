<template>
  <div class="about_app">
    <div>
      Авторизация прошла успешно
    </div>
  </div>
</template>

<script>

import axios from "axios";

export default {
  name: 'RedirectView',
  data() {
    return {};
  },

  mounted() {
    // this.sendCode()
    this.getPlaylists()
  },
  methods: {
    sendCode() {
      const code = this.$route.query.code;
      const state = this.$route.query.state;
      axios.post('http://localhost:8080/auth/code', {
        code: code,
        state: state
      }).then(response => {
        console.log(response);
      }).catch(error => {
        console.log(error);
      });
    },
    getPlaylists() {
      axios.get('http://localhost:8080/user/playlist', {
        params: {
          email: "nikoto07@gmail.com"
        }
      }).then(response => {
        console.log(response);
      }).catch(error => {
        console.log(error);
      });
    }
  }
}
</script>
