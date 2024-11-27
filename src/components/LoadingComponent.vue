<template>
  <div class="loader">
    <div class="spinner"></div>
    <p>{{ $t(text) }}</p>
  </div>
</template>

<script>
export default {
  name: 'LoadingComponent',
  props: {
    text: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
/* Стили для loader */
.loader {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.spinner {
  border: 4px solid var(--background-tinted-base, hsla(0, 0%, 100%, .1));
  border-top: 4px solid var(--essential-base, #fff);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;
}

/* Анимация для спиннера */
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* Текст под спиннером */
.loader p {
  margin-top: 20px;
  font-size: 1.2rem;
  font-weight: 600;
}
</style>
