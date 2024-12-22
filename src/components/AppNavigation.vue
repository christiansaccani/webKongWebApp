<template>
  <nav>
    <div id="navigationContainer">
      <div  @click="scrollToSection('AppHead')" id="companyNameNav">
        <img src="../assets/WkRoundedLogo.png" alt="Logo" />
          <h1>WEBKONG</h1>
      </div>

      <ul id="sectionsUlNav">
        <li @click="scrollToSection('AppHead')">{{ $t('home') }}</li>
        <li @click="scrollToSection('AppCardsContainer')">{{ $t('services') }}</li>
        <li @click="scrollToSection('AppAboutUs')">{{ $t('aboutUs') }}</li>
        <li @click="scrollToSection('AppFaq')">{{ $t('faq') }}</li>
        <li @click="scrollToSection('AppFooter')">{{ $t('contacts') }}</li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  window.scrollTo({
    top: section.offsetTop - 90,
    
  });
};
</script>

<style lang="scss" scoped>


nav {
  background-color: #121212;
  height: 120px;
  width: 100%;
  padding: 1rem 4rem;

  display: flex;
  justify-content: center;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;

  transition: top 0.3s ease-in-out;
  animation: fadeIn 1s forwards;

  #navigationContainer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 1865px;
    padding: 0 2rem;

    @media (max-width: 1024px) {
        justify-content: center;
      }

    #companyNameNav {
      display: flex;
      align-items: center;

      color: #767676;
      opacity: .6;
      font-size: 1.4rem;
      font-weight: 600;
      letter-spacing: 7px;

      cursor: pointer;
      transition: all 0.3s linear;

      &:hover {
        color: #77f64b;

        img {
          opacity: 1;
        }
      }

      @media (max-width: 1024px) {
        letter-spacing: 7px;
      }

      img {
        height: 70px;
        margin-right: 1rem;
        opacity: .6;
        transition: all 0.3s linear;

        @media (max-width: 1024px) {
          margin-right: 1.5rem;
          height: 70px;
      }
      }

      span {
        color: #77f64b;
        -webkit-text-stroke: 1px black;
      }
    }

    #sectionsUlNav {
      color: #726e6e;
      list-style: none;

      display: flex;
      align-items: center;
      gap: 3.5rem;
      font-size: 1.15rem;
      font-weight: 600;

      height: 4rem;
      border-radius: 48px;
      padding: .5rem 3rem;

      @media (max-width: 1400px) {
        padding: .5rem .5rem;
        font-size: 1rem;
      }

      @media (max-width: 1024px) {
        display: none;
      }

      li {
        position: relative;
        letter-spacing: 3px;
        cursor: pointer;
        transition: all 0.3s linear;
        padding: 0.3rem 0.5rem;
        text-transform: uppercase;
      }

      li::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 4px;
        background-color: #77f64b;
        transition: width 0.3s ease-in-out;
      }

      li:hover::after {
        width: 100%;
      }

      li:hover {
        color: #77f64b;
      }
    }
  }
}
</style>
