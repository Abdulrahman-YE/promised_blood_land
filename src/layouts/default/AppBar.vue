<template>
  <v-app-bar flat>
    <v-app-bar-title>
      <icon icon="mdi-blood" color="indianRed" />
      {{ $t('home.page_title') }}
    </v-app-bar-title>
    <template v-slot:append>
      <v-select label="languge" :items="$i18n.availableLocales" v-model="$i18n.locale" id="local"></v-select>
    </template>

  </v-app-bar>
</template>

<script  >
import { Icon } from '@iconify/vue';

export default {
  components: {
    Icon
  },
  watch: {
    '$i18n.locale': (newVal, oldVal) => {
      console.log(newVal)
      let h = document.querySelector('html');
      h.setAttribute('lang', newVal);
      if (oldVal == 'ar' && newVal != 'ar') {
        h.setAttribute('dir', 'ltr');
      }
      if (newVal == 'ar') {
        h.setAttribute('dir', 'rtl');
      }
    }
  },


}

</script>
