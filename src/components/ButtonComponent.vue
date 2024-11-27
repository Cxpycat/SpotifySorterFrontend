<template>
  <div
      :class="['button', buttonType]"
      @click="handleClick"
  >
    {{ buttonText }}
  </div>
</template>

<script>
export default {
  name: 'ButtonComponent',
  props: {
    buttonText: {
      type: String,
      required: true,
    },
    buttonType: {
      type: String,
      default: 'primary',
      validator(value) {
        return ['primary', 'alt'].includes(value);
      },
    },
  },
  methods: {
    handleClick() {
      this.$emit('click');
    },
  },
}
</script>

<style scoped>
.button {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: var(--button-font-size, 16px);
  font-weight: var(--button-font-weight, 600);
  padding: var(--button-padding, 15px);
  border-radius: var(--button-border-radius, 50px);
  width: 100%;
  cursor: pointer;
  transition: all 0.3s ease;
}

.button.primary {
  background-color: var(--button-background-base, #1ed760); /* Основной цвет кнопки */
  color: var(--button-text-base, #000000);
}

.button.primary:hover {
  background-color: var(--button-background-highlight, #3be477);
}

.button.primary:active {
  background-color: var(--button-background-press, #1abc54);
}

.button.alt {
  background-color: var(--button-background-alt, #292929); /* Альтернативный цвет */
  color: var(--button-text-alt, #fff);
}

.button.alt:hover {
  background-color: var(--button-background-alt-hover, #444);
}

.button.alt:active {
  background-color: var(--button-background-alt-press, #333);
}
</style>
