<template>
  <div class="flex flex-col justify-center items-center mx-2">
    <img :src="BASE_PATH + imgs.file_path" alt="img" class="" />
    <h1>
      <span>Vote Avg: {{ imgs.vote_average }}</span> / Vote Count:
      <span>{{ imgs.vote_count }}</span>
    </h1>
  </div>
</template>
  
  <script>
export default {
  props: {
    imgs: Object,
  },
  data() {
    return { BASE_PATH: "https://image.tmdb.org/t/p/original" };
  },
};
</script>
  
  <style>
</style>