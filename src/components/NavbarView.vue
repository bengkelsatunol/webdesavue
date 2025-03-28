<template>
    <nav class="navbar">
      <div class="navbar-brand">
        <router-link to="/" class="logo">Logo</router-link>
      </div>
      
      <div class="navbar-menu" :class="{ 'is-active': isMenuOpen }">
        <router-link to="/" class="nav-link">Home</router-link>
        <router-link to="/about" class="nav-link">About</router-link>
        <router-link to="/services" class="nav-link">Services</router-link>
        <router-link to="/contact" class="nav-link">Contact</router-link>
      </div>
  
      <button class="hamburger" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'NavbarView',
    data() {
      return {
        isMenuOpen: false
      }
    },
    methods: {
      toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen
      }
    }
  }
  </script>
  
  <style scoped>
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: #ffffff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .navbar-brand {
    font-size: 1.5rem;
    font-weight: bold;
  }
  
  .logo {
    text-decoration: none;
    color: #333;
  }
  
  .navbar-menu {
    display: flex;
    gap: 2rem;
  }
  
  .nav-link {
    text-decoration: none;
    color: #333;
    font-weight: 500;
    transition: color 0.3s ease;
  }
  
  .nav-link:hover {
    color: #42b983;
  }
  
  .hamburger {
    display: none;
    flex-direction: column;
    gap: 6px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 5px;
  }
  
  .hamburger span {
    display: block;
    width: 25px;
    height: 2px;
    background-color: #333;
    transition: all 0.3s ease;
  }
  
  @media (max-width: 768px) {
    .hamburger {
      display: flex;
    }
  
    .navbar-menu {
      display: none;
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      flex-direction: column;
      background-color: #ffffff;
      padding: 1rem;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
  
    .navbar-menu.is-active {
      display: flex;
    }
  }
  </style>
  