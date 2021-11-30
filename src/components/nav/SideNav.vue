<template>
  <div class="side-nav">
      <h2 class="side-nav__project-name">Project Name</h2>
      <ul class="side-nav__list">
        <li class="side-nav__list-item">
           <router-link to="/" class="side-nav__list-link"> <fa icon="users"></fa> Team</router-link>
        </li>
        <li class="side-nav__list-item">
            <router-link to="/" class="side-nav__list-link"><fa icon="database"></fa> Backlog</router-link>
        </li>
        <li class="side-nav__list-item">
              <router-link to="/" class="side-nav__list-link"><fa icon="columns"></fa> Board view</router-link>
        </li>
        <li class="side-nav__list-item">
           <router-link to="/" class="side-nav__list-link"><fa icon="list"></fa> List view</router-link>
        </li>
        <li class="side-nav__list-item">
             <router-link to="/" class="side-nav__list-link"><fa icon="cog"></fa> Project Settings</router-link>
        </li>

      </ul>  
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped >
.side-nav{
    min-width:180px;
    background-color:#FAFBFC;
    padding: 1em;
    display:flex;
    flex-direction: column;
    align-items: flex-start;
    

     &__list{
       list-style:none;
       padding: 1em;
       display: flex;
       flex-direction: column;
       align-items: flex-start;
      

       &-item{
         justify-content: space-between;
         padding: 1em 0;
         font-size: 1.2rem;
         
       }

       &-link {
           text-decoration: none;
           color:black;
         svg{
           margin-right: 0.5em;
           
         }
       }
     }

}

</style>