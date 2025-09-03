import { Client, Databases, Account } from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('YOUR_PROJECT_ID'); // Your project ID

export const account = new Account(client);
export const databases = new Databases(client);

export { ID } from 'appwrite';
