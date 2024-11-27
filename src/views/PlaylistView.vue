<template>
  <ErrorPopup :message="errorRequest"/>

  <h2 class="header">{{ $t('tracks') }}</h2>

  <!-- Блок выбора сортировки -->
  <div class="wrapper-select">
    <select v-model="sortBy">
      <!--      <option value="date_added_recent">{{ $t('date Added (Recent First)') }}</option>-->
      <!--      <option value="date_added_oldest">{{ $t('date Added (Oldest First)') }}</option>-->
      <!--      <option value="release_date_recent">{{ $t('release Date (Newest First)') }}</option>-->
      <!--      <option value="release_date_oldest">{{ $t('release Date (Oldest First)') }}</option>-->
      <!--      <option value="artist_alphabetical">{{ $t('artist Alphabetical (A-Z)') }}</option>-->
      <!--      <option value="artist_alphabetical_reverse">{{ $t('artist Alphabetical (Z-A)') }}</option>-->
      <!--      <option value="track_alphabetical">{{ $t('track Alphabetical (A-Z)') }}</option>-->
      <!--      <option value="track_alphabetical_reverse">{{ $t('track Alphabetical (Z-A)') }}</option>-->
      <option value="popularity">{{ $t('popularity (High-Low)') }}</option>
      <!--      <option value="popularity_reverse">{{ $t('popularity (Low-High)') }}</option>-->
    </select>
  </div>

  <!-- Кнопка для сортировки -->
  <div class="wrapper-button">
    <button-component button-text="sort" @click="sortPlaylist"/>
  </div>

  <!-- Список треков -->
  <div class="playlist-list">

    <!-- Загрузка или ошибки -->
    <div v-if="isLoading" class="loading-indicator">
      <LoadingComponent text="loading, please wait"/>
    </div>

    <div v-if="errorRequest === 'unauthorized'" class="unauthorized-error">
      <ButtonComponent button-text="login" @click="goToLoginPage"/>
    </div>

    <div v-if="errorRequest && errorRequest !== 'unauthorized'" class="retry-error">
      <ButtonComponent button-text="retry" @click="getPlaylist"/>
    </div>

    <!-- Список треков -->
    <div v-for="track in playlist" :key="track.id">
      <TrackComponent :track="track"/>
    </div>
  </div>
</template>

<script>
import api from "@/api.js";
import ErrorPopup from "@/components/ErrorPopup.vue";
import LoadingComponent from "@/components/LoadingComponent.vue";
import ButtonComponent from "@/components/ButtonComponent.vue";
import TrackComponent from "@/components/TrackComponent.vue";

export default {
  name: 'PlaylistView',
  components: {TrackComponent, ButtonComponent, LoadingComponent, ErrorPopup},
  data() {
    return {
      playlist: [],
      sortBy: 'popularity',
      errorRequest: '',
      isLoading: true
    };
  },
  mounted() {
    this.getPlaylist();
  },
  methods: {
    getPlaylist() {
      this.isLoading = true;
      api.get(`/user/playlist/${this.$route.params.id}`).then(response => {
        this.playlist = response.data.items;
        this.isLoading = false;
      }).catch(error => {
        console.log(error.response.data.error)
        this.isLoading = false;
        this.errorRequest = error.response.data.error
      });
    },
    goToLoginPage() {
      this.$router.push({name: 'Home'});
    },
    sortPlaylist() {
      api.post(`/user/playlist/${this.$route.params.id}/sort`, {sort_param: this.sortParam}).then(response => {
        console.log(response);
      }).catch(error => {
        this.errorRequest = error.response.data.error
      });
    }
  }
}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
  font-size: 2rem;
  font-weight: bold;
  color: var(--text-base, #fff);
}

/* Стили для wrapper-select */
.wrapper-select {
  display: flex;
  justify-content: flex-start;
  margin-bottom: 2rem;
}

select {
  background-color: var(--background-highlight, #1f1f1f);
  color: var(--text-base, #fff);
  padding: 0.5rem;
  border: 1px solid var(--essential-subdued, #7c7c7c);
  font-size: 14px;
  border-radius: 5px;
  width: 100%;
  appearance: none; /* Убираем стандартный стиль стрелочки */
  -webkit-appearance: none; /* Для Safari */
  -moz-appearance: none; /* Для Firefox */
  position: relative;
}

select:focus {
  border: 1px solid var(--essential-subdued, #7c7c7c);
  outline: none;
}

/* Стили для wrapper-button */
.wrapper-button {
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
}


.wrapper-button {
  display: flex;
  margin-bottom: 2rem;
}

.playlist-list {
  background-color: var(--background-base, #121212);
  color: var(--text-base, #fff);
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.loading-indicator {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
}

.retry-error,
.unauthorized-error {
  margin-top: 2rem;
}
</style>
