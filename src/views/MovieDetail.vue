<template>
  <div class="w-full flex mt-10 justify-between">
    <div class="w-[30%] overflow-hidden">
      <img
        :src="BASE_PATH + movieDetail.poster_path"
        alt="img"
        class="hover:scale-110 transition duration-150 cursor-pointer w-full"
      />
    </div>
    <div class="w-[60%] flex flex-col justify-around">
      <h1 class="text-3xl mb-4">{{ movieDetail.original_title }}</h1>
      <h5>
        <span class="text-xl text-gray-600"
          >⭐{{ movieDetail.vote_average }} |
          {{ movieDetail.release_date }}</span
        >
        <span
          class="text-xl text-gray-600 ml-6"
          v-for="item in movieDetail.genres"
          :key="item.id"
          >{{ item.name }}</span
        >
      </h5>
      <p class="mt-6">
        {{ movieDetail.overview }}
      </p>

      <div>
        <h1 class="text-xl text-orange-600">Featured Cast</h1>
        <div class="flex flex-wrap justify-between">
          <div
            class="flex flex-col"
            v-for="item in movieDetail.production_companies"
            :key="item.id"
          >
            <span>{{ item.name }}</span>
            <span class="text-gray-600">Production Company</span>
          </div>
          <div
            class="flex flex-col"
            v-for="(item, index) in movieDetail.production_countries"
            :key="index"
          >
            <span>{{ item.iso_3166_1 }} / {{ item.name }}</span>
            <span class="text-gray-600">Production Country</span>
          </div>
        </div>
      </div>

      <div class="w-[60%] mx-auto flex justify-around items-center">
        <button class="rounded-md bg-orange-400 text-black p-2 w-[180px] mr-2">
          Play Trailer
        </button>
        <button class="rounded-md bg-orange-400 text-black p-2 w-[180px]">
          Favourite
        </button>
      </div>
    </div>
  </div>
  <div class="mt-6">
    <span class="text-2xl">Cast</span>
    <div class="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 mt-5">
      <cast
        v-for="cast in movieDetail.credits.cast"
        :key="cast.id"
        :cast="cast"
      />
    </div>
  </div>
  <div class="mt-6">
    <span class="text-2xl">Images</span>
    <div class="grid grid-cols-3 sm:grid-cols-5 mt-5">
      <images
        v-for="(img, index) in movieDetail.images.backdrops"
        :key="index"
        :imgs="img"
      />
    </div>
  </div>
</template>

<script>
import Cast from "../components/Cast.vue";
import Images from "../components/Images.vue";
export default {
  components: { Cast, Images },
  data() {
    return {
      movieDetail: {},
    };
  },
  created() {
    this.fetchMovie(this.$route.params.id);
  },
  methods: {
    async fetchMovie(id) {
      const response = await this.$http.get(
        "/movie/" + id + "?append_to_response=credits,video,images"
      );
      this.movieDetail = response.data;
    },
  },
};
</script>

<style>
</style>