export const DEV_ENV: boolean = process.env.ENV_NAME === 'development';
export const DEV_HOST_NAME: string = `${process.env.ENV_NAME}.${process.env.DOMAIN_NAME}`;
export const DEV_PORT: number = 3000;
export const DEV_BASE_URL: string = `https://${DEV_HOST_NAME}:${DEV_PORT}`;
export const DEV_SSL_PATH: string = './.ssl';
export const DEV_CERTIFICATE_NAME: string = `${DEV_HOST_NAME}.pem`;
export const DEV_KEY_NAME: string = `${DEV_HOST_NAME}-key.pem`;
