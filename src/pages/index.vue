<template>
  <body>
    <AppNavigation />
    <AppJumbo />
    <div class="pageRule" />
    <AppCardsContainer />
    <AppAboutUs />
    <div class="pageRule" />
    <AppHowItWorks />
    <div class="pageRule" />
    <AppFaq />
    <AppFooter />
  </body>
</template>

<script setup>
import AppNavigation from '@/components/AppNavigation.vue';
import AppJumbo from '@/components/AppJumbo.vue';
import AppCardsContainer from '@/components/AppCardsContainer.vue';
import AppAboutUs from '@/components/AppAboutUs.vue';
import AppFaq from '@/components/AppFaq.vue';
import AppFooter from '@/components/AppFooter.vue';
import AppHowItWorks from '@/components/AppHowItWorks.vue';

  //
</script>

<style>
  body {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: "Montserrat", sans-serif;

    h2 {
      cursor: default;
      text-align: center;
      padding: 4rem 2rem;
      letter-spacing: 6px;
      font-weight: 400;
      font-size: 2.3rem;
      color: rgb(220, 220, 220);

      @media (max-width: 1000px) {
        font-size: 1.8rem;
      }
      @media (max-width: 600px) {
        font-size: 1.6rem;
      }
    }

    .pageRule {
      width: 30vw;
      height: 3px;
      background-color: #77f64b;
    }
  }
</style>