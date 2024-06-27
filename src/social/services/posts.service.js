import {BaseService} from "../../shared/services/base.service.js";
import http from "../../shared/services/http-common.js";

export class PostService extends BaseService {
    constructor() {
        super();
        this.complementUrl = '/posts';
    }

    like(postId, likeResource) {
        return http.put(`${this.complementUrl}/${postId}/like`, likeResource);
    }
}

export default new PostService();