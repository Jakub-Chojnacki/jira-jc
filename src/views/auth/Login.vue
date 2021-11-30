<template>

    <div class="login">
       
        <h2>Login</h2>
        <form @submit.prevent="handleSubmit">
            <input type="email" placeholder="Email" v-model="email"> 
            <input type="password" placeholder="Password" v-model="password">
            <div v-if="error" class="error">{{error}}</div>
            <button class="button--blue" v-if="!isPending">Log in</button>
            <button class="button--blue" v-if="isPending" disabled>Loading...</button>
            <div>Don't have an account yet? </div>
            <router-link to="/signup" class="form-link">Sign up</router-link>
    </form>
   </div>
</template>

<script>

</script>

<style scoped >
.login{
         display: flex;
         flex-direction: column;
         justify-content: center;
         align-items: center;   
         height: 100vh;
         width: 100%;    
    }
.form-link { 
    color: #3182CE;
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
label{
    font-weight: bold;
    margin-bottom: 0.2em;
    align-self: flex-start;
}


</style>