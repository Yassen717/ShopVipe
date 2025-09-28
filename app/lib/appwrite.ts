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

// Export SDK wrappers. When disabled, provide safe shims so imports don't crash.
type AccountAPI = Pick<
  Account,
  'get' | 'deleteSession' | 'createEmailPasswordSession' | 'create' | 'createRecovery'
>;

const disabledMethod = <T extends keyof AccountAPI>(name: T) =>
  (() => Promise.reject(new Error(`Appwrite is not configured. '${String(name)}' cannot be used in demo mode.`))) as AccountAPI[T];

export const account: AccountAPI = isAppwriteEnabled
  ? new Account(client as Client)
  : {
      get: disabledMethod('get'),
      deleteSession: disabledMethod('deleteSession'),
      createEmailPasswordSession: disabledMethod('createEmailPasswordSession'),
      create: disabledMethod('create'),
      createRecovery: disabledMethod('createRecovery'),
    };

export const databases: Databases | null = isAppwriteEnabled
  ? new Databases(client as Client)
  : null;

export const storage: Storage | null = isAppwriteEnabled
  ? new Storage(client as Client)
  : null;

export default client;