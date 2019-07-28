<template>
  <transition name="Notification__fade">
    <div
      class="Notification"
      :class="{
        error: error != null,
        success: success != null,
        warning: warning != null
      }"
    >
      <div class="Notification__wrapper">
        <div class="Notification__header">
          <button
            class="btn-small"
            @click="$emit('close')"
          >
            <span class="fas fa-times">
            </span>
          </button>
        </div>
        <div class="Notification__content">
          <slot name="content">
            Error
          </slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Notification',
  props: ['error', 'success', 'warning'],
  mounted () {
    setTimeout(() => this.$emit('close'), 5000);
  }
}
</script>

<style lang="sass">
@import './Notification'
</style>