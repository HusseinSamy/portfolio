<script setup lang="ts">
// Unknown paths land back on the portfolio, as the SPA router's catch-all did.
await navigateTo('/', { replace: true, redirectCode: 302 })
</script>

<template>
  <div />
</template>
