interface Contact {
  name: string;
  bio: string;
  pic: string;
  status: string;
  id: string;
  chat: Message[];
}

interface Message {
  sentBy: string;
  message: string;
  time: string;
  type: string;
  filename?: string;
}

export { Contact, Message };
