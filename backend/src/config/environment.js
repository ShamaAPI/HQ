const Joi = require('joi');

// Load environment variables
require('dotenv').config();

// Define the schema
const envSchema = Joi.object({
    NODE_ENV: Joi.string().valid('development', 'production', 'test').required(),
    PORT: Joi.number().default(3000),
    DB_URI: Joi.string().required(),
    REDIS_URL: Joi.string().required(),
    JWT_SECRET: Joi.string().required(),
    OTP_SECRET: Joi.string().required(),
    SMS_API_KEY: Joi.string().optional(),
    EMAIL_USER: Joi.string().email().required(),
    EMAIL_PASS: Joi.string().required(),
    FILE_UPLOAD_PATH: Joi.string().default('/uploads'),
    STORAGE_SERVICE: Joi.string().valid('local', 's3').default('local')
}).unknown();

// Validate the environment variables
const { error, value } = envSchema.validate(process.env);
if (error) {
    throw new Error(`Environment validation error: ${error.message}`);
}

module.exports = value;