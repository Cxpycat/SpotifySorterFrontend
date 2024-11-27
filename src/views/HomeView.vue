<template>
  <div class="about_app">
    <div class="header">
      <h1>Spotify сортировка</h1>
    </div>
  </div>
  <div class="home_btns_wrapper">
    <button class="btn" @click="auth()">Авторизоваться spotify</button>
  </div>

  <div class="nav">
    <router-link to="Playlists" class="nav-link">Playlists</router-link>
  </div>
</template>
<script>

export default {
  name: 'HomeView',
  data() {
    return {};
  },
  methods: {
    auth() {
      const client_id = 'e846fad163144ec69ab48ca8fc73d192';
      const redirect_uri = 'http://localhost:5173/redirect';
      const scope = 'user-read-private user-read-email playlist-modify-public playlist-modify-private playlist-read-private playlist-read-collaborative';

      window.location.href = `https://accounts.spotify.com/authorize?response_type=code&client_id=${client_id}&scope=${scope}&redirect_uri=${redirect_uri}&state=${this.generateRandomString(16)}`
    },

    generateRandomString(length) {
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      let result = '';
      for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
      }
      return result;
    }
  }
}
</script>

<style scoped>
.about_app {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.header {
  background-color: #333;
  color: #fff;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.header h1 {
  font-size: 24px;
  font-weight: bold;
  margin: 0;
}

.home_btns_wrapper {
  margin-top: 20px;
}

.btn {
  background-color: #4CAF50;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.btn:hover {
  background-color: #3e8e41;
}

.nav {
  margin-top: 20px;
}

.nav-link {
  text-decoration: none;
  color: #337ab7;
}

.nav-link:hover {
  color: #23527c;
}
</style>