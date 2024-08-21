<template>
  <section>
    <h2>Counter: {{ counter }}</h2>
    <h3 data-testid ="square-label">Square {{ squareCounter }}</h3>

    <div>
      <button class="btn" @click="decrementar">-1</button>
      <button class="btn" @click="incrementar">+1</button>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useCounter } from '@/composables/useCounter'

interface Props {
  value: number;
}

const props = defineProps<Props>();

const { counter, squareCounter } = useCounter(props.value)

// const squareCounter = computed(() => counter.value * counter.value)

const incrementar = () => {
  counter.value++
}

const decrementar = () => {
  counter.value--
}
</script>

<style lang="postcss" scoped>
.btn {
  @apply p-5 bg-blue-500 rounded hover:bg-blue-700 mr-2;
}
</style>
