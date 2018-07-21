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
import Header from '@/components/Header.vue'
import MainCard from '@/components/MainCard.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'home',
  components: {
    Header,
    MainCard,
    Footer
  }
}
</script>
