<template>
  <ErrorPopup :message="this.errorRequest"/>

  <template v-if="errorRequest === 'unauthorized'">
    <ErrorAuthorizationComponent/>
  </template>

  <template v-if="errorRequest && errorRequest !== 'unauthorized'">
    <ButtonComponent button-text="retry" @click="getPlaylists"/>
  </template>

  <div v-if="isLoading" class="loading-indicator">
    <LoadingComponent text="loading, please wait"/>
  </div>

  <div v-if="!isLoading">

    <h2 class="header">{{ $t('your playlists') }}</h2>

    <!-- Контейнер для плейлистов -->
    <div class="playlists-wrapper">
      <template v-for="playlist in playlists" :key="playlist.id">
        <div class="playlist-container" v-if="playlist.name">
          <div class="playlist-image-container">
            <img v-if="playlist.images && playlist.images.length > 0" :src="playlist.images[0].url" width="150" height="150" class="playlist-image"/>
          </div>
          <router-link :to="`/playlists/${playlist.id}`" class="playlist-name">{{ playlist.name }}</router-link>
        </div>
      </template>
    </div>
  </div>

  <MenuComponent active-button="playlists"/>
</template>

<script>
import api from "@/api.js";
import ErrorPopup from "@/components/ErrorPopup.vue";
import LoadingComponent from "@/components/LoadingComponent.vue";
import MenuComponent from "@/components/MenuComponent.vue";
import ErrorAuthorizationComponent from "@/components/ErrorAuthorizationComponent.vue";
import ButtonComponent from "@/components/ButtonComponent.vue";

export default {
  name: 'PlaylistView',
  components: {ButtonComponent, ErrorAuthorizationComponent, MenuComponent, LoadingComponent, ErrorPopup},
  data() {
    return {
      playlists: [],
      isLoading: true,
      errorRequest: ''
    };
  },
  mounted() {
    this.getPlaylists();
  },
  methods: {
    getPlaylists() {
      api.get('/user/playlist')
          .then(response => {
            this.playlists = response.data.items;
            this.isLoading = false;
          })
          .catch(error => {
            this.errorRequest = error.response.data.error
          });
    }
  }
}
</script>

<style scoped>
/* Заголовок */
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
  font-size: 2rem;
  font-weight: bold;
  color: var(--text-base, #fff);
}

/* Контейнер с плейлистами */
.playlists-wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 2rem;
}

/* Контейнер для каждого плейлиста */
.playlist-container {
  background-color: var(--background-tinted-base, hsla(0, 0%, 100%, .1));
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
}

/* Контейнер изображения */
.playlist-image-container {
  width: 150px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  background-color: var(--background-base, #121212);
}

/* Изображение плейлиста */
.playlist-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
}

/* Название плейлиста */
.playlist-name {
  font-size: 18px;
  font-weight: bold;
  color: var(--text-base, #fff);
  text-decoration: none;
  text-align: center;
  font-family: 'Arial', sans-serif;
}

/* Ссылка на плейлист */
.playlist-name:hover {
  color: var(--text-bright-accent, #1ed760);
}

/* Индикатор загрузки */
.loading-indicator {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>