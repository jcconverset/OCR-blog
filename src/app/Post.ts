export class Post {

    title: string;
    content: string;
    loveIts: number;
    createdAt: Date;

    constructor(title: string, content: string, loveIts: number = 0, createdAt: Date = new Date()) {
        this.title = title;
        this.content = content;
        this.loveIts = loveIts;
        this.createdAt = createdAt;
    }
}
