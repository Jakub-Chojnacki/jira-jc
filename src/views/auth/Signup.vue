<template>

 <div class="signup">
     
         <h2>Sign up</h2>
    <form @submit.prevent="handleSubmit">
       
        <input type="text" placeholder="Full Name" v-model="fullName">
      
        <input type="email" placeholder="Email" v-model="email"> 
        
        <input type="password" placeholder="Password" v-model="password">
            <div v-if="error" class="error">{{error}}</div>
            <button class="button--blue" v-if="!isPending">Sign up</button>
        <button class="button--blue" v-if="isPending" disabled>Loading...</button> 
        <p class="success" v-if="success">You've successfully created an account </p>
        <div v-if="!success">Already got an account? </div>
        <router-link to="/login" class="form-link">Log in</router-link>
    </form>
  </div>
</template>

<script>

</script>

<style scoped>

    .signup{
         display: flex;
         flex-direction: column;
         justify-content: center;
         align-items: center;
         height: 100vh;
         width: 100%;
          
    }

    form {
        
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    padding: 4em;
    margin-top: 2em;
    width: 400px;
}

input{
    margin-bottom: 2em;
    padding: 0.5em 1em;
    max-width: 250px;
}

    

</style>