<template>
  <div class="about_app">
    <div class="playlist-container" v-for="playlist in playlists" :key="playlist.id">
      <div class="playlist-image-container">
        <img v-if="playlist.images && playlist.images.length > 0" :src="playlist.images[0].url" width="150" height="150" class="playlist-image">
      </div>
      <h2 class="playlist-name">{{ playlist.name }}</h2>
      <router-link :to="`/playlists/${playlist.id}`" class="playlist-link">Перейти</router-link>
    </div>
  </div>
</template>


<script>
import api from "@/api.js";

export default {
  name: 'PlaylistView',
  data() {
    return {
      playlists: []
    };
  },

  mounted() {
    this.getPlaylists()
  },
  methods: {
    getPlaylists() {
      api.get('/user/playlist').then(response => {
        this.playlists = response.data.items
        console.log(response.data.items);
      }).catch(error => {
        console.log(error);
      });
    }
  }
}
</script>

<style scoped>
.about_app {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.playlist-container {
  margin: 20px;
  width: 200px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.playlist-image-container {
  width: 150px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.playlist-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
}

.playlist-name {
  font-size: 18px;
  font-weight: bold;
  margin-top: 10px;
  text-decoration: underline;
}

.playlist-link {
  margin-top: 10px;
  text-decoration: none;
  color: #337ab7;
}
</style>