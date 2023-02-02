<template>
  <main class="container mx-auto">
    <div
      class="
        flex
        justify-between
        items-center
        left-0
        border-b-[1px] border-b-gray-900
        pb-5
      "
    >
      <Navbar />
      <Searchbar />
    </div>
    <router-view :key="$route.path" />
  </main>
</template>

<script>
import Navbar from "./components/header/Navbar.vue";
import Searchbar from "./components/header/Searchbar.vue";

export default {
  components: {
    Navbar,
    Searchbar,
  },
};
</script>
<style>
</style>
