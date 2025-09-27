"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { account, isAppwriteEnabled } from '../lib/appwrite';
import { ID } from 'appwrite';
import { Models } from 'appwrite';

interface User extends Models.User<Models.Preferences> {}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  enabled: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, name: string) => Promise<void>;
  logout: () => Promise<void>;
  forgotPassword: (email: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    try {
      if (!isAppwriteEnabled) {
        // In demo mode (no Appwrite config), ensure app stays functional
        setUser(null);
        return;
      }
      const currentUser = await account.get();
      setUser(currentUser);
    } catch (error) {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const login = async (email: string, password: string) => {
    try {
      if (!isAppwriteEnabled) {
        throw new Error('Authentication is disabled: Appwrite is not configured. Please set NEXT_PUBLIC_APPWRITE_PROJECT_ID and NEXT_PUBLIC_APPWRITE_ENDPOINT.');
      }
      // Clear any existing sessions first
      try {
        await account.deleteSession('current');
      } catch (e) {
        // Ignore if no session exists
      }
      
      await account.createEmailPasswordSession(email, password);
      await checkUser();
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  };

  const generateValidUserId = () => {
    // Generate a valid user ID that meets Appwrite requirements
    const timestamp = Date.now().toString();
    const random = Math.random().toString(36).substring(2, 8);
    return `user_${timestamp}_${random}`.substring(0, 36);
  };

  const register = async (email: string, password: string, name: string) => {
    try {
      if (!isAppwriteEnabled) {
        throw new Error('Registration is disabled: Appwrite is not configured.');
      }
      // Clear any existing sessions first
      try {
        await account.deleteSession('current');
      } catch (e) {
        // Ignore if no session exists
      }
      
      const userId = generateValidUserId();
      console.log('Creating user with ID:', userId);
      await account.create(userId, email, password, name);
      
      // Don't auto-login after registration - let user login manually
    } catch (error) {
      console.error('Registration error:', error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      if (!isAppwriteEnabled) {
        // Nothing to do in demo mode
        setUser(null);
        return;
      }
      await account.deleteSession('current');
      setUser(null);
    } catch (error) {
      throw error;
    }
  };

  const forgotPassword = async (email: string) => {
    try {
      if (!isAppwriteEnabled) {
        throw new Error('Password recovery is disabled: Appwrite is not configured.');
      }
      await account.createRecovery(email, `${window.location.origin}/reset-password`);
    } catch (error) {
      throw error;
    }
  };

  const value: AuthContextType = {
    user,
    loading,
    enabled: isAppwriteEnabled,
    login,
    register,
    logout,
    forgotPassword,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
} 