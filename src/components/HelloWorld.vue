<template>
  <div class="drop"></div>

  <v-container class="fill-height">

    <v-responsive class="align-center text-center fill-height ">
      <v-card :title="$t('home.news_title')" :text="$t('home.news_subtitle')" variant="outlined"></v-card>
      <div :dir="$i18n.locale == 'ar' ? 'rtl' : 'ltr'">
        <link href="https://fonts.googleapis.com/css?family=Raleway:300,500,700,900" rel="stylesheet">

        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style="width: 0;height: 0;">
          <defs>
            <filter id="goo">
              <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
              <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>

        <h1 class="title">
          13,300 {{ $t("home.killed") }}
          <span class="dropy"></span>

          <span class="dropy"></span>
        </h1>
        <p class="text-body" style="color:IndianRed;">5600 {{ $t('home.child') }} , 4100 {{ $t('home.women') }}. 125 {{
          $t("home.killed") + " " + $t('home.every_day') }} </p>

      </div>


      <div>
        <link href="https://fonts.googleapis.com/css?family=Raleway:300,500,700,900" rel="stylesheet">

        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style="width: 0;height: 0;">
          <defs>
            <filter id="goo">
              <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
              <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>

        <h1 class="title">{{ $t('home.title') }}

          <span class="dropy"></span>
          <span class="dropy"></span>
          <span class="dropy"></span>
          <span class="dropy"></span>



        </h1>

      </div>


      <div class="py-14 " />

      <v-row class="d-flex align-center justify-center">


        <v-col cols="auto">
          <v-btn color="primary" to="/genocide" min-width="228" rel="noopener noreferrer" size="x-large" variant="flat">
            <v-icon icon="mdi-water" size="large" start />

            {{ $t('home.genocide') }}
          </v-btn>
        </v-col>


      </v-row>
    </v-responsive>
  </v-container>
</template>

<script setup>
//
</script>
