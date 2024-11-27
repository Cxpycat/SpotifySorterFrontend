<template>
  <div class="about_app">
    <div class="playlist-container" v-for="playlist in playlists" :key="playlist.id">
      <div class="playlist-image-container">
        <img v-if="playlist.images && playlist.images.length > 0" :src="playlist.images[0].url" width="150" height="150" class="playlist-image">
      </div>
      <h2 class="playlist-name">{{ playlist.name }}</h2>
      <router-link :to="`/playlist/${playlist.id}`" class="playlist-link">Перейти</router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'RedirectView',
  data() {
    return {
      playlists: []
    };
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
        localStorage.access_token = response.data.user.access_token;
        this.$router.push({name: 'Playlists'});
      });
    },
  }
}
</script>

