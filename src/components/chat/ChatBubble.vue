<template>
     <!-- Example Message -->
     <div v-if="itsMine" class="flex justify-end">
            <div class="bg-orange-200 text-black p-2 rounded-lg max-w-xs">
              {{ message }}
            </div>
          </div>
  
          <!-- Example Received Message -->
          <div v-else class="flex">
            <div class="bg-yellow-100 text-black p-2 rounded-lg max-w-xs">
            <span class="capitalize">{{ message }}</span>
            <img v-if ="image" :src="image" alt="YesNoImage" class="w-45 h-45 object-cover rounded-md">  
            </div>
          </div>
</template>

<script setup lang ="ts">
interface Props {
    message: string;
    itsMine: boolean;
    image?: string;
}

defineProps<Props>();
</script>