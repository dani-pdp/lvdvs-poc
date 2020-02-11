import { Injectable } from '@nestjs/common';
import Axios from 'axios';
import { ConfigService } from '../../../config.service';

@Injectable()
export class DogsClient {

    endpoint_root: string;

    constructor() {
        this.endpoint_root = ConfigService.get('DOGS_ROOT_ENDPOINT');
    }

    public async get(url: string): Promise<any> {
        const { data } = await Axios.get(this.endpoint_root + url);
        return data;
    }

}