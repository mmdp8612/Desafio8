import MessageMongo from "../dao/MessageMongo.js";

class MessagesService {
    constructor(dao){
        this.dao = new dao();
    }

    async getMessages(){
        return await this.dao.getMessages();
    }

    async addMessage(messages){
        return await this.addMessage(messages);
    }
    
}

export const messagesService = new MessagesService(MessageMongo);