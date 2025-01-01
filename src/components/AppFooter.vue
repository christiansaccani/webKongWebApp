<template>
  <footer>
    <section>
      <div id="moveTo">
        <p @click="scrollToSection('AppHead')">{{ $t('goUp') }}</p>
        <p @click="scrollToSection('AppCardsContainer')">{{ $t('services') }}</p>
        <p @click="scrollToSection('AppAboutUs')">{{ $t('aboutUs') }}</p>
      </div>

      <div id="contacts">
        <a
          href="mailto:hello@webkong.net?subject=Richiesta%20Preventivo&body=Ciao,%20vorrei%20richiedere%20un%20preventivo.">hello@webkong.net</a>
        <p>Bologna, Italy</p>
      </div>

      <div id="socials">
        <a :href="whatsappLink" target="_blank" rel="noopener noreferrer">
          <i class="fa-brands fa-whatsapp"></i>
        </a>
        <a href="https://www.linkedin.com/company/webkong/about/" target="_blank" rel="noopener noreferrer">
          <i class="fa-brands fa-linkedin-in"></i>
        </a>
        <div class="language-selector">
          <i class="fa-solid fa-earth-europe" @click.stop="toggleLanguageMenu"></i>
          <div v-if="showLanguageMenu" class="language-dropdown">
            <p @click="changeLanguage('en')">English</p>
            <p @click="changeLanguage('it')">Italiano</p>
            <p @click="changeLanguage('fr')">Français</p>
            <p @click="changeLanguage('es')">Español</p>
          </div>
        </div>
      </div>
    </section>
    <h5>© WebKong, 2025. All Rights Reserved.</h5>
  </footer>
</template>

<script setup>
  import { ref, onMounted, onUnmounted } from 'vue';

  const showLanguageMenu = ref(false);

  const toggleLanguageMenu = () => {
    showLanguageMenu.value = !showLanguageMenu.value;
  };

  const handleClickOutside = (event) => {
    const languageSelector = document.querySelector('.language-selector');
    if (showLanguageMenu.value && languageSelector && !languageSelector.contains(event.target)) {
      showLanguageMenu.value = false;
    }
  };

  const changeLanguage = (lang) => {
    const baseUrl = window.location.origin;
    window.location.href = `${baseUrl}/${lang}`;
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    window.scrollTo({
      top: section.offsetTop - 90,
      behavior: 'smooth',
    });
  };

  const phoneNumber = '393337853150';
  const whatsappLink = `https://wa.me/${phoneNumber}`;

  onMounted(() => {
    document.addEventListener('click', handleClickOutside);
  });

  onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside);
  });
</script>

<style scoped>
footer {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 2rem;
  color: rgb(220, 220, 220);

  @media (max-width: 600px) {
    padding-bottom: 8rem;
  }

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

      p {
        cursor: default;
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

      .language-selector {
        position: relative;

        .language-dropdown {
          position: absolute;
          top: 25px;
          left: 0;
          background-color: #333;
          padding: 10px;
          border-radius: 5px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
          display: flex;
          flex-direction: column;
          gap: 10px;
          z-index: 10;
        }

        .language-dropdown p {
          cursor: pointer;
          padding: 5px;
          transition: color .2s linear;

          &:hover {
            color: #77f64b;
          }
        }
      }
    }
  }

  h5 {
    cursor: default;
    font-weight: 400;
    letter-spacing: 2px;
  }
}
</style>
