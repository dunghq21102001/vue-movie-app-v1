<template>
  <div class="mt-5 flex">
    <div class="relative">
      <input
        @input="searchMovie"
        type="text"
        class="rounded-full px-7 bg-gray-700 focus:outline-none h-14"
        placeholder="Search"
      />
      <div
        v-if="searchResults.length != 0"
        class="
          pl-7
          bg-black/70
          absolute
          top-[101%]
          w-full
          lg:w-[130%]
          rounded-md
          py-2
          max-h-[75vh]
          overflow-y-scroll
          z-20
        "
      >
        <ul>
          <li
            v-for="(item, index) in searchResults"
            :key="index"
            class="flex justify-start items-center mb-2"
          >
            <!-- <router-link :to="'movie/' + item.id"> -->
            <router-link :to="{ name: 'movie', params: { id: item.id } }">
              <img
                :src="BASE_PATH + item.backdrop_path"
                alt=""
                class="h-12 mr-2"
                @click="resetSearchbar"
              />
            </router-link>
            <router-link :to="{ name: 'movie', params: { id: item.id } }">
              <span @click="resetSearchbar">{{ item.title }}</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <img
      src="https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?cs=srgb&dl=pexels-kelvin-valerio-617278.jpg&fm=jpg"
      alt="profile img"
      class="rounded-full w-14 h-14 ml-5"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchResults: [],
      BASE_PATH: "https://image.tmdb.org/t/p/original",
    };
  },
  methods: {
    searchMovie(e) {
      if (e.target.value == "") {
        this.searchResults = [];
        return;
      }
      clearTimeout(this.debounce);
      this.debounce = setTimeout(() => {
        this.fetchSearch(e.target.value);
      }, 600);
    },
    async fetchSearch(e) {
      try {
        const response = await this.$http.get(
          "https://api.themoviedb.org/3/search/movie?query=" + e
        );
        this.searchResults = response.data.results;
      } catch (error) {
        console.log(error);
      }
    },
    resetSearchbar() {
      this.searchResults = [];
    },
    keyboardEvent() {
      window.addEventListener("keydown", (e) => {
        if (e.key == "Escape") {
          this.searchResults = [];
        }
      });
    },
  },
  mounted() {
    // this.fetchSearch();
    this.keyboardEvent();
  },
};
</script>

<style>
</style>