<template>
  <div class="signin">

<subhero heroTitle="hej" heroSubtitle="hej"> </subhero>


<div class="signin-container">
    <form class="signin-form">
      <h3>SIGN IN</h3>
    
        <input v-validate="'required|email'" :class="{'input': true, 'is-danger': errors.has('sign in email') }" name="sign in email" type="text" placeholder="Your Email..">
        <span v-show="errors.has('sign in email')" class="help is-danger">{{ errors.first('sign in email') }}</span>  

      <input type="password" name="password" id="password" placeholder="Your Password..">
      <div class="btn-signin-pass">
        <button>SIGN IN</button>
        <p align="right" class="forgot-pass"><a href="#">Forgot your Password <i class="fas fa-long-arrow-alt-right"></i></a> </p>
      </div>
    </form>

<!-- <div class="vl"></div> -->

    <form class="signup-form">
    <!-- <form @submit.prevent="submitForm" nowlidate v-if="!isSubmitted" class="signup-form"> -->
      <h3>REGISTER</h3>
      
       <input v-validate="'required|email'" :class="{'input': true, 'is-danger': errors.has('registration email') }" name="registration email" type="text" placeholder="Your Email..">
       <span v-show="errors.has('registration email')" class="help is-danger">{{ errors.first('registration email') }}</span>


      <!-- <input type="password" name="signup-password" id="signup-password" placeholder="Your Password..">
      <input type="password" name="signup-password2" id="signup-password2" placeholder="Confirm Password.."> -->

      <input v-validate="'required'" name="password" type="password" class="form-control" placeholder="Password.." ref="password">
      <input v-validate="'required|confirmed:password'" name="password_confirmation" type="password" class="form-control" placeholder="Confirm Password.." data-vv-as="password">

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
  },
  data: function() {
    return {
      form: {
        email: ""
      },
      isSubmitted: false
    };
  },
  methods: {
    submitForm: function() {
      this.isSubmitted = true;
      this.form = null;
    }
  }
};
</script>

<style>
#mainNav {
  position: initial;
}
</style>
