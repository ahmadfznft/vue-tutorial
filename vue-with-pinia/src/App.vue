<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="main-header">
    <div class="wrapper">
      <nav class="main-nav">
        <RouterLink to="/" class="nav-link">Home</RouterLink>
        <RouterLink to="/about" class="nav-link">About</RouterLink>
        <RouterLink to="/todolist" class="nav-link">Todo List</RouterLink>
      </nav>
    </div>
  </header>

  <main>
    <RouterView />
  </main>
</template>

<style scoped>
:root {
  --color-primary: #007bff; 
  --color-secondary: #343a40; 
  --color-text-light: #ffffff; 
  --color-border: #dee2e6;
  --section-gap: 2rem;
}

.main-header {
  padding: 1rem;
  background-color: var(--color-secondary);
  color: var(--color-text-light); 
}

.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

.main-nav {
  display: flex;
  gap: 1.5rem;
}

.nav-link {
  color: var(--color-text-light);
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.nav-link.router-link-exact-active {
  background-color: var(--color-primary); 
  color: var(--color-text-light);
}


.nav-link:hover {
  background-color: var(--color-primary);
  color: var(--color-text-light);
}

@media (min-width: 1024px) {
  .main-header {
    padding: 1rem 2rem;
  }

  .main-nav {
    gap: 2rem;
    font-size: 1rem;
  }
}

@media (max-width: 768px) {
  .main-header {
    text-align: center;
  }

  .main-nav {
    flex-direction: column;
    gap: 1rem;
  }
}
</style>
