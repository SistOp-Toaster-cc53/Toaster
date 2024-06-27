import { BaseService } from "../../shared/services/base.service.js";

export class CommentsService extends BaseService {
    constructor() {
        super();
        this.complementUrl = '/comments';
    }

    getByPostId(postId) {
        return this.get(`/${postId}`);
    }
}

export default new CommentsService();