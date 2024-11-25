<template>

  <h2 id="AppCardsContainer">COLLAB REAL TIME</h2>

  <p>Ready to meet your evolving needs.</p>

  <div id="teamContainer">
    <div class="teamMember">
      <img src="../assets/CSuser.jpg" alt="Christian's Pic">
    </div>
    <div class="teamMember">
      <img src="../assets/EEsuser.jpg" alt="Elisabeth's Pic">
    </div>
    <div class="teamMember"></div>
  </div>

</template>

<script>
</script>

<style lang="scss" scoped>
h2 {
  padding-bottom: 2rem;
}

p {
  font-size: 1.8rem !important;
  padding-bottom: 4rem;
  letter-spacing: 3px;
  color: #726e6e;
  ;

}

#teamContainer {
  display: flex;
  gap: .5rem;
  margin-bottom: 10rem;

  .teamMember {
    width: 180px;
    height: 180px;
    border-radius: 50%;
    border: 2px solid whitesmoke;
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        scale: 1.3;
    }
  }
}
</style>