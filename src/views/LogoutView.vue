<script>
export default {
  name: 'LogoutView',
  mounted() {
    localStorage.removeItem('access_token');
    this.$router.push('/');
  }
}
</script>