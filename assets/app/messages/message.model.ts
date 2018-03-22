export class Message {
    content: string;
    username: string;
    messageId: string;
    userId: string;

    constructor(content: string, username: string, messageId?: string,
                userId?: string) {
        this.content = content;
        this.userId = userId;
        this.username = username;
        this.messageId = messageId
    }
}