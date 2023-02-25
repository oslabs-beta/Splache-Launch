import {createClient} from 'redis'
import { RedisClientType } from '@redis/client';

export class ResolverCache {
    client: RedisClientType
    constructor(){
        this.client = createClient()
        this.checkCache = this.checkCache.bind(this)
        this.client.connect()
            .then(() => console.log('connected to redis instance'))

    }

    async checkCache (parent: any, args: {id: number}, context: any, info: {returnType: any}, callback:any){
        const key = String(info.returnType) + String(args.id); //set the key equal to the fieldName concatenated with the argValString
        const isInCache = await this.client.EXISTS(key)
        if (isInCache){
            const returnObj = await this.client.GET(key);
            if (typeof returnObj === 'string'){
                const returnObjParsed = JSON.parse(returnObj);
                console.log('checkCache, returned from cache')
                return returnObjParsed
            } 
        }else{
            const returnObj = callback(args)
            await this.client.SET(key, JSON.stringify(returnObj));
            return returnObj
        }
    }
}