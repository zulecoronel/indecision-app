<template>

    <div class="bg-gray-100 h-screen flex flex-col max-w-lg mx-auto">
      <div class="bg-orange-400 p-4 text-white flex justify-between items-center">
        <span>Monty</span>
      </div>
  
      <!-- Chat messages -->
       <ChatMessages :messages="messages"/>
  
     <!-- Message box -->
     <MessageBox @send-message="OnMessage($event)"/>

    </div>
</template>

<script setup lang="ts">
import ChatMessages from '@/components/chat/ChatMessages.vue';
import MessageBox from '@/components/chat/MessageBox.vue';
import { useChat } from '@/composables/useChat';

const { messages, OnMessage} = useChat();


</script>