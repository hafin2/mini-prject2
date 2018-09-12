<template>
    <div class="json">
        <ul>
            <li v-for="product in products" :key="product.id">
                {{ product.title }} 
                <!-- {{ photo.thumbnailUrl }} -->
                <router-link to="/product/${product.id}">view</router-link>
                <img :src="product.img"> 
            </li>
        </ul>
    </div>
</template>


<script>
import axios from "axios";

export default {
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
          //   .get("https://jsonplaceholder.typicode.com/posts")
            .get("/json/products.json")
          //   .get("https://api.myjson.com/bins/1gydyo")
            .then(response => (this.products = response.data));
    }
  }
}
</script>




