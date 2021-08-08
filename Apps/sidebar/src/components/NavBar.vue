<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="#">
        <b-button variant="dark" size="sm" v-b-toggle.sidebar-no-header><b-icon icon="list"></b-icon></b-button>
      </b-navbar-brand>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
}
</script>

<style>

</style>
