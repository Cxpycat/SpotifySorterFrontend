<template>
  <div class="track-row">
    <div class="track-image-container">
      <img v-if="track.track.album.images.length > 0" :src="track.track.album.images[0].url" class="track-image" alt="Album Cover">
    </div>

    <div class="track-info">
      <div class="track-title">{{ track.track.name }}</div>
      <p class="track-artist">{{ track.track.artists[0].name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TrackComponent',
  props: {
    track: Object
  }
}
</script>

<style scoped>
.track-row {
  display: flex;
  align-items: center;
  padding: 1rem;
  background-color: var(--background-tinted-base, hsla(0, 0%, 100%, .1));
  border-radius: 10px;
  margin-bottom: 1rem;
}

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
</style>
