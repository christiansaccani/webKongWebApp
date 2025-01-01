<template>
  <div id="AppFaq">
    <h2>{{ $t('faqTitle') }}</h2>

    <div
      v-for="(item, index) in faqList"
      :key="index"
      :class="['faq-item', { active: isActive(index) }]"
    >
      <div class="faq-question" @click="toggleAnswer(index)">
        <h5>{{ $t(item.question) }}</h5>
        <span>
          <i
            :class="isActive(index) ? 'fa-solid fa-minus' : 'fa-solid fa-plus'"
          ></i>
        </span>
      </div>

      <div class="faq-answer">
        <p>{{ $t(item.answer) }}</p>
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
        { question: 'QuestionOne', answer: 'AnswerOne' },
        { question: 'QuestionTwo', answer: 'AnswerTwo' },
        { question: 'QuestionThree', answer: 'AnswerThree' },
        { question: 'QuestionFour', answer: 'AnswerFour' },
        { question: 'QuestionFive', answer: 'AnswerFive' },
        { question: 'QuestionSix', answer: 'AnswerSix' },
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
#AppFaq {
  width: 100%;
  max-width: 1440px;
  color: rgb(220, 220, 220);
  margin-bottom: 2rem;
  padding: 0 2rem;
}

.faq-item {
  border-bottom: 2px solid #77f64b;
  padding: 1.5rem 0;
  letter-spacing: 1px;
  

  &.active .faq-answer {
    max-height: 200px;
    opacity: 1;
    transition: all 0.6s ease-in;
  }
}

.faq-question {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 1rem 0 0 1rem;
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
  cursor: pointer;
}
</style>
