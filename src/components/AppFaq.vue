<template>
  <div class="faq-container">
    <h2>DOMANDE FREQUENTI</h2>

    <div
      v-for="(item, index) in faqList"
      :key="index"
      :class="['faq-item', { active: isActive(index) }]"
    >
      <div class="faq-question" @click="toggleAnswer(index)">
        <h5>{{ item.question }}</h5>
        <span>
          <i
            :class="isActive(index) ? 'fa-solid fa-minus' : 'fa-solid fa-plus'"
          ></i>
        </span>
      </div>

      <div class="faq-answer">
        <p>{{ item.answer }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: null,
      faqList: [
        {
          question: "Che tipo di siti realizzate?",
          answer:
            "Creiamo landing page, siti vetrina, e-commerce e soluzioni personalizzate per ristoranti, startup tech e piccole imprese. Ottimizzati su tutti i dispositivi.",
        },
        {
          question: "Quanto tempo richiederà lo sviluppo del sito?",
          answer:
            "Dipende dalla grandezza del sito, ma per un sito vetrina cerchiamo di fornire una versione finale entro una settimana dalla data di inizio.",
        },
        {
          question: "Posso richiedere modifiche durante la creazione?",
          answer:
            "Sì, potrete contattarci in qualsiasi momento per discutere di modifiche o aggiunte, anche last minute.",
        },
        {
          question: "Avrò il pieno controllo del sito una volta completato?",
          answer:
            "Sì, avrete la proprietà del codice, del design e del dominio. Su richiesta potremo mostrarvi anche come modificarlo autonomamente.",
        },
        {
          question: "Offrite supporto continuo?",
          answer:
            "Sì, offriamo supporto e manutenzione continua per garantire che il tuo progetto sia sempre aggiornato.",
        },
      ],
    };
  },
  methods: {
    toggleAnswer(index) {
      this.activeIndex = this.activeIndex === index ? null : index;
    },
    isActive(index) {
      return this.activeIndex === index;
    },
  },
};
</script>

<style lang="scss" scoped>
.faq-container {
  width: 100%;
  max-width: 1440px;
  color: white;
  margin: 0 2rem 8rem;
}

.faq-item {
  border-bottom: 2px solid #77f64b;
  padding: 1.5rem 0;
  letter-spacing: 1px;

  &.active .faq-answer {
    max-height: 200px; /* Altezza massima visibile */
    opacity: 1;
    transition: all 0.6s ease-in;
  }
}

.faq-question {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding-top: 10px;
  border-radius: 5px;
  padding-left: 1rem;
}

.faq-answer {
  opacity: 0;
  max-height: 0;
  padding-top: 1rem;
  overflow: hidden;
  transition: all 0.2s ease-out;
}

.faq-answer p {
padding-left: 1rem;
  margin: 0;
  font-size: 1rem;
}

h5 {
  font-size: 1.2rem;
}
</style>
