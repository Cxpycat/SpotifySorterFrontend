<template>
  <router-link to="/">
    <div class="unauthorized-error">
      <div class="unauthorized-error-btn-wrapper">
        <ButtonComponent button-text="relogin"/>
      </div>
    </div>
  </router-link>
</template>

<script>
import ButtonComponent from "@/components/ButtonComponent.vue";

export default {
  name: 'ErrorAuthorizationComponent',
  components: {ButtonComponent},
}
</script>

<style scoped>
.unauthorized-error {
  position: fixed;
  top: 0;
  left: 0;
  height: calc(100vh - 70px);
  width: 100vw;
  background-color: var(--background-base);
  z-index: 2;
}

.unauthorized-error-btn-wrapper {
  width: calc(100% - 10rem);
  height: calc(100% - 10rem);
  display: flex;
  padding: 5rem;
  justify-content: center;
  align-items: center;
}
</style>
