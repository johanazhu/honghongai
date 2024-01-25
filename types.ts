export interface ChatPart {
    text: string
  }
  
export interface ChatMessage {
  role: 'model' | 'user'
  parts:  []
}

export interface ErrorMessage {
  code: string
  message: string
}