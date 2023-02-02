<template>
  <div class="flex mt-5">
    <span class="text-3xl"
      ><router-link to="/">🎥 MOVIES'MOVIES</router-link></span
    >
    <ul class="min-w-[200px] md:flex justify-around items-center ml-5 hidden">
      <!-- <li><router-link to="/movies"> Movies </router-link></li> -->
      <li><router-link to="/actors"> Actors </router-link></li>
      <!-- <li><router-link to="/profile"> Profile </router-link></li> -->
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
  li:hover {
    color: red;
  }
</style>