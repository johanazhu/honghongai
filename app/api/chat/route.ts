
import { startChatAndSendMessageStream } from '@/utils/OpenAIStream'


// IMPORTANT! Set the runtime to edge
export const runtime = 'edge'

export async function POST(req: Request) {
  // Extract the `prompt` from the body of the request
  const { messages } = await req.json()

  const resetMessage = messages.map((msg:any) => ({
    role: msg.role === 'assistant' ? 'model' : 'user',
    content: msg.content
  }))


  try {
    const history = resetMessage.slice(0, -1)
    const newMessage = resetMessage[resetMessage.length - 1].content
    const responseStream:any = await startChatAndSendMessageStream(history, newMessage)
  
    return new Response(responseStream, 
      { status: 200, headers: { 'Content-Type': 'text/plain; charset=utf-8' } }) 
  } catch (error: any) {
    const errorMessage = error.message
    const regex = /https?:\/\/[^\s]+/g
    const filteredMessage = errorMessage.replace(regex, '').trim()
    const messageParts = filteredMessage.split('[400 Bad Request]')
    const cleanMessage = messageParts.length > 1 ? messageParts[1].trim() : filteredMessage

    return new Response(JSON.stringify({
      error: {
        code: error.name,
        message: cleanMessage,
      },
    }), { status: 500 })
  }

}
