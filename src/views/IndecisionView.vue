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
import type { ChatMessage } from '@/interfaces/chat-messages.interface';
import { ref } from 'vue';

const messages = ref<ChatMessage[]>([
  {
    id: new Date().getTime(),
    message: 'Hola',
    itsMine: true,
  },
  {
    id: new Date().getTime() + 1,
    message: 'No',
    itsMine: false,
    image: 'https://yesno.wtf/assets/no/30-d37eee83c3c2180de4edb7da6fa9f5b7.gif',
  },
]);

const OnMessage = ( text: string ) => {
  messages.value.push({
    id: new Date().getTime(),
    itsMine: true,
    message: text,
  });
}
</script>