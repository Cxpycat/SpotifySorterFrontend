<template>
  <div class="about_app">
    <div>
      Spotify сортировка
    </div>
  </div>
  <div class="home_btns_wrapper">
    <button class="btn" @click="auth()">ты пидор</button>
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
      const scope = 'user-read-private user-read-email';

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
<style lang="scss" scoped>
.about_app{
  display: grid;
  place-items: center;
  position: relative;
}
.btn {
  width: 30vmin;
  height: 20vmin;
  display: grid;
  position: absolute;
  place-items: center;
  top: 17%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-shadow: 0 1px 0 #000;
  --border-angle: 0turn;
  --main-bg: conic-gradient(
      from var(--border-angle),
      #213,
      #112 5%,
      #112 60%,
      #213 95%
    );
  
  border: solid 5px transparent;
  border-radius: 2em;
  --gradient-border: conic-gradient(from var(--border-angle), transparent 25%, #ffffff, #1ed760 99%, transparent);
  
  background: 
    var(--main-bg) padding-box,
    var(--gradient-border) border-box, 
    var(--main-bg) border-box;
  
  background-position: center;

  animation: bg-spin 3s linear infinite;
  @keyframes bg-spin {
    to {
      --border-angle: 1turn;
    }
  }
}

@property --border-angle {
  syntax: "<angle>";
  inherits: true;
  initial-value: 0turn;
}
</style>