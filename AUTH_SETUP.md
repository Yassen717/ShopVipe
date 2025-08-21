# 🔐 Appwrite Authentication Setup Guide

This guide will help you set up Appwrite authentication for your ShopVipe app.

## 📋 Prerequisites

1. **Appwrite Account**: Sign up at [appwrite.io](https://appwrite.io)
2. **Node.js**: Version 18 or higher
3. **npm/yarn/pnpm**: Package manager

## 🚀 Setup Steps

### 1. Create Appwrite Project

1. Go to [cloud.appwrite.io](https://cloud.appwrite.io)
2. Click "Create Project"
3. Give your project a name (e.g., "ShopVipe")
4. Click "Create"

### 2. Get Project Credentials

1. In your project dashboard, go to **Settings** → **General**
2. Copy your **Project ID**
3. Note your **API Endpoint** (usually `https://cloud.appwrite.io/v1`)

### 3. Configure Environment Variables

1. In your project root, edit `.env.local`:
```bash
# Appwrite Configuration
NEXT_PUBLIC_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
NEXT_PUBLIC_APPWRITE_PROJECT_ID=your_actual_project_id_here
```

2. Replace `your_actual_project_id_here` with your real Project ID

### 4. Configure Appwrite Authentication

1. In your Appwrite project, go to **Auth** → **Settings**
2. Enable **Email/Password** authentication
3. Configure your **Redirect URLs**:
   - Add: `http://localhost:3000/account`
   - Add: `http://localhost:3000/reset-password`
   - Add your production domain when deploying

### 5. Create Database (Optional)

If you want to store user profiles or orders:

1. Go to **Databases** → **Create Database**
2. Name it `shopvibe`
3. Create collections for:
   - `users` (for extended user profiles)
   - `orders` (for order history)
   - `products` (for product catalog)

### 6. Install Dependencies

```bash
npm install appwrite
```

## 🧪 Testing the Authentication

1. Start your development server:
```bash
npm run dev
```

2. Open [http://localhost:3000](http://localhost:3000)
3. Click "Sign Up" in the header
4. Create a test account
5. Try logging in and out

## 🔧 Troubleshooting

### Common Issues

1. **"Project ID not found"**
   - Check your `.env.local` file
   - Ensure the Project ID is correct
   - Restart your dev server after changing env vars

2. **"Authentication failed"**
   - Verify Email/Password auth is enabled in Appwrite
   - Check redirect URLs configuration
   - Ensure you're using the correct endpoint

3. **"CORS errors"**
   - Add your domain to Appwrite's allowed origins
   - Check browser console for specific error messages

### Debug Mode

Add this to your `.env.local` for debugging:
```bash
NEXT_PUBLIC_APPWRITE_DEBUG=true
```

## 📱 Features Included

- ✅ User registration with email/password
- ✅ User login/logout
- ✅ Password reset functionality
- ✅ Protected routes
- ✅ User profile management
- ✅ Persistent authentication state
- ✅ Responsive authentication modal

## 🚀 Next Steps

After authentication is working:

1. **User Profiles**: Extend user data with additional fields
2. **Order Management**: Connect authentication to shopping cart
3. **Admin Panel**: Add role-based access control
4. **Social Login**: Integrate Google, Facebook, etc.
5. **Two-Factor Auth**: Enhance security

## 📚 Resources

- [Appwrite Documentation](https://appwrite.io/docs)
- [Appwrite Console](https://cloud.appwrite.io)
- [Next.js Documentation](https://nextjs.org/docs)
- [React Context API](https://react.dev/reference/react/useContext)

## 🆘 Support

If you encounter issues:

1. Check the [Appwrite Discord](https://discord.gg/appwrite)
2. Review [Appwrite GitHub Issues](https://github.com/appwrite/appwrite/issues)
3. Check your browser console for error messages
4. Verify all environment variables are set correctly

---

**Happy coding! 🎉** 