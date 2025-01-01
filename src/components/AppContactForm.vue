

<template>
    <h2 id="AppFooter">contact us</h2>

    <div class="form-container">
      <form @submit.prevent="handleSubmit">
        <div class="form-row">
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" id="name" v-model="form.name" required />
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" v-model="form.email" required />
          </div>
        </div>
        <div class="form-group full-width">
          <label for="message">Message</label>
          <textarea id="message" v-model="form.message" rows="4" required></textarea>
        </div>
        <button type="submit">OPEN</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        form: {
          name: '',
          email: '',
          message: '',
        },
      };
    },
    methods: {
      handleSubmit() {
        console.log('Form inviato:', this.form);
        alert('Form inviato con successo!');
      },
    },
  };
  </script>
  
  <style scoped>
  .form-container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0rem 4rem 14rem;
    position: relative;
  }
  
  .form-row {
    display: flex;
    justify-content: center;
    gap: 4rem;
    margin-bottom: 2rem;
  }
  
  .form-group {
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: .75rem;
  }
  
  .full-width {
    width: 100%;
  }

  input {
    padding: .5rem;
    background-color: rgb(220, 220, 220);
    color: rgba(18, 18, 18);
    border-radius: 8px;
  }
  
  textarea {
    width: 100%;
    resize: none;
    padding: .5rem;
    background-color: rgb(220, 220, 220);
    color: rgba(18, 18, 18);
    border-radius: 8px;
  }
  
  button {
    transition: all .4s linear;
    margin-top: 4rem;
    padding: .5rem 4rem;
    background-color: rgba(18, 18, 18);
    color: #77f64b;
    border: 2px solid #77f64b;
    border-radius: 24px;
    cursor: pointer;
    
    position: absolute;
    right: 4rem;

    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 3px;
  }
  
  button:hover {
    background-color: #77f64b;
    color: rgba(18, 18, 18);
  }

  ::-webkit-scrollbar {
  display: none;
}
  </style>
  
  <!-- 
  DA FARE:
    Gestire l'Handle Submit in modo da aprire la mail di chi la vuole inviare già compilata (scopri se è possibile inviarlo direttamente da li in modo semplice) ;
        Adattamento a cellulare
            Traduzioni
  -->