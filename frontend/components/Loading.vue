<template>
  <div>
    <div :class="['flex items-center justify-center text-lg font-bold', className]">
    {{ message }}
  </div>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      default: 'Loading!!'
    },
    className: {
      type: String,
      default: ''
    }
  }
}
</script>
