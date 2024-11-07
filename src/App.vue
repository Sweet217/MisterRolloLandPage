<template>
  <div class="font-sans scroll-smooth">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" rel="stylesheet">
    <!-- Navbar -->
    <header class="bg-white shadow-md py-4 sticky top-0 z-10 animate-fadeIn">
      <nav class="container mx-auto flex justify-between items-center">
        <div class="w-[10%] md:w-[5%]">
          <img src="./assets/rollo.jpg" alt="Imagen de cookies" class="rounded-lg max-h-40 object-cover w-full">
        </div>
        <div class="space-x-6 hidden md:flex">
          <a href="#sobre-nosotros" class="menu-button hover:text-[#fe5957]" v-smooth-scroll>Sobre Nosotros</a>
          <a href="#menu" class="menu-button hover:text-[#fe5957]" v-smooth-scroll>Menú</a>
          <a href="#contacto" class="menu-button hover:text-[#fe5957]" v-smooth-scroll>Contacto</a>
        </div>
      </nav>
    </header>


    <!-- Hero Banner -->
    <section class="banner-4 text-white py-20 text-center relative animate-fadeIn">
      <h1 class="text-5xl font-extrabold bg-gradient-to-r from-white to-red-600 bg-clip-text text-transparent animate-text">Bienvenidos a Mister Rollo</h1>
      <h1 class="text-1xl font-bold bg-gradient-to-r from-white to-red-600 mt-4 animate-text">Los originales desde hace 10 años.</h1>
      <a href="#menu" class="mt-8 inline-block py-3 px-8 bg-secondary rounded-full text-lg font-semibold text-white hover:bg-primary transition-all">Explorar el Menú</a>
    </section>

        <!-- Sobre Nosotros -->
  <section id="sobre-nosotros" class="banner-4 py-20 animate-fadeIn">
    <div class="container mx-auto flex items-center justify-between space-x-10">
      <!-- Text on the left -->
      <div class="w-full md:w-1/2 p-8">
        <h2 class="text-4xl font-bold text-gray-800">Sobre Nosotros</h2>
        <p class="mt-4 text-4xl font-bold text-gray-800 leading-tight tracking-tight">
          MISTER ROLLO es una empresa 100% mexicana que enaltece los sabores y gastronomía de nuestro país con el objetivo de ofrecer productos alimenticios con un valor agregado para el consumidor y socio comercial, mediante la innovación en los procesos de suministro, producción y distribución, logrando así un crecimiento a largo plazo con el asociado.
        </p>          
        <!-- "Mira el video" Button -->
        <button @click="openModal" class="mt-6 px-6 py-2 bg-primary text-white font-semibold rounded-md">
          Mira el video
        </button>
      </div>
      <!-- Image on the right -->
      <div class="w-[60%] md:w-[30%] bg-white bg-opacity-30 p-0 rounded-full overflow-hidden flex justify-center items-center">
        <img src="./assets/sobrenosotros.png" alt="Sobre Nosotros Image" class="w-full h-full rounded-full object-cover transform rotate-90">
      </div>                
    </div>

    <!-- Video Modal -->
    <div v-if="showModal" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
      <div class="bg-white rounded-lg overflow-hidden max-w-2xl w-full relative">
        <!-- Modal Header with Logo and Close Button -->
        <div class="flex items-center justify-between p-4 border-b border-gray-200">
          <!-- Logo -->
          <div class="w-12 h-12">
            <img src="./assets/rollo.jpg" alt="Logo" class="rounded-full object-cover w-full h-full">
          </div>
          <!-- Close Button -->
          <button @click="closeModal" class="text-gray-700 hover:text-red-500 text-3xl font-bold">&times;</button>
        </div>
        <!-- Modal Content (Video) -->
        <div class="p-4">
          <iframe :src="videoUrl" width="100%" height="315" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  </section>

    <!-- Menú -->
    <section id="menu" class="bg-secondary text-white py-20 animate-fadeIn">
      <div class="container mx-auto text-center">
        <h2 class="text-4xl font-bold">Nuestro Menú</h2>
        <div class="mt-10 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div class="card p-6 text-left bg-white rounded-2xl shadow-md">
            <h3 class="text-2xl font-semibold text-primary mb-4">Roles</h3>
            <p class="text-darkGray mb-4">Una variedad de sabores y tamaños para todos los gustos.</p>
            <img src="./assets/roles-removebg-preview (1).png" alt="Imagen de roles dulces" class="rounded-lg max-h-48 object-contain w-full">
          </div>
          <div class="card p-6 text-left bg-white rounded-2xl shadow-md">
            <h3 class="text-2xl font-semibold text-primary mb-4">Rollos de Pizza</h3>
            <p class="text-darkGray mb-4">Los originales rollos de Pizza de diferentes tamaños y deliciosos sabores.</p>
            <img src="./assets/roles_pizza-removebg-preview (1).png" alt="Imagen de pizza" class="rounded-lg max-h-48 object-contain w-full">
          </div>
          <div class="card p-6 text-left bg-white rounded-2xl shadow-md">
            <h3 class="text-2xl font-semibold text-primary mb-4">Galletas</h3>
            <p class="text-darkGray mb-4">Deliciosas Galletas de avena y chocolate!</p>
            <img src="./assets/cookies-removebg-preview (1).png" alt="Imagen de cookies" class="rounded-lg max-h-48 object-contain w-full">
          </div>
        </div>
      </div>
    </section>

    <!-- Contacto -->
    <section id="contacto" class="bg-lightGray py-20 text-center animate-fadeIn">
      <h2 class="text-4xl font-bold text-primary">Contáctanos</h2>
      <p class="mt-4 text-lg text-darkGray">Nos encantaría saber de ti. Si tienes alguna pregunta o deseas realizar un pedido, no dudes en ponerte en contacto con nosotros.</p>
      <a href="mailto:contacto@misterrollo.com" class="mt-8 inline-block py-3 px-8 bg-primary rounded-full text-lg font-semibold text-white hover:bg-secondary transition-all">Escríbenos</a>
      
      <div class="mt-8">
        <a href="https://www.facebook.com/MisterRollo" target="_blank" class="mx-4 text-3xl text-primary hover:text-secondary transition-all">
          <i class="fab fa-facebook"></i> <!-- Font Awesome Facebook Icon -->
        </a>
        <a href="https://www.instagram.com/_mister_rollo" target="_blank" class="mx-4 text-3xl text-primary hover:text-secondary transition-all">
          <i class="fab fa-instagram"></i> <!-- Font Awesome Instagram Icon -->
        </a>
        <a href="https://wa.me/523310931202?text=Me%20interesa%20hacer%20un%20pedido." target="_blank" class="mx-4 text-3xl text-primary hover:text-secondary transition-all">
          <i class="fab fa-whatsapp"></i> <!-- Font Awesome WhatsApp Icon -->
        </a>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-darkGray text-white py-6 text-center">
      <p>&copy; 2024 Mister Rollo | Todos los derechos reservados</p>
    </footer>
  </div>
</template>

<script>
import SmoothScroll from 'vue-smooth-scroll';

export default {
  name: 'App',
  directives: {
    'smooth-scroll': SmoothScroll,
  },
  data() {
    return {
      showModal: false,
      videoUrl: '',
    };
  },
  methods: {
    openModal() {
      this.showModal = true;
      this.videoUrl = "https://www.youtube.com/embed/6twz28mXirA?autoplay=1";
    },
    closeModal() {
      this.showModal = false;
      this.videoUrl = '';
    },
  },
};
</script>

<style scoped>
/* Optional scoped styling */
</style>
