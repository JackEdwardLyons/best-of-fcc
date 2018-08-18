<template>
  <div class="body">
    <main class="bg-primary text-white main-container">
      <Header />
      <MainCard />
    </main>
    <Footer />
  </div><!-- end .body -->
</template>

<script>
import Header from '@/components/Partials/Header.vue'
import MainCard from '@/components/MainCard.vue'
import Footer from '@/components/Partials/Footer.vue'

export default {
  name: 'home',
  components: {
    Header,
    MainCard,
    Footer
  }
}
</script>
