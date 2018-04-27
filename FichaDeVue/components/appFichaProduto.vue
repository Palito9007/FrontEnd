<template>
  <appQuote>
    <h2>{{produto}}</h2>
    <p>{{valor}}</p>
  </appQuote>
</template>

<script>
import appQuote from '@/components/appQuote';

export default {
    components:{
        appQuote
    },
    props:{
        produto:{
            type: String,
            required: true
        },
        valor:{
            type: Number,
            required: true
        }
    }
}
</script>

<style scoped>
.app{
  margin-top: 4.0rem;
  display: inline-flex;
  align-items: center;
  flex-direction: column;
}
</style>

