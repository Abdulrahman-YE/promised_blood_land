<template>
  <v-app-bar flat>
    <v-app-bar-title>
      <v-icon icon="mdi-circle-slice-4" />
      {{ $t('home.page_title') }} </v-app-bar-title>
    <template v-slot:append>
      <v-select label="languge" :items="$i18n.availableLocales" v-model="$i18n.locale" id="local"></v-select>
    </template>

  </v-app-bar>
</template>

<script setup >


</script>
