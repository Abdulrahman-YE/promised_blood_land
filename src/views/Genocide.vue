<template>
  <div class="drop"></div>

  <v-container class="fill-height">
    <v-responsive class="align-center fill-height " :dir="$i18n.locale == 'ar' ? 'rtl' : 'ltr'">




      <header class="mx-auto max-w-screen-xl pt-28 text-center mb-10">
        <h1 class="mt-2 text-3xl font-bold text-gray-900 sm:text-5xl">{{ $t('genocide.title') }}</h1>
        <div class="mx-auto mt-2 max-w-screen-md space-y-12 px-4  font-serif text-lg tracking-wide text-gray-700">
          <strong class="text-2xl font-medium text-justify" v-html="$t('genocide.details')"></strong>

        </div>
      </header>

      <v-divider class="mb-6 space-y-12"></v-divider>


      <div v-for="( section, index ) in   tm('genocide.cides')  " :key="index">

        <article>
          <header class="mx-auto max-w-screen-xl pt-28 text-center">
            <p class="text-gray-500">{{ rt(section.date) }}</p>
            <h1 class="mt-2 text-3xl font-bold text-gray-900 sm:text-5xl">{{ rt(section.title) }}</h1>

            <img v-if="imageExists[index]" class="responsive-image" :src="'images/genocides/' + index + '.jpg'"
              :alt="rt(section.title)" />
          </header>

          <div class="mx-auto mt-10 max-w-screen-md space-y-12 px-4 py-10 font-serif text-lg tracking-wide text-gray-700">
            <strong class="text-2xl font-medium text-justify" v-html="rt(section.details)"></strong>

          </div>
        </article>
      </div>

    </v-responsive>
  </v-container>
</template>

<script>
import { useI18n } from 'vue-i18n'
export default {
  data() {
    return {
      imageExists: {},
    };
  },
  methods: {
    async checkImageExists(index) {
      try {
        const response = await fetch(`images/genocides/${index}.jpg`);
        this.imageExists[index] = response.ok;
      } catch (error) {
        this.imageExists[index] = false;
      }
    },
  },
  created() {
    // Call checkImageExists for each image index
    for (let index = 0; index < this.tm('genocide.cides').length; index++) {
      this.checkImageExists(index);
    }
  },
  setup() {
    const { tm, rt } = useI18n();
    const getImageUrl = (name) => {
      console.log(new URL(`../../assets/genocides/${name}.jpg`, import.meta.url).toString())
      return new URL(`../../assets/genocides/${name}.jpg`, import.meta.url).href
    }
    return { rt, tm, getImageUrl }



  }
}


</script>

<style>
.responsive-image {
  width: 100%;
  /* Default width for smaller screens */
  height: auto;
  /* Maintain aspect ratio */
}

@media (min-width: 768px) {

  /* Set larger width for screens with a minimum width of 768px (e.g., tablets and desktops) */
  .responsive-image {
    width: 800px;
    height: 450px;
  }
}
</style>