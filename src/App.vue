<template>
  <div>
    <p>
      hello! 
    </p>
    <button @click="clickCount += 1">clicked {{clickCount}} time{{clickCount === 1 ? '' : 's'}}</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      clickCount: 0
    }
  }
}
</script>