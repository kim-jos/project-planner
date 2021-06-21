<template>
  <nav class="filter-nav">
    <div class="buttons">
      <button 
        @click="updateFilter('all')" 
        :class="{active: currFilterState === 'all'}"
      >View All</button>

      <button 
        @click="updateFilter('completed')"
        :class="{active: currFilterState === 'completed'}"
      >Completed</button>

      <button 
        @click="updateFilter('ongoing')"
        :class="{active: currFilterState === 'ongoing'}"
      >Ongoing</button>
    </div>
    
    <div>
      <router-link :to="{ name: 'AddProject'}">
        <span class="material-icons">add</span>
      </router-link>
    </div>
  </nav>

</template>

<script>
export default {
  props: ['currFilterState'],
  setup(props, context) {
    let updateFilter = (state) => {
      context.emit('filterChange', state);
    }

    return { updateFilter }
  }
}
</script>

<style>
.filter-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;   
}
.filter-nav button {
  background: none;
  border: none;
  color: #bbb;
  outline: none;
  font-size: 12px;
  text-transform: uppercase;
  margin-right: 10px;
  letter-spacing: 1px;
  font-weight: bold;
  cursor: pointer;
}

.filter-nav button.active {
  color: #555;
}
</style>