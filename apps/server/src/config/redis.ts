import { createClient } from 'redis';
import {env} from './env';

const redisClient = createClient({url: env.REDIS_URL});

redisClient.on('error', (err) => {
    console.error('Redis Client Error', err);
});

redisClient.on('connect', () => {
    console.log('Connected to Redis');
});

export async function connectRedis(): Promise<void> {
    await redisClient.connect();
}

export { redisClient};
