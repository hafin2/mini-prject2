<template>
  <div id="app">

    <nav id="miniNav">

        <ul class="miniNav">
          
            <select class="currency">
              <option value="GBP">GBP</option>
              <option value="DKK">DKK</option>
              <option value="EUR">EUR</option>
              <option value="USD">USD</option>
            </select>


            <li><router-link to="/signin">Sign In</router-link></li>
            <li><router-link to="/signin">Register</router-link></li>
        </ul>
        <div class="shopping-cart">  <a href="#"><i class="fa fa-shopping-cart"></i> empty <i class="fas fa-angle-down"></i></a></div>
            
    </nav>
    <nav id="mainNav">
        <router-link class="logo" to="/"> <img src="./assets/img/logo.png" alt="logo"> </router-link>
        <ul class="mainNav">
            <li>
                <a href="#">LOOK BOOK</a>
            </li>
            <li>
                <a href="#"> LOCAL STORES</a>
            </li>
            <li>
                 <router-link to="/brand">THE BRAND</router-link>
            </li>
            <li>
                <a href="#">WOMENS</a>
            </li>
            <li class="trigger-max-menu">
                <a href="#">MENS <i class="fas fa-angle-down"></i></a>
                
                <div class="max-menu">
                    <div class="menu-left">
                        <p>CASUALS</p>
                        <a href="#">Jackets</a>
                        <a href="#">Hoodies &amp; Sweatshirts</a>
                        <a href="#">Polo Shirts</a>
                        <a href="#">Sportswear</a>
                        <a href="#">Trousers &amp; Chinos</a>
                        <a href="#">T-Shirts</a>
                    </div>
                    <div class="menu-right">
                        <p>FORMAL</p>
                        <a href="#">Jackets</a>
                        <a href="#">Shirts</a>
                        <a href="#">Suits</a>
                        <a href="#">Trousers</a>
                    </div>
                    <div class="menu-banner">
                        <h1>AUTUMN SALE!</h1>
                        <h1>UP TO 50% OFF</h1>
                    </div>
                </div>
            </li>
        </ul>
        <input class="search-bar" type="text" placeholder="Search.." name="search">

    </nav>
    <div class="burger">
      <Slide>
      <router-link to="/">HOME</router-link>
      <router-link to="/brand">THE BRAND</router-link> 
      <router-link to="/signin">SIGN IN</router-link> 
      <router-link to="/signin">SIGN UP</router-link> 
    </Slide>
    </div>
    <router-view/>
    <footer>
        <div class="footerLinks">
            <ul>
                <h5>INFORMATION</h5>
                <li class="item1"><router-link to="/brand">The brand</router-link></li>
                <li class="item1"> <a href="#"> Local stores </a> </li>
                <li class="item1"> <a href="#"> Customer serivce </a> </li>
                <li class="item1"> <a href="#"> Privacy &amp; cookies</a> </li>
                <li class="item1"> <a href="#"> Site map </a> </li>
            </ul>
            <ul>
                <h5>WHY BUY FROM US</h5>
                <li class="item1"> <a href="#"> Shipping &amp; returns</a> </li>
                <li class="item1"> <a href="#"> Secure shopping </a> </li>
                <li class="item1"> <a href="#"> Testimonials </a> </li>
                <li class="item1"> <router-link to="/brand"> Award winning </router-link> </li>
                <li class="item1"> <router-link to="/brand"> Ethical trading </router-link> </li>
            </ul>
            <ul>
                <h5>YOUR ACCOUNT</h5>
                <li class="item1"> <router-link to="/signin">Sign in</router-link> </li>
                <li class="item1"> <router-link to="/signin">Register</router-link> </li>
                <li class="item1"> <a href="#"> View cart </a> </li>
                <li class="item1"> <a href="#"> View your lookbook </a> </li>
                <li class="item1"> <a href="#"> Track an order </a> </li>
                <li class="item1"> <a href="#"> Update information </a> </li>
            </ul>
            <ul>
                <h5>LOOKBOOK</h5>
                <li class="item1"> <a href="#"> Latest posts </a> </li>
                <li class="item1"> <a href="#"> Men's lookbook </a> </li>
                <li class="item1"> <a href="#"> Women's lookbook </a> </li>
                <li class="item1"> <a href="#"> Lookbook RSS feed </a> </li>
                <li class="item1"> <a href="#"> View your lookbook </a> </li>
                <li class="item1"> <a href="#"> Delete your lookbook </a> </li>
            </ul>
            <ul>
                <h5>CONTACT DETAILS</h5>
                <li class="item1"> <a href="#"> Head Office: Avenue Fashion, <br> 180-182 Regent Street, London. </a> </li>
                <br>
                <li class="item1"> <a href="#"> Telephone: 0123-456-789 </a> </li>
                <li class="item1"> <a href="#"> Email: support@yourwebsite.com </a> </li>

            </ul>
        </div>
        <div class="award">
            <!-- Skift ud med content -->
            <h1>AWARD WINNER</h1>
            <p>FASHION AWARDS 2016</p>
        </div>
        <div class="social">
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-instagram"></i> </a>
            <a href="#"><i class="fab fa-pinterest"></i></a>
        </div>
        
    </footer>
    <footer class="bottomBar">
            <p class="copyright">© 2016 Avenue Fashion™</p>
            <p class="author">RobbyDesigns.com</p>
            <p class="site">Dev by Loremipsum.com™</p>
    </footer>
  </div>
</template>


<script>
import { Slide } from 'vue-burger-menu';

export default {
    components: {
        Slide
    }
}
</script>

<style lang="scss">
@import "./assets/scss/style.scss";
</style>
