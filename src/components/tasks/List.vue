<template>
  <div class="list__row list__header">
      <div class="list__cell">Id</div>
      <div class="list__cell">Task</div>
      <div class="list__cell">Assignee</div>
      <div class="list__cell">Due Date</div>
      <div class="list__cell">Priority</div>
  </div>
   
  <ListItem/>
  <ListItem/>
  <ListItem/>
  
</template>

<script>
import ListItem from './ListItem.vue'
export default {
components: {ListItem}
}
</script>

<style lang="scss">
.wrapper {
  margin: 0 auto;
  padding: 40px;
  max-width: 800px;
}
.list {
  margin: 0 0 40px 0;
  box-shadow: 0 1px 3px rgba(0,0,0,0.2);
  width: 100%;
  display:table;

 

  &__row{
     display: table-row;
     background: #f6f6f6;

    &:nth-of-type(even){
      background: #e9e9e9;
    }

    
  }
   &__header{
      font-weight: 900;
      background: #2980b9;
      color: white;
    }
  &__cell{
  padding: 6px 12px;
  display: table-cell;
}
}






</style>