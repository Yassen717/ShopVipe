import { Client, Account, Databases, Storage } from 'appwrite';

// Read env vars (public on the client)
const endpoint = process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT || 'https://cloud.appwrite.io/v1';
const projectId = process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID || '';

// Feature flag: Appwrite enabled only if a project ID is present
export const isAppwriteEnabled = Boolean(projectId);

// Create a real client only when enabled
const client = isAppwriteEnabled
  ? new Client().setEndpoint(endpoint).setProject(projectId)
  : null;

// Safe shim that rejects with a clear message when Appwrite is disabled
function disabled(method: string) {
  return () => Promise.reject(new Error(`Appwrite is not configured. '${method}' cannot be used in demo mode.`));
}

// Export SDK wrappers. When disabled, provide safe shims so imports don't crash.
export const account: any = isAppwriteEnabled
  ? new Account(client as Client)
  : {
      get: disabled('account.get'),
      deleteSession: disabled('account.deleteSession'),
      createEmailPasswordSession: disabled('account.createEmailPasswordSession'),
      create: disabled('account.create'),
      createRecovery: disabled('account.createRecovery'),
    };

export const databases: any = isAppwriteEnabled
  ? new Databases(client as Client)
  : {};

export const storage: any = isAppwriteEnabled
  ? new Storage(client as Client)
  : {};

export default client;