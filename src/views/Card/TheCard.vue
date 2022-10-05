<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<style scoped>
.card {
  border-radius: 0.5rem;
  box-shadow: 0 2px 8px rgba(143, 143, 143, 0.26);
  border: 1px white solid;
  margin: 1rem;
  padding: 1rem;
}
</style>
