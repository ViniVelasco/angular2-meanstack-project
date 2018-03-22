var Message = /** @class */ (function () {
    function Message(content, username, messageId, userId) {
        this.content = content;
        this.userId = userId;
        this.username = username;
        this.messageId = messageId;
    }
    return Message;
}());
export { Message };
