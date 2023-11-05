<template>
  <div class="drop"></div>

  <v-container class="fill-height">
    <v-responsive class="align-center fill-height " :dir="$i18n.locale == 'ar' ? 'rtl' : 'ltr'">




      <h1 class="text-h5 font-weight-bold">{{ $t('genocide.title') }}</h1>


      <p class="text-body  mt-1 text-justify">{{ $t('genocide.details') }}</p>

      <div>
        <div v-for="(section, index) in tm('genocide.cides')" :key="index">

          <h1 class="text-h6 font-weight-bold ">{{ rt(section.title) }}</h1>
          <p class="text-subtitle-2 font-weight-bold mb-1">{{ rt(section.date) }}</p>
          <p class="text-body" v-html="rt(section.details)"></p>

        </div>

      </div>

    </v-responsive>
  </v-container>
</template>

<script>
import { useI18n } from 'vue-i18n'

export default {
  setup() {
    const { tm, rt } = useI18n();
    return { rt, tm }
  }
}


</script>
