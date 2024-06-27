import { BaseService } from "../../shared/services/base.service.js";
import http from "../../shared/services/http-common.js";

export class CommentsService extends BaseService {
    constructor() {
        super();
        this.complementUrl = '/comments';
    }

    getByPostId(postId) {
        return http.get(`${this.complementUrl}/${postId}`);
    }
}

export default new CommentsService();