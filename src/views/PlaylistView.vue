<template>
  <ErrorPopup :message="this.errorRequest"/>

  <div class="playlist-list">
    <h2 class="header">{{ $t('tracks') }}</h2>
    <div v-if="playlist && playlist.length === 0 && !errorRequest" class="loading-indicator">
      <LoadingComponent text="loading, please wait"/>
    </div>
    <div v-if="errorRequest && errorRequest !== 'unauthorized'" class="loading-indicator">
      <button-component button-text="Retry" @click="getPlaylist"/>
    </div>
    <div v-if="errorRequest === 'unauthorized'" class="unauthorized-error">
      <button-component button-text="Login" @click="goToLoginPage"/>
    </div>
    <div v-for="track in playlist" :key="track.id" class="track-row">
      <div class="track-image-container">
        <img v-if="track.track.album.images.length > 0" :src="track.track.album.images[0].url" class="track-image" alt="Album Cover">
      </div>

      <div class="track-info">
        <div class="track-title">
          <span>{{ track.track.name }}</span>
        </div>

        <p class="track-artist">{{ track.track.artists[0].name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/api.js";
import ErrorPopup from "@/components/ErrorPopup.vue";
import LoadingComponent from "@/components/LoadingComponent.vue";
import ButtonComponent from "@/components/ButtonComponent.vue";

export default {
  name: 'PlaylistView',
  components: {ButtonComponent, LoadingComponent, ErrorPopup},
  data() {
    return {
      playlist: [],
      sortParam: 'popularity',
      errorRequest: ''
    };
  },
  mounted() {
    this.getPlaylist();
  },
  methods: {
    getPlaylist() {
      api.get(`/user/playlist/${this.$route.params.id}`).then(response => {
        this.playlist = response.data.items;
        console.log(response.data.items);
      }).catch(error => {
        this.errorRequest = error.response.data.error

      });
    },
    sortPlaylist() {
      api.post(`/user/playlist/${this.$route.params.id}/sort`, {sort_param: this.sortParam}).then(response => {
        console.log(response);
      }).catch(error => {
        this.errorRequest = error.response.data.error
      });
    },
    goToLoginPage() {
      this.$router.push({name: 'Home'});
    }
  }
}
</script>

<style scoped>
/* Основной контейнер для списка плейлистов */
.playlist-list {
  padding: 2rem;
  background-color: #121212;
  color: #fff;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

/* Строка с информацией о треке */
.track-row {
  display: flex;
  align-items: center;
  padding: 1rem;
  background-color: var(--background-tinted-base, hsla(0, 0%, 100%, .1));
  border-radius: 10px;
}

/* Контейнер для изображения */
.track-image-container {
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 10px;
  margin-right: 15px;
}

.track-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Информация о треке */
.track-info {
  flex-grow: 1;
  overflow: hidden;
}

.track-title {
  font-size: 16px;
  font-weight: bold;
  color: var(--text-base, #fff);
  text-decoration: none;
  display: block;
  margin-bottom: 5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.track-artist {
  font-size: 14px;
  color: var(--text-subdued, #b3b3b3);
  margin: 0;
}

.unauthorized-error, .loading-indicator {
  margin-top: 2rem;
}

</style>
