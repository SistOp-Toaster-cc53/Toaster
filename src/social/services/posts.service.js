import {BaseService} from "../../shared/services/base.service.js";

export class PostService extends BaseService {
    constructor() {
        super();
        this.complementUrl = '/posts';
    }
}

export default new PostService();