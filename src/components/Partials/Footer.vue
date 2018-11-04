<template>
    <footer class="py-5 text-center pos-rel">
        <div class="container">
            <p class="mt-0 mb-0">Follow Me</p>
            <div class="social-icons mb-3">
                <a target="_blank" href="https://codepen.io/JackEdwardLyons"><i class="fab fa-codepen"></i></a>
                <a target="_blank" href="https://freecodecamp.org/jackedwardlyons"><i class="fab fa-free-code-camp"></i></a>
                <a target="_blank" href="https://www.linkedin.com/in/jacklyons89/"><i class="fab fa-linkedin"></i></a>
                <a target="_blank" href="https://www.instagram.com/jacksinstadventure"><i class="fab fa-instagram"></i></a>
                <a target="_blank" href="https://www.jacklyons.me"><i class="fab fa fa-rss"></i></a>
            </div>
            <p class="mt-0 mb-0">Made with <i class="fas fa-heart heart-icon"></i> by
            <a class="text-primary" href="http://jacklyons.me" target="_blank">Jack Lyons</a></p>
        </div>

        <!-- <FeedbackForm /> -->
    </footer>
</template>

<script>
import FeedbackForm from '@/components/FeedbackForm.vue'
export default {
  components: {
    FeedbackForm
  }
}
</script>
