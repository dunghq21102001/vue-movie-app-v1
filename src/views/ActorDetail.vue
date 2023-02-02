<template>
  <div class="w-full flex mt-10 justify-between">
    <div class="w-[30%] overflow-hidden">
      <img
        :src="BASE_PATH + actor.profile_path"
        alt="actor image"
        class="w-full"
      />
      <div class="flex w-full justify-around items-center mt-2">
        <span
          class="
            cursor-pointer
            hover:rotate-[360deg] hover:text-blue-600
            transition
            duration-200
          "
        >
          <mdicon name="facebook" />
        </span>
        <span
          class="
            cursor-pointer
            hover:rotate-[360deg] hover:text-orange-500
            transition
            duration-200
          "
          ><mdicon name="instagram"
        /></span>
        <span
          class="
            cursor-pointer
            hover:rotate-[360deg] hover:text-red-700
            transition
            duration-200
          "
          ><mdicon name="youtube"
        /></span>
        <span
          class="
            cursor-pointer
            hover:rotate-[360deg] hover:text-blue-400
            transition
            duration-200
          "
          ><mdicon name="twitter"
        /></span>
      </div>
    </div>
    <div class="w-[60%]">
      <div class="flex flex-col">
        <span class="text-3xl">{{ actor.name }}</span>
        <span v-if="actor.birthday != null" class=""
          >🎂 {{ actor.birthday }}</span
        >
        <span v-if="actor.deathday != null">⚰️ {{ actor.deathday }}</span>
      </div>
      <div class="mt-5">
        <span class="text-xl text-orange-600">Also known as</span>
        <h5 v-for="(item, index) in actor.also_known_as" :key="index">
          {{ index }}. {{ item }}
        </h5>
      </div>
      <h5 class="mt-5">
        <span class="text-xl text-orange-600">Popularity:</span>
        {{ actor.popularity }}
      </h5>

      <div class="mt-5">
        <span class="text-xl text-orange-600">Biography</span>
        <p class="">
          {{ actor.biography }}
        </p>
      </div>
    </div>
  </div>
  <div class="mt-10">
    <span class="text-2xl text-orange-600">Known For</span>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-4"
    >
      <div
        v-for="cast in movieList"
        :key="cast.id"
        class="flex flex-col justify-center items-center mb-8 mx-3"
      >
        <router-link :to="{ name: 'movie', params: { id: cast.id } }">
          <img
            :src="BASE_PATH + cast.poster_path"
            alt="poster"
            class="h-[350px]"
          />
        </router-link>
        <h1>{{ cast.name }}</h1>
        <p class="text-gray-600 truncate-string">{{ cast.overview }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      BASE_PATH: "https://image.tmdb.org/t/p/original",
      actor: {},
      // credits: {},
      movieList: [],
    };
  },
  methods: {
    async fetchActor(id) {
      try {
        const response = await this.$http.get(
          "https://api.themoviedb.org/3/person/" + id
        );
        this.actor = response.data;
      } catch (error) {
        console.log(error);
      }
    },
    async fetchCredits(id) {
      try {
        const response = await this.$http.get(
          "https://api.themoviedb.org/3/person/" + id + "/combined_credits"
        );
        this.movieList = response.data.cast.filter(
          (c) => (c.media_type = "movie")
        );
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.fetchActor(this.$route.params.id);
    this.fetchCredits(this.$route.params.id);
  },
};
</script>

<style scoped>
.truncate-string {
  width: 90%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;

  margin: 0;
  /* resize: horizontal; */
}
</style>