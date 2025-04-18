<template>
    <h2>{{ $t('howItWorks') }}</h2>
  
    <div id="cardsFlowContainer">
      <div class="cardContainer" ref="card1">
        <i class="fa-regular fa-comments"></i>
        <h3 class="cardTitle">{{ $t('stepOne') }}</h3>
      </div>
  
      <div class="cardContainer" ref="card2">
        <i class="fa-solid fa-wand-sparkles"></i>
        <h3 class="cardTitle">{{ $t('stepTwo') }}</h3>
      </div>
  
      <div class="cardContainer" ref="card3">
        <i class="fa-solid fa-box-open"></i>
        <h3 class="cardTitle">{{ $t('stepThree') }}</h3>
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
    if (card2.value) observeVisibility(card2.value, "0.4s");
    if (card3.value) observeVisibility(card3.value, "0.8s");
  });
  </script>
  
  
  
  <style lang="scss" scoped>
  
  #cardsFlowContainer {
    margin: 2rem 0 12rem;
    width: 100%;
    max-width: 1440px;
    display: flex;
    justify-content: space-around;

    @media (max-width: 1400px) {
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      gap: 2rem;
      margin: 2rem 0 10rem;
    }

    @media (max-width: 600px) {
      margin: 2rem 0 6rem;
    }
  }
  
  .cardContainer {
    width: 22vw;
    border: 5px solid transparent;
    box-shadow: 4px 4px 4px #77f64b;
    border-radius: 24px;
    padding: 3rem 1rem;
    display: flex;
    align-items: center;
    gap: 2rem;
    cursor: pointer;
    background-color: #121212;
    transform: translateY(100px);
    opacity: 0;
    transition: all 0.3s linear !important;

    @media (max-width: 1400px) {
      justify-content: space-around;
      width: 80vw;
      height: 214px;
    }
  }
  
  .cardContainer i {
    color: #77f64b;
    font-size: 3rem;
    padding: .5rem;
    background-color: #121212;
    transition: all 0.3s linear;
    display: flex;
    align-items: center;
  }
  
  .cardTitle {
    text-align: center;
    font-size: 2rem;
    letter-spacing: 4px;
    color: rgb(220, 220, 220);
    transition: color 0.2s linear;

    @media (max-width: 800px) {
      font-size: 1.5rem;
    }
  }
  
  .cardContainer:hover {
    border-color: #77f64b;
  }
  
  h2 {
    padding-bottom: 2rem;
  }
  </style>
  