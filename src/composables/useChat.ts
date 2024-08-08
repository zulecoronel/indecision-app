import { sleep } from "@/helpers/sleep";
import type { ChatMessage } from "@/interfaces/chat-messages.interface";
import type { YesNoResponse } from "@/interfaces/yes-no.response";
import { ref } from "vue";

export const useChat = () => {

    const messages = ref<ChatMessage[]>([])
    
    const getYouResponse = async () => {
        const resp = await fetch ('https://yesno.wtf/api');
        const data = (await resp.json()) as YesNoResponse;

        return data;
    }
      
      const OnMessage = async ( text: string ) => {
        if (text.length == 0) return;
        messages.value.push({
          id: new Date().getTime(),
          itsMine: true,
          message: text,
        });


        //evaluar sie termina en ?

        if( !text.endsWith('?')) return;
        await sleep(1.5);
      

        const { answer, image } = await getYouResponse();

        messages.value.push({
            id: new Date().getTime(),
            itsMine: false,
            message: answer,
            image: image,
      });
    };
      
    return{
        //Properties
        messages,
        //Methods
        OnMessage,

    };
};