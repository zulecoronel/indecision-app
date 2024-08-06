
<template>

    <div class="flex-1 overflow-y-auto p-4">
        <div class="flex flex-col space-y-2">
          <!-- Messages go here -->
         <ChatBubble :its-mine="true" message="Hola Monty"/>
         <ChatBubble :its-mine="false" message="no" image="https://yesno.wtf/assets/no/30-d37eee83c3c2180de4edb7da6fa9f5b7.gif"/>
        
        </div>
      </div>

</template>

<script setup lang="ts">
import ChatBubble from './ChatBubble.vue';
</script>
