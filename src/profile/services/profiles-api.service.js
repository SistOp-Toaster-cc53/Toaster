import {BaseService} from "../../shared/services/base.service.js";
import http from "../../shared/services/http-common.js";

export class ProfilesApiService extends BaseService {
    complementUrl = '/profiles';
    getByUsername(username = "cristianodevoto") {
        return http.get(`${this.complementUrl}/username/${username}`);
    }
}