<template>
  <div class="container max-w-4xl mx-auto">
    <Menu />
    <hr class="my-8">
    <NuxtPage />
  </div>
</template>

<style>
h1 { @apply font-bold text-2xl}
h2 { @apply font-bold text-xl}
.router-link-active, .router-link-exact-active {@apply underline}

</style>