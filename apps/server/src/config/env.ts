import dotenv from 'dotenv';
dotenv.config();

const requiredEnvVars = [
    'PORT',
    'MONGO_URI',
    'REDIS_URL',
    'ANTHROPIC_API_KEY',
    'CLIENT_URL',
    'UPLOAD_DIR',
    'NODE_ENV'
]

for (const key of requiredEnvVars){
    if (!process.env[key]) {
        throw new Error(`Missing required environment variable: ${key}`);
    }
}

export const env = {
    PORT:  parseInt(process.env.PORT || '5000', 10),
    MONGO_URI: process.env.MONGO_URI as string,
    REDIS_URL: process.env.REDIS_URL as string,
    ANTHROPIC_API_KEY: process.env.ANTHROPIC_API_KEY as string,
    CLIENT_URL: process.env.CLIENT_URL as string,
    UPLOAD_DIR: process.env.UPLOAD_DIR || './uploads',
    NODE_ENV: process.env.NODE_ENV || 'development',
} as const;