<template>
  <div class="container mx-auto p-4">
    <h1 class="text-orange-600 text-2xl">Popular Actors</h1>
    <div
      class="
        grid grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        mt-10
      "
    >
      <div
        v-for="(actor, index) in actorList"
        :key="index"
        class="flex flex-col justify-center items-center mb-8 mx-3"
      >
        <router-link :to="`/actor/${actor.id}`">
          <img
            :src="BASE_PATH + actor.profile_path"
            alt="actor image"
            class="h-[350px]"
          />
        </router-link>
        <h1>{{ actor.name }}</h1>
        <p class="text-gray-600">
          Popularity: {{ actor.popularity }} / {{ actor.known_for_department }}
        </p>
      </div>
    </div>
    <div class="w-full flex justify-center my-4">
      <div class="spinner">1</div>
    </div>
  </div>
</template>

<script>
let currentPage = 1;
export default {
  data() {
    return {
      actorList: [],
      BASE_PATH: "https://image.tmdb.org/t/p/original",
    };
  },
  methods: {
    async fetchActors(page) {
      try {
        const response = await this.$http.get(
          "https://api.themoviedb.org/3/person/popular?page=" + page
        );
        this.actorList.push(...response.data.results);
      } catch (error) {
        console.log(error);
      }
    },
    endScroll() {
      window.onscroll = () => {
        let bottomWin =
          document.documentElement.scrollTop + window.innerHeight ===
          document.documentElement.offsetHeight;
        if (bottomWin) {
          currentPage += 1;
          this.fetchActors((currentPage += 1));
        }
      };
    },
  },
  mounted() {
    this.fetchActors(currentPage);
    this.endScroll();
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