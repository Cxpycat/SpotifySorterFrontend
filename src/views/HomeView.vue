<template>
  <div class="home-container">
    <div class="header">
      <h1>Spotify Sorter</h1>
      <p>{{ $t('main description') }}</p>
    </div>

    <div class="auth-button">
      <button-component button-text="Auth with Spotify" @click="auth"/>
    </div>

    <footer class="footer">
      <p>{{ $t('footer created by') }}</p>
      <p>{{ $t('footer contact') }}</p>
    </footer>
  </div>
</template>

<script>
import ButtonComponent from "@/components/ButtonComponent.vue";

export default {
  name: 'HomeView',
  components: {ButtonComponent},
  methods: {
    auth() {
      const client_id = 'e846fad163144ec69ab48ca8fc73d192';
      const redirect_uri = 'http://localhost:5173/redirect';
      const scope = 'user-read-private user-read-email playlist-modify-public playlist-modify-private playlist-read-private playlist-read-collaborative';

      window.location.href = `https://accounts.spotify.com/authorize?response_type=code&client_id=${client_id}&scope=${scope}&redirect_uri=${redirect_uri}&state=${this.generateRandomString(16)}`;
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
/* Общие стили для страницы */
.home-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100%;
  background: var(--background-base, #121212);
  color: var(--text-base, #fff);
  text-align: center;
  align-items: center;
}

/* Заголовок */
.header h1 {
  font-size: 3rem;
  margin-bottom: 10px;
  font-weight: bold;
}

.header p {
  font-size: 1.2rem;
  color: var(--text-base, #fff);
  margin-top: 2rem;
}

/* Стили кнопки */
.auth-button {
  display: flex;
  width: 50%;
}

footer {
  background-color: var(--background-base, #121212);
  padding: 1rem;
  color: var(--text-base, #fff);
  font-size: 1rem;
  text-align: center;
  margin-top: 20px;
}

footer p {
  margin: 5px 0;
}

/* Адаптивность для мобильных устройств */
@media (max-width: 600px) {
  .header h1 {
    font-size: 2rem;
  }

  .header p {
    font-size: 1rem;
  }

  .auth-button {
    width: 80%;
  }
}

/* Адаптивность для планшетов и больших экранов */
@media (min-width: 601px) and (max-width: 1024px) {
  .header h1 {
    font-size: 2.5rem;
  }

  .header p {
    font-size: 1.1rem;
  }

  .auth-button {
    width: 60%;
  }
}

</style>