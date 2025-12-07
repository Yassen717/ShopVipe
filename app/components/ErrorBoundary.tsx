"use client";

import React, { Component, ReactNode, ErrorInfo } from 'react';

interface Props {
    children: ReactNode;
    fallback?: ReactNode;
}

interface State {
    hasError: boolean;
    error: Error | null;
    errorInfo: ErrorInfo | null;
}

/**
 * Error Boundary Component
 * Catches JavaScript errors anywhere in the child component tree
 * and displays a fallback UI instead of crashing the whole app
 */
class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            hasError: false,
            error: null,
            errorInfo: null
        };
    }

    static getDerivedStateFromError(error: Error): State {
        // Update state so the next render will show the fallback UI
        return {
            hasError: true,
            error,
            errorInfo: null
        };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        // Log error details for debugging
        console.error('ErrorBoundary caught an error:', error, errorInfo);

        this.setState({
            error,
            errorInfo
        });

        // You can also log the error to an error reporting service here
        // logErrorToService(error, errorInfo);
    }

    handleReset = () => {
        this.setState({
            hasError: false,
            error: null,
            errorInfo: null
        });
    };

    render() {
        if (this.state.hasError) {
            // Custom fallback UI if provided
            if (this.props.fallback) {
                return this.props.fallback;
            }

            // Default fallback UI
            return (
                <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-blue-50 px-4">
                    <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8">
                        <div className="text-center">
                            {/* Error Icon */}
                            <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-red-100 mb-4">
                                <span className="text-4xl">⚠️</span>
                            </div>

                            {/* Title */}
                            <h1 className="text-2xl font-bold text-gray-900 mb-2 font-display">
                                Oops! Something went wrong
                            </h1>

                            {/* Description */}
                            <p className="text-gray-600 mb-6 font-body">
                                We encountered an unexpected error. Don&apos;t worry, your cart is safe!
                            </p>

                            {/* Error Details (only in development) */}
                            {process.env.NODE_ENV === 'development' && this.state.error && (
                                <div className="mb-6 p-4 bg-gray-50 rounded-lg text-left overflow-auto max-h-40">
                                    <p className="text-sm font-mono text-red-600 mb-2">
                                        {this.state.error.toString()}
                                    </p>
                                    {this.state.errorInfo && (
                                        <details className="text-xs text-gray-600 font-mono">
                                            <summary className="cursor-pointer hover:text-gray-900">
                                                Stack trace
                                            </summary>
                                            <pre className="mt-2 whitespace-pre-wrap">
                                                {this.state.errorInfo.componentStack}
                                            </pre>
                                        </details>
                                    )}
                                </div>
                            )}

                            {/* Action Buttons */}
                            <div className="flex flex-col sm:flex-row gap-3">
                                <button
                                    onClick={this.handleReset}
                                    className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all font-semibold font-body"
                                >
                                    Try Again
                                </button>
                                <button
                                    onClick={() => window.location.href = '/'}
                                    className="flex-1 bg-white border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-all font-semibold font-body"
                                >
                                    Go Home
                                </button>
                            </div>

                            {/* Help Text */}
                            <p className="text-sm text-gray-500 mt-6 font-body">
                                If this issue persists, please{' '}
                                <a href="/contact" className="text-purple-600 hover:text-purple-700 underline">
                                    contact support
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
