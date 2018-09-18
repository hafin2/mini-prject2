<template>
  <div class="home">

    <Hero/>
<div class="max-width">
    <div class="tabs">
        <hr>
        <ul>
            <li><a href="#">POPULAR</a></li>
            <li><a href="#">NEW ARRIVALS</a></li>
            <li><a href="#">BEST SELLERS</a></li>
            <li><a href="#">SPECIAL OFFERS</a></li>
            <li><a href="#">COMMING SOON</a></li>
        </ul>
    </div>


    <div class="products">
        <div v-for="product in products" :key="product.id" class="item item5 product">
            <router-link :to="`/product/${product.id}`"><img :src="product.img"> </router-link>
            <div class="product-hover">
                <p>{{ product.description1 }}</p>
                <p>{{ product.description2 }}<br> {{ product.description3 }}</p>
                <div class="hover-icons">
                    <div class="cirle-icon"> <i class="fa fa-shopping-cart"></i></div>
                    <div class="cirle-icon"> <i class="far fa-heart"></i></div>
                    <div class="cirle-icon"> <i class="fa fa-shopping-cart"></i></div>
                </div>
            </div>
        </div>
        <hr>
    </div>

    <div class="lookBook">
        <div class="mens">
            <img src="../assets/img/lookbooktest.png" alt="">
            <div class="lookbook-text">
                <h2>MEN'S</h2>
                <h2>LOOKBOOK</h2>
                <P> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam natus perspiciatis aliquam obcaecati dolor quis sint rerum. Lorem ipsum dolor sit amet consectetur adipisicing elit.</P>
                <button class="btn-lookbook">VIEW NOW</button>
            </div>
        </div>
        <div class="womens">
            <img src="../assets/img/lookbooktest.png" alt="">
            <div class="lookbook-text">
            <h2>WOMEN'S</h2>
            <H2>LOOKBOOK</H2>
            <P> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam natus perspiciatis aliquam obcaecati dolor quis sint rerum.</P>
            <button class="btn-lookbook">VIEW NOW</button>
        </div>
        </div>
        <div class="your">
            <img src="../assets/img/lookbooktest.png" alt="">
            <div class="lookbook-text">
            <h2>YOUR</h2>
            <H2>LOOKBOOK</H2>
            <P> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam natus perspiciatis aliquam obcaecati dolor quis sint rerum.</P>
            <button class="btn-lookbook">VIEW NOW</button>
        </div>
        </div>
    </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Hero from "@/components/Hero.vue"
import axios from 'axios';

export default {
  name: "home",
  components: {
    Hero
  },
  data() {
    return {
      products: null
    };
  },
  mounted() {
    this.getData(); 
  },
  methods: {
    getData() {
      axios
            .get("/json/products.json")
            .then(response => (this.products = response.data.products));
    }
  }
};
</script>
