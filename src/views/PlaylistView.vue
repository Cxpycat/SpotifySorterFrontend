<template>
  <div class="about_app">
    <!-- Панель для сортировки -->
    <div class="sort-panel">
      <button class="sort-button" @click="sortPlaylist">Отсортировать</button>
      <select class="sort-select" v-model="sortParam">
        <option value="popularity">По популярности</option>
      </select>
    </div>

    <!-- Таблица -->
    <table class="playlist-table">
      <thead>
      <tr>
        <th>Обложка</th>
        <th>Название</th>
        <th>Исполнитель</th>
        <th>Альбом</th>
        <th>Дата выпуска</th>
        <th>Длительность</th>
        <th>Популярность</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="track in playlist" :key="track.id">
        <td>
          <img v-if="track.track.album.images.length > 0" :src="track.track.album.images[0].url" width="50" height="50" alt="Album Cover">
        </td>
        <td>{{ track.track.name }}</td>
        <td>{{ track.track.artists[0].name }}</td>
        <td>{{ track.track.album.name }}</td>
        <td>{{ track.track.album.release_date }}</td>
        <td>{{ Math.floor(track.track.duration_ms / 60000) }}:{{ ((track.track.duration_ms % 60000) / 1000).toFixed(0) }}</td>
        <td>{{ track.track.popularity }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import api from "@/api.js";

export default {
  name: 'PlaylistView',
  data() {
    return {
      playlist: [],  // Исходный список треков
      sortParam: 'popularity'  // Критерий сортировки
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
        console.log(error);
      });
    },
    sortPlaylist() {
      api.post(`/user/playlist/${this.$route.params.id}/sort`, {sort_param: this.sortParam}).then(response => {
        console.log(response);
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
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #181818; /* Темный фон для всего контейнера */
  color: #f1f1f1; /* Светлый текст по умолчанию */
}

.sort-panel {
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  margin-bottom: 20px;
  padding: 10px;
  background-color: #292929; /* Темный фон панели сортировки */
  border-radius: 5px;
}

.sort-button {
  padding: 10px 20px;
  background-color: #7e48e5; /* Цвет кнопки */
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.sort-button:hover {
  background-color: #9acd32; /* Цвет кнопки при наведении */
}

.sort-select {
  padding: 10px;
  font-size: 16px;
  border: 1px solid #444444; /* Темная рамка для селектора */
  border-radius: 5px;
  background-color: #333333; /* Темный фон для селектора */
  color: #f1f1f1;
}

.playlist-table {
  width: 100%;
  max-width: 1200px;
  border-collapse: collapse;
  margin: 20px;
  background-color: #282828; /* Темный фон таблицы */
  color: #f1f1f1; /* Белый текст в таблице */
}

.playlist-table th, .playlist-table td {
  padding: 12px 15px;
  border: 1px solid #444444; /* Темный бордер для ячеек */
}

.playlist-table th {
  background-color: #7e48e5; /* Заголовки с вашим цветом */
  color: #f1f1f1; /* Белый цвет текста для контраста */
  font-weight: bold;
}

.playlist-table tr:nth-child(even) {
  background-color: #333333; /* Темный фон для четных строк */
}

.playlist-table tr:nth-child(odd) {
  background-color: #292929; /* Чуть светлее для нечетных строк */
}

.playlist-table td {
  color: #d3d3d3; /* Светлый серый для текста ячеек */
}

.playlist-table td img {
  border-radius: 5px;
  border: 2px solid #9acd38; /* Бордер для обложек */
}

/* Эффект наведения на строку */
.playlist-table tr:hover {
  background-color: #87cb06; /* Яркий зеленый при наведении */
  color: #181818; /* Темный текст на ярком фоне */
}

.playlist-table th:hover {
  background-color: #638621; /* Темный зеленый для заголовков при наведении */
}
</style>
