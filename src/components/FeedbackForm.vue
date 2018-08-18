<template>
    <aside>
        <div class="fixed-info-icon" @click="showModal('about-modal')">
            <i class="fa fa-2x fa-info-circle"></i>
        </div>
    </aside>
</template>

<script>
import modalMethods from '@/mixins/modalMethods'
import AboutModal from './Modals/AboutModal'
export default {
  mixins: [modalMethods],
  components: {
    AboutModal
  }
}
</script>

<style>
.fixed-info-icon {
    background: #fff;
    border-radius: 50%;
    position: absolute;
    right: 2em;
    bottom: 2em;
    z-index: 1000;
    padding: 1em;
    transition: .3s ease;
}

.fixed-info-icon:hover {
    cursor: pointer;
    background: rgba(190, 201, 194, 0.3);
}
</style>
