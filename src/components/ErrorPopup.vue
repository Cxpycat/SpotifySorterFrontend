<template>
  <transition name="fade">
    <div v-if="visible" class="error-popup">
      <p>{{ $t(message) }}</p>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'ErrorPopup',
  props: {
    message: {
      type: String,
      required: true
    },
  },
  data() {
    return {
      visible: false
    };
  },
  watch: {
    message(newMessage) {
      if (newMessage) {
        this.show();
      }
    }
  },
  methods: {
    show() {
      this.visible = true;
      setTimeout(() => {
        this.visible = false;
      }, 5000);
    }
  }
}
</script>

<style scoped>
.error-popup {
  position: fixed;
  top: 1rem;
  left: 50%;
  transform: translateX(-50%);
  padding: 15px;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 400;
  z-index: 9999;
  box-shadow: 0 2px 10px var(--background-tinted-highlight, hsla(0, 0%, 100%, .14));
  width: 80%;
  background-color: var(--essential-negative, #ed2c3f);
  color: var(--text-base, #fff);
}

.error-popup p {
  text-align: center;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
