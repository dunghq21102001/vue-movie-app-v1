<template>
  <div class="flex flex-col justify-center items-center mx-2 mb-8">
    <img
      :src="BASE_PATH + cast.profile_path"
      alt="cast image"
      class="h-[300px]"
    />
    <h1>
      <span>{{ cast.name }}</span> / <span>{{ cast.character }}</span>
    </h1>
    <h1></h1>
  </div>
</template>

<script>
export default {
  props: {
    cast: Object,
  },
  data() {
    return { BASE_PATH: "https://image.tmdb.org/t/p/original" };
  },
};
</script>

<style>
</style>