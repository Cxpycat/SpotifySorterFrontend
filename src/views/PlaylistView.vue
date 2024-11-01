<template>
  <div class="about_app">
    <div class="playlist-container" v-for="track in playlist">
      <div class="playlist-image-container">
        <!--        <video v-if="track.track.preview_url.length > 0" :src="track.track.preview_url" width="150" height="150" class="playlist-image" muted autoplay>-->
        <!--          <source :src="track.track.preview_url" type="video/mp4">-->
        <!--          Your browser does not support the video tag.-->
        <!--        </video>-->
        <img v-if="track.track.album.images.length > 0" :src="track.track.album.images[0].url" width="150" height="150" class="playlist-image">


      </div>
      <h2 class="playlist-name">{{ track.track.name }}</h2>
      <router-link :to="`/playlist/${playlist.id}`" class="playlist-link">Перейти</router-link>
    </div>
  </div>
</template>

<script>
import api from "@/api.js";

export default {
  name: 'PlaylistView',
  data() {
    return {
      playlist: {}
    };
  },

  mounted() {
    this.getPlaylist()
  },
  methods: {
    getPlaylist() {
      api.get(`/user/playlist/${this.$route.params.id}`).then(response => {

        this.playlist = response.data.items
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