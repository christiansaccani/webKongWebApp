<template>

  <h2 id="AppAboutUs">{{ $t('appAboutUsTitle') }}</h2>

  <p>{{ $t('appAboutUsIntro') }}</p>

  <div id="teamContainer">
    <div class="teamMember">
      <img src="../assets/CSuser.jpg" alt="Christian's Pic">
    </div>
    <div class="teamMember">
      <img src="../assets/EEsUser.jpg" alt="Elisabeth's Pic">
    </div>
  </div>

</template>

<script>
</script>

<style lang="scss" scoped>
h2 {
  padding-bottom: 2rem;
}

p {
  max-width: 100vw;
  font-size: 1.8rem !important;
  padding: 0 .5rem 4rem;
  letter-spacing: 3px;
  color: #726e6e;
  text-align: center;
  
  @media (max-width: 800px) {
    font-size: 1.5rem !important;
  }
  @media (max-width: 400px) {
    font-size: 1.3rem !important;
  }

}

#teamContainer {
  display: flex;
  gap: .5rem;
  margin-bottom: 10rem;

  @media (max-width: 800px) {
    margin-bottom: 8rem;
    }

  .teamMember {
    width: 180px;
    height: 180px;
    border-radius: 50%;
    border: 2px solid rgb(220, 220, 220);
    overflow: hidden;

    @media (max-width: 800px) {
      width: 110px;
      height: 110px;
    }

    @media (max-width: 400px) {
      width: 80px;
      height: 80px;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        scale: 1.3;
    }
  }
}
</style>