<template>
  <div class="about-container">
    <h1>About Us</h1>
    <div class="about-content">
      <section class="mission">
        <h2>Our Mission</h2>
        <p>
          We are dedicated to creating innovative web solutions that help businesses
          and individuals achieve their digital goals. Our team combines creativity
          with technical expertise to deliver outstanding results.
        </p>
      </section>

      <section class="team">
        <h2>Our Team</h2>
        <p>
          Our diverse team of professionals brings together years of experience in
          web development, design, and digital strategy. We're passionate about
          what we do and committed to excellence.
        </p>
      </section>

      <section class="values">
        <h2>Our Values</h2>
        <ul>
          <li>Innovation</li>
          <li>Quality</li>
          <li>Collaboration</li>
          <li>Integrity</li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutView'
}
</script>

<style scoped>
.about-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

h1 {
  color: #2c3e50;
  text-align: center;
  margin-bottom: 2rem;
}

.about-content {
  display: grid;
  gap: 2rem;
}

section {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h2 {
  color: #42b983;
  margin-bottom: 1rem;
}

p {
  line-height: 1.6;
  color: #4a4a4a;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  padding: 0.5rem 0;
  color: #4a4a4a;
}

@media (min-width: 768px) {
  .about-content {
    grid-template-columns: repeat(2, 1fr);
  }

  .mission {
    grid-column: 1 / -1;
  }
}
</style>