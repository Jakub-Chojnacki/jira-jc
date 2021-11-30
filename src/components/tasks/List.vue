<template>
  <tr>
      <th>Something</th>
      <th>Task</th>
      <th>Assignee</th>
      <th>Due date</th>
      <th>Priority</th>
   </tr>
  <ListItem/>
</template>

<script>
import ListItem from './ListItem.vue'
export default {
components: {ListItem}
}
</script>

<style>

</style>