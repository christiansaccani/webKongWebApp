<template>
  <h2 id="AppCardsContainer">WHAT YOU'LL GET</h2>

  <p id="cardsIntro">We resolve problems associated with<br>creative procedures.</p>

  <div id="servicesContainer">
    <div class="cardContainer" ref="card1">
      <i class="fa-solid fa-code-branch"></i>
      <h3 class="cardTitle">Developing</h3>
      <p>High quality coding at a fraction of the cost.</p>
    </div>

    <div class="cardContainer" ref="card2">
      <i class="fa-solid fa-pencil"></i>
      <h3 class="cardTitle">Tailor-Made design</h3>
      <p>To make your vision reality.</p>
    </div>

    <div class="cardContainer" ref="card3">
      <i class="fa-solid fa-chart-simple"></i>
      <h3 class="cardTitle">Social Media</h3>
      <p>Surviving the jungle of social media.</p>
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
        // Applica l'animazione con il ritardo specificato
        setTimeout(() => {
          animateCard(card);
        }, parseFloat(delay) * 1000); // Converte il ritardo da "0.4s" a millisecondi
      } else {
        hideCard(card);
      }
    });
  });

  observer.observe(card);
};

onMounted(() => {
  // Inizializza l'osservatore per ogni card con ritardi crescenti
  if (card1.value) observeVisibility(card1.value, "0s");
  if (card2.value) observeVisibility(card2.value, "0.4s");  // Ritardo di 0.2s per la seconda card
  if (card3.value) observeVisibility(card3.value, "0.8s");  // Ritardo di 0.4s per la terza card
});
</script>



<style lang="scss" scoped>

#servicesContainer {
  margin: 4rem 0 6rem;
  width: 100%;
  max-width: 1440px;
  display: flex;
  justify-content: space-around;
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
  transform: translateY(100px);  /* Inizia fuori dalla vista */
  opacity: 0;  /* Inizia invisibile */
  transition: all 0.3s linear !important;
}

.cardContainer i {
  color: #77f64b;
  font-size: 3.5rem;
  padding: 1.5rem;
  border: 5px solid #77f64b;
  border-radius: 50%;
  background-color: #121212;
  transition: all 0.3s linear;
}

.cardTitle {
  text-align: center;
  font-size: 2rem;
  letter-spacing: 4px;
  color: whitesmoke;
  transition: color 0.2s linear;
}

p {
  text-align: center;
  font-size: 1.2rem;
  letter-spacing: 1px;
  color: whitesmoke;
  transition: all 0.1s linear;
  line-height: 2.5rem;
}

.cardContainer:hover {
  // background-color: #77f64b;
  border-color: #77f64b;
}

h2 {
  padding-bottom: 2rem;
}
#cardsIntro {
  font-size: 1.8rem !important;
  padding-bottom: 4rem;
  letter-spacing: 3px;
  color: #726e6e;;
}
</style>
