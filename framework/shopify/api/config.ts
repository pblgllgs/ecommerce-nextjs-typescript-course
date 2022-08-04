import { fetchApi } from "../utils";
import { ApiConfig } from '@common/types/api';

class Config {
    private config: ApiConfig;
    constructor(config: ApiConfig){
        this.config = config;
    }

    getConfig(): ApiConfig{
        return this.config;
    }
}

const configWrapper = new Config({
    fetch: fetchApi,
})

export function getConfig(){
    return configWrapper.getConfig();
}