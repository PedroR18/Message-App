interface Contact {
  name: string;
  bio: string;
  pic: string;
  chat: Message[];
  members: string[];
}

interface Message {
  sentBy: string;
  message: string;
  time: string;
}

export { Contact, Message };
