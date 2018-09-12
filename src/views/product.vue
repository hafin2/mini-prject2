<template>
  <div class="product">
        
        <subhero heroTitle="hej" heroSubtitle="hej"> </subhero>

        <div class="product-details">
            <div v-if="product" class="carousel product-left">
                <img :src="product.img">
                <p> {{ product.title }} </p>
                <!-- <carousel>
                    <slide>
                        Slide 1 Content
                    </slide>
                    <slide>
                        Slide 2 Content
                    </slide>
                </carousel> -->
            </div>
            <div class="product-right">
                <h2>AVE CLASSIC SHIRT</h2>
                    <div class="review-share">
                        <div class="stars">
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span>
                            <p>3 Reviews</p>
                            <a href="#">Add a Review</a>
                        </div>
                        <div class="share">
                            <a href="#"><i class="fab fa-facebook-f"></i></a>
                            <a href="#"><i class="fab fa-twitter"></i></a>
                            <a href="#"><i class="fab fa-instagram"></i> </a>
                            <a href="#"><i class="fab fa-pinterest"></i></a>
                        </div>
                    </div>
                    <div class="price">
                        <h2 class="strike"><STRIKE>&#163;107</STRIKE></h2>
                        <h2>&#163;89.99</h2>
                    </div>
                    <ul class="prod-info">
                        <li><b>AVAILABILITY:</b> In stock</li>
                        <li><b>PRODUCT CODE:</b> #499577</li>
                        <li><b>TAGS:</b> Classic, Casual, Loose</li>
                    </ul>
                    <p class="product-description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio exercitationem tempora dolorem, beatae minima laboriosam excepturi blanditiis quos nesciunt, amet iure quidem dolorum error dicta quaerat suscipit, quam quia sunt.
                    </p>
                    <ul class="">
                        <li>Casuasl fit</li>
                        <li>100% cotton</li>
                        <li>Free shipping with 4 days delivery</li>
                    </ul>
                    <div class="selectors">
                        <select class="COLOUR">
                            <option value="Black">Black</option>
                            <option value="Blue">Blue</option>
                            <option value="Green">Green</option>
                        </select>
                        <select class="SIZE">
                            <option value="Small">Small</option>
                            <option value="Medium">Medium</option>
                            <option value="Large">Large</option>
                        </select>
                        <input type="number" name="quantity" min="1">
                    </div>
                    <div class="add-btn">
                        <button class="btn-add-cart"><i class="fa fa-shopping-cart"></i>ADD TO CART</button>
                        <button class="btn-add-lookbook"><i class="far fa-heart"></i>ADD TO LOOKBOOK</button>
                    </div>
                    <div class="compare">
                        <!-- <img src="../assets/img/" alt=""> -->
                        <a href="#">ADD TO COMPARE</a>
                    </div>
            </div>
        </div>
        <div class="products-tabs">

        </div>

  </div>
</template>

<script>
import subhero from "@/components/subhero.vue";
import axios from "axios";

export default {
  name: "signin",
  components: {
    subhero
  },
  data() {
      return {
          product: null
      };
  },
  mounted() {
      this.getProductById();
  },
  methods: {
      getProductById(){
          let productId = this.$route.params.id;
          console.log(typeof productId);
          axios
            .get("/json/products.json")
            .then(response => {
                this.product = response.data.products.find(p => p.id === productId);
                console.log(this.product);
            })
            .catch(error => console.log(error));
      }
  }
}
</script>