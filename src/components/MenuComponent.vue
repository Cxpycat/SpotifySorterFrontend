<template>
  <div class="menu-container">

    <template v-if="isGuest" v-for="button in guestButtons" :key="button.id">
      <div :class="['menu-button', button.id === activeButton]">
        <div class="menu-button-icon">
          <font-awesome-icon :icon="['fas', button.icon]"/>
        </div>
        <div class="menu-button-text">{{ $t(button.text) }}</div>
      </div>
    </template>

    <template v-if="!isGuest" v-for="button in userButtons" :key="button.id">
      <router-link :to="button.to" :class="['menu-button', button.id === activeButton ? 'active' : '']">
        <div class="menu-button-icon">
          <font-awesome-icon :icon="['fas', button.icon]"/>
        </div>
        <div class="menu-button-text">{{ $t(button.text) }}</div>
      </router-link>
    </template>
  </div>
</template>

<script>
export default {
  name: 'MenuComponent',
  props: {
    isGuest: {
      type: Boolean,
      default: false
    },
    activeButton: {
      type: String,
      default: 'auth'
    }
  },
  data() {
    return {
      guestButtons: [
        {
          id: 'auth',
          icon: 'arrow-right-to-bracket',
          text: 'auth'
        },
        {
          id: 'about',
          icon: 'circle-info',
          text: 'about'
        }
      ],
      userButtons: [
        {
          id: 'playlists',
          icon: 'bars',
          text: 'playlists',
          to: '/playlists'
        },
        {
          id: 'logout',
          icon: 'arrow-right-from-bracket',
          text: 'logout',
          to: '/logout'
        },
      ]
    }
  }
}
</script>

<style scoped>
.menu-container {
  position: fixed;
  bottom: 0;
  left: 0;
  background: var(--background-elevated-base, #1f1f1f);
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  font-size: 14px;
  font-weight: 100;
}

.menu-button {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 0.5rem;
}

.menu-button-icon {
  display: flex;
  justify-content: center;
}


.menu-button.active {
  color: var(--text-bright-accent, #1ed760);
}

.menu-button:hover {
  color: var(--button-background-highlight, #3be477);
}
</style>
