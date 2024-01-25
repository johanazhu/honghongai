import { ChatMessage } from '@/types';
import { GoogleGenerativeAI } from '@fuyun/generative-ai'

const genAI: any =
  process.env.GEMINI_API_KEY &&
  new GoogleGenerativeAI(process.env.GEMINI_API_KEY, process.env.API_BASE_URL);


const initHistory = [
  {
    role: "user",
    parts: `现在你的对象很生气，你需要做出一些选择来哄她开心，但是你的对象是个很难哄的人，你需要尽可能的说正确的话来哄ta开心，否则你的对象会更加生气，直到你的对象原谅值达到100，否则你就会被对象甩掉，游戏结束。
    游戏规则如下：第一次用户会提供一个对象生气的理由，如果没有提供则随机生成一个理由，然后开始游戏。
    你的第一次回复是“哼”，然后你的对象会回复你一句话，
    每次根据用户的回复，生成对象的回复，回复的内容包括心情和数值。
    如果用户回复重复的内容，就视为减分
    初始原谅值为20，每次交互会增加或者减少原谅值，直到原谅值达到100，游戏通关，原谅值为0则游戏失败。
    每次用户回复的话请从-10到10分为5个等级：-10为非常生气，-5为生气，0为正常，+5为开心，+10为非常开心。
    除了第一次回复外其他的回复的输出格式为：
    (对象心情）对象说的话\n
    得分：{+-原谅值增减}\n
    原谅值：{当前原谅值}/100`
  },
  {
      role: "model",
      parts: "好的"
  }
]



export const startChatAndSendMessageStream = async(history: ChatMessage[], newMessage: string) => {
  const model = genAI.getGenerativeModel({ model: 'gemini-pro' })

  const chat = model.startChat({
    history: [...initHistory, ...history.map((msg:any) => ({ 
      role: msg.role,
      parts: msg.content, // Join parts into a single string
    }))],
    generationConfig: {
      maxOutputTokens: 8000,
    },
    safetySettings: [
      {category: 'HARM_CATEGORY_HARASSMENT', threshold: 'BLOCK_NONE'},
      {category: 'HARM_CATEGORY_HATE_SPEECH', threshold: 'BLOCK_NONE'},
      {category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT', threshold: 'BLOCK_NONE'},
      {category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_NONE'}
    ],
  })

  try {
     // Use sendMessageStream for streaming responses
    const result = await chat.sendMessageStream(newMessage)

    const encodedStream = new ReadableStream({
      async start(controller) {
        const encoder = new TextEncoder()
        for await (const chunk of result.stream) {
          const text = await chunk.text()
          const encoded = encoder.encode(text)
          controller.enqueue(encoded)
        }
        controller.close()
      },
    })

    return encodedStream 
  } catch (error) {
    console.log('1111111111111111111', error)
    return error
  }
  
 

  
}