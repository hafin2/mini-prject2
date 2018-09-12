<template>
    <div class="hero">
        <img src="../assets/img/brand-hero.png" alt="">
    <div class="title">
        <h1>{{ heroTitle }}</h1>
        <h2>{{ heroSubtitle }}</h2>
    </div>
    </div>
</template>

<script>
export default {
  name: "subhero",
  
  props: {
    heroTitle: String,
    heroSubtitle: String
  }
};
</script>
