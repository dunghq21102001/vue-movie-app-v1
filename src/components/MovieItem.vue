<template>
  <div class="w-[250px] mt-5 mx-4">
    <router-link :to="'movie/'+ movie.id">
      <img
        :src="BASE_PATH + movie.poster_path"
        alt=""
        class="hover:opacity-75 cursor-pointer h-[300px] w-full"
      />
    </router-link>
    <h1 class="text-2xl">{{ movie.original_title }}</h1>
    <h2 class="text-xl">
      ⭐{{ movie.vote_average }} | {{ movie.release_date }}
    </h2>
    <div class="flex flex-wrap">
      <h5
        class="text-gray-700"
        v-for="(genre, index) in movie.genre_ids"
        :key="genre"
      >
        {{ genreName(genre, index) }}
      </h5>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    movie: Object,
    genres: Array,
  },
  data() {
    return {
      BASE_PATH: "https://image.tmdb.org/t/p/original",
    };
  },
  methods: {
    genreName(id, index) {
      for (const item of this.genres) {
        if (item.id == id) {
          if (this.movie.genre_ids.length - 1 == index) {
            return item.name;
          } else {
            return item.name + ", ";
          }
        }
      }
    },
  },
};
</script>

<style>
</style>