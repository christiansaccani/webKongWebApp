<template>
  <h2 id="AppCardsContainer">{{ $t('appCardsContainerTitle') }}</h2>

  <p id="cardsIntro">{{ $t('cardsIntro') }}</p>

  <div id="servicesContainer">
    <div class="cardContainer" ref="card1">
      <i class="fa-solid fa-code-branch"></i>
      <h3 class="cardTitle">{{ $t('developing') }}</h3>
      <p>{{ $t('developingSlogan') }}</p>
    </div>

    <div class="cardContainer" ref="card2">
      <i class="fa-solid fa-pencil"></i>
      <h3 class="cardTitle">{{ $t('design') }}</h3>
      <p>{{ $t('designSlogan') }}</p>
    </div>

    <div class="cardContainer" ref="card3">
      <i class="fa-solid fa-chart-simple"></i>
      <h3 class="cardTitle">{{ $t('social') }}</h3>
      <p>{{ $t('socialSlogan') }}</p>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const card1 = ref(null);
const card2 = ref(null);
const card3 = ref(null);

const animateCard = (card, delay) => {
  if (card) {
    card.style.transition = `transform 1s ease-out ${delay}, opacity .6s ease-out ${delay}`;
    card.style.transform = "translateY(0)";
    card.style.opacity = "1";
  }
};

const hideCard = (card) => {
  if (card) {
    card.style.transition = "transform 0.1s ease-out, opacity 0.1s ease-out";
    card.style.transform = "translateY(100px)";
    card.style.opacity = "0";
  }
};

const observeVisibility = (card, delay) => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (!card.classList.contains("animated")) {
          setTimeout(() => {
            animateCard(card, delay);
            card.classList.add("animated");
          }, parseFloat(delay) * 1000);
        }
      }
    });
  });

  observer.observe(card);
};

onMounted(() => {
  if (card1.value) observeVisibility(card1.value, "0s");
  if (card2.value) observeVisibility(card2.value, "0.2s");
  if (card3.value) observeVisibility(card3.value, "0.4s");
});
</script>



<style lang="scss" scoped>

#AppCardsContainer {
  opacity: 0;
  animation: fadeIn 1s 2s forwards;
}

#servicesContainer {
  margin: 4rem 0 6rem;
  width: 100vw;
  max-width: 1440px;
  display: flex;
  justify-content: space-around;

  @media (max-width: 1100px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 2rem;
    margin:0 0 4rem;
}
}

.cardContainer {
  height: 400px;
  width: 350px;
  border: 5px solid transparent;
  box-shadow: 4px 4px 4px #77f64b;
  border-radius: 24px;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  background-color: #121212;
  transform: translateY(100px);
  opacity: 0;
  transition: all 0.3s linear !important;

  @media (max-width: 1400px) {
    height: 350px;
    width: 30vw;
}

@media (max-width: 1100px) {
  width: 80%;
}
}

.cardContainer i {
  color: #77f64b;
  font-size: 3.5rem;
  padding: 1.5rem;
  border: 5px solid #77f64b;
  border-radius: 50%;
  background-color: #121212;
  transition: all 0.3s linear;

  @media (max-width: 800px) {
    font-size: 2.8rem;
    padding: 1.3rem;
}
}

.cardTitle {
  text-align: center;
  font-size: 2rem;
  letter-spacing: 4px;
  color: rgb(220, 220, 220);
  transition: color 0.2s linear;

  @media (max-width: 800px) {
    font-size: 1.6rem;
}
}

p {
  text-align: center;
  font-size: 1.2rem;
  letter-spacing: 1px;
  color: rgb(220, 220, 220);
  transition: all 0.1s linear;
  line-height: 2.5rem;
}

.cardContainer:hover {
  @media (min-width: 801px) {
    border-color: #77f64b;
}
  
}

h2 {
  padding-bottom: 2rem;
}

#cardsIntro {
  max-width: 100vw;
  font-size: 1.8rem !important;
  padding: 0 .5rem 4rem;
  letter-spacing: 3px;
  color: #726e6e;

  @media (max-width: 1000px) {
    font-size: 1.5rem !important;
  }
  @media (max-width: 600px) {
    font-size: 1.3rem !important;
  }
}
</style>
