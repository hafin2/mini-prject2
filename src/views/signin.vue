<template>
  <div class="signin">

<subhero heroTitle="WELCOME" heroSubtitle="SIGN IN OR REGISTER"> </subhero>


<div class="signin-container">
    <form class="signin-form">
      <h3>SIGN IN</h3>
    
        <input v-validate="'required|email'" name="sign in email" type="text" placeholder="Your Email..">
        <span v-show="errors.has('sign in email')">{{ errors.first('sign in email') }}</span>  

      <input type="password" name="password" id="password" placeholder="Your Password..">
      <div class="btn-signin-pass">
        <button type="submit" :disabled="errors.any()">SIGN IN</button>
        <p align="right" class="forgot-pass"><a href="#">Forgot your Password <i class="fas fa-long-arrow-alt-right"></i></a> </p>
      </div>
    </form>

    <form class="signup-form">
      <h3>REGISTER</h3>
      
       <input v-validate="'required|email'" name="registration email" type="text" placeholder="Your Email..">
       <span v-show="errors.has('registration email')">{{ errors.first('registration email') }}</span>

      <input v-validate="'required'" name="password" type="password" placeholder="Password.." ref="password">
      <input v-validate="'required|confirmed:password'" name="password_confirmation" type="password" placeholder="Confirm Password.." data-vv-as="password">

      <div v-show="errors.any()">
          <div v-if="errors.has('password')">
            {{ errors.first('password') }}
          </div>
          <div v-if="errors.has('password_confirmation')">
            {{ errors.first('password_confirmation') }}
          </div>
      </div>

      <label class="label-container"> <p>Sign up for exclusive updates, discounts, new arrivals, contests, and more!</p> 
        <input type="checkbox">
        <span class="checkmark"></span>
      </label>

    <div class="btn-policy">
      <button type="submit" :disabled="errors.any()">CREATE ACCOUNT</button>
      <p align="right" class="policy">By clicking ‘Create Account’, you <br> agree to our <a href="#">Privacy Policy <i class="fas fa-long-arrow-alt-right"></i></a> </p>
      </div>
    </form>

  </div>
</div>
</template>

<script>
import subhero from "@/components/subhero.vue";

export default {
  name: "signin",
  components: {
    subhero
  }
};
</script>

<style>
#mainNav {
  position: initial;
}
</style>
