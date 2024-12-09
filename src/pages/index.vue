<template>
  <body>
    <!-- Loader -->
    <div v-if="isLoading" class="loader-wrapper">
      <div class="wrapper">
        <img src="../assets/WkRoundedLogo.png" alt="">
      </div>
    </div>

    <!-- Contenuto della pagina -->
    <div id="wholeBody" v-else>
      <AppNavigation />
      <AppJumbo />
      <div class="pageRule pageRuleAnimated" />
      <AppCardsContainer />
      <AppAboutUs />
      <div class="pageRule" />
      <AppHowItWorks />
      <div class="pageRule" />
      <AppFaq />
      <AppFooter />
    </div>
  </body>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import AppNavigation from '@/components/AppNavigation.vue';
import AppJumbo from '@/components/AppJumbo.vue';
import AppCardsContainer from '@/components/AppCardsContainer.vue';
import AppAboutUs from '@/components/AppAboutUs.vue';
import AppFaq from '@/components/AppFaq.vue';
import AppFooter from '@/components/AppFooter.vue';
import AppHowItWorks from '@/components/AppHowItWorks.vue';

// Variabile per il loader
const isLoading = ref(true);

onMounted(() => {
  // Simula un tempo di caricamento (esempio: 2 secondi)
  setTimeout(() => {
    isLoading.value = false;
  }, 3900);
});
</script>

<style>
/* Loader wrapper (sfondo e centratura) */
.loader-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(18, 18, 18);
  z-index: 9999;
}

/* Animazione rimbalzo */
@keyframes bounce {
  0% {
    transform: translateY(-100px);
    opacity: 0;
  }
  50% {
    transform: translateY(0px);
    opacity: 1;
  }
  100% {
    transform: translateY(-100px);
    opacity: 0;
  }
}

/* Loader animation styles */
.wrapper {
  width: 200px;
  height: 60px;
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.wrapper img {
  height: 300px;
  animation: bounce 4s ease-out infinite;
}

/* CSS originale */
body {
  font-family: "Montserrat", sans-serif;

  #wholeBody {
    display: flex;
    flex-direction: column;
    align-items: center;

    .pageRuleAnimated {
      opacity: 0;
      animation: fadeIn 1s 1.5s forwards;
    }

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
}

@keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
</style>
