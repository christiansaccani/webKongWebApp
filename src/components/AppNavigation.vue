<template>
  <nav>
    <div id="navigationContainer">
      <div id="companyNameNav">
        <img src="../assets/WkRoundedLogo.png" alt="logo" />
          <h1>WEBKONG</h1>
      </div>

      <ul id="sectionsUlNav">
        <li @click="scrollToSection('AppAboutUs')">HOME</li>
        <li @click="scrollToSection('AppCardsContainer')">SERVICES</li>
        <li @click="scrollToSection('AppFooter')">CONTACTS</li>
        <li>FAQ</li>
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
  padding: 1rem 0;

  display: flex;
  justify-content: center;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;

  transition: top 0.3s ease-in-out;

  #navigationContainer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 1865px;
    padding: 0 2rem;

    #companyNameNav {
      display: flex;
      align-items: center;

      color: black;
      font-size: 1.4rem;
      font-weight: 600;
      letter-spacing: 5px;

      img {
        height: 50px;
        margin-right: 0.5rem;
        opacity: .6;
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

      li {
        position: relative;
        letter-spacing: 3px;
        cursor: pointer;
        transition: all 0.3s linear;
        padding: 0.3rem 0.5rem;
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
