<template>
    <div id="AppHead">
        <span style="text-transform: uppercase;" class="gradientText">Craft digital solutions<br>
        and conquer online spaces</span>
          <p><span>We know what's going on.</span> You need top designes to stand out, but hiring in-house designers can be costly and time-consuming.
          <br><span>That's when WebKong comes in.</span></p>
    </div>
</template>

<script setup>
//
</script>

<style lang="scss" scoped>
  div {
    margin-top: 90px;
    max-width: 1340px;
    width: 100vw;
    padding: 10rem 2rem 8rem;
    text-align: center;
    line-height: 5rem;
    letter-spacing: 5px;
    font-size: 1.8rem;
    font-weight: 400;
    color: rgb(220, 220, 220);

    @media (max-width: 1400px) {
      font-size: 1.5rem;
      padding: 6rem 2rem 8rem;
    }

    @media (max-width: 800px) {
      font-size: 1.2rem;
      padding: 4rem 2rem 6rem;
      line-height: 3.5rem;
    }
}

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  span {
    font-size: 3rem;
    opacity: 0;
    animation: fadeIn 1s forwards;

    @media (max-width: 1400px) {
      font-size: 2.8rem;
    }

    @media (max-width: 800px) {
      font-size: 1.6rem;
    }

    span {
      letter-spacing: 5px;
    }
  }

  p {
    margin-top: 1rem;
    opacity: 0;
    animation: fadeIn 1s 1s forwards;
    color: #726e6e;
    line-height: 4rem;

    @media (max-width: 1400px) {
        font-size: 1.5rem;
        line-height: 2.8rem;
      }

      @media (max-width: 1000px) {
        font-size: 1rem;
      }

    span {
      font-size: 1.8rem;
      color: rgb(220, 220, 220);

      @media (max-width: 1400px) {
        font-size: 1.5rem;
      }

      @media (max-width: 1000px) {
        font-size: 1rem;
      }
    }
  }

  .gradientText {
    background: linear-gradient(to top, black, #77f64b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 600;
  }
</style>
