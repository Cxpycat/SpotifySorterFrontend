<template>
  <div class="about_app">
    <div>
      Spotify сортировка
    </div>
  </div>
  <div class="home_btns_wrapper">
    <button class="btn" @click="auth()">Авторизоваться spotify</button>
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


<!--code=AQDB0GSdd86LWfubY2x6MR-aQ6gRtF0G7Nb5XhgPrBQzqSfhJ4p8AR6coUbsHdbaZoazZPkCMQSKkgwaqBzP1mRRg_wzz8bblgsx1XtmTPxgEn2vy60Yzd478oZ7w28iH4BtPECRgaSRwb2tRcRUEHqMpMlsD1c6U_vDpVFbTES879CprD1XAwGTrdX56Dz0jsYt4h0CKdzn-ZL62EbTWs7sNlVWdw-->
<!--&-->
<!--state=WKRwYcnUEjVW5UIa-->