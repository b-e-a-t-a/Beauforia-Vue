<template>
  <transition name="Modal-fade">
    <div class="Modal-mask">
      <div class="Modal-wrapper">
        <div class="Modal-container" role="dialog">
          <div class="Modal-header">
            <slot name="header">
            </slot>
          </div>
          <div class="Modal-body">
            <slot name="body">
            </slot>
          </div>
          <div class="Modal-footer">
            <slot name="footer">
              <button
                class="Modal-button btn-colored"
                @click="$emit('close')">
                {{$t('modal.close')}}
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>

</template>

<script>
export default {
  name: 'Modal'
}
</script>

<style lang="sass">
@import './Modal'
</style>