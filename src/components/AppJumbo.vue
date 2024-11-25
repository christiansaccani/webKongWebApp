<template>
    <div id="AppHead">
        <span style="text-transform: uppercase;" class="gradientText">Craft digital solutions<br>
        and conquer online spaces</span>
        <!-- <p>Trasformiamo le tue idee in realtà digitali, creando siti web, identità visive e strategie che fanno la differenza. Con noi, il tuo business sarà sempre un passo avanti.</p> -->
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
    padding: 10rem 2rem 8rem;
    text-align: center;
    line-height: 5rem;
    letter-spacing: 5px;
    font-size: 1.8rem;
    font-weight: 400;
    color: rgb(220, 220, 220);
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

    span {
      font-size: 1.8rem;
      color: rgb(220, 220, 220);
    }
  }

  .gradientText {
    background: linear-gradient(to top, black, #77f64b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 600;
  }
</style>
