<template>
  <footer id="AppFooter">
    <section>
      <div id="moveTo">
        <p @click="scrollToSection('AppHead')">Go Up</p>
        <p @click="scrollToSection('AppCardsContainer')">Services</p>
        <p @click="scrollToSection('AppAboutUs')">About Us</p>
      </div>

      <div id="contacts">
        <a href="mailto:hello@webkong.net?subject=Richiesta%20Preventivo&body=Ciao,%20vorrei%20richiedere%20un%20preventivo.">hello@webkong.net</a>
        <p>Bologna, Italy</p>
      </div>

      <div id="socials">
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-linkedin-in"></i>
        <i class="fa-brands fa-x-twitter"></i>
        <i class="fa-brands fa-whatsapp"></i>
      </div>
    </section>
    <h5>© WebKong, 2024. All Rights Reserved.</h5>
  </footer>
</template>

<script setup>
const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  window.scrollTo({
    top: section.offsetTop - 90,
    
  });
};
</script>

<style>
footer {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 2rem;
  color: rgb(220, 220, 220);

  section {
    width: 100%;
    display: flex;
    justify-content: space-around;
    padding-bottom: 6rem;

    @media (max-width: 800px) {
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      gap: 3rem;
      padding-bottom: 3rem;
    }

    #moveTo p {
        cursor: pointer;
    }

    #moveTo {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 800px) {
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    gap: 2rem;
  }
}

#contacts {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 800px) {
    align-items: center;
  }
}

a {
  text-decoration: none;
  transition: color .2s linear;
      letter-spacing: 3px;
      color: rgb(220, 220, 220);

        &:hover {
        color: #77f64b;
      }
}

      p {
      transition: color .2s linear;
      letter-spacing: 3px;

        &:hover {
        color: #77f64b;
      }
      }
    }

    #socials {
      display: flex;
      align-items: center;
      gap: 2rem;

      i {
        font-size: 1.3rem;
        transition: color .2s linear;
        cursor: pointer;

        &:hover {
        color: #77f64b;
      }
      }
    }
  }

  h5 {
  cursor: default;
  font-weight: 400;
  letter-spacing: 2px;
  }

</style>
