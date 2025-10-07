import React from 'react';
import { cn } from '@/lib/utils';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, helperText, type = 'text', ...props }, ref) => {
    const id = props.id || props.name;

    return (
      <div className="w-full">
        {label && (
          <label 
            htmlFor={id} 
            className="block text-sm font-medium text-foreground mb-2"
          >
            {label}
          </label>
        )}
        <input
          type={type}
          className={cn(
            "w-full px-4 py-3 bg-input border border-border rounded-lg",
            "focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent",
            "placeholder:text-muted-foreground text-foreground",
            "disabled:opacity-50 disabled:cursor-not-allowed",
            error && "border-error focus:ring-error",
            className
          )}
          ref={ref}
          {...props}
        />
        {(error || helperText) && (
          <p className={cn(
            "mt-2 text-sm",
            error ? "text-error" : "text-muted-foreground"
          )}>
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, helperText, ...props }, ref) => {
    const id = props.id || props.name;

    return (
      <div className="w-full">
        {label && (
          <label 
            htmlFor={id} 
            className="block text-sm font-medium text-foreground mb-2"
          >
            {label}
          </label>
        )}
        <textarea
          className={cn(
            "w-full px-4 py-3 bg-input border border-border rounded-lg",
            "focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent",
            "placeholder:text-muted-foreground text-foreground resize-vertical",
            "disabled:opacity-50 disabled:cursor-not-allowed min-h-[100px]",
            error && "border-error focus:ring-error",
            className
          )}
          ref={ref}
          {...props}
        />
        {(error || helperText) && (
          <p className={cn(
            "mt-2 text-sm",
            error ? "text-error" : "text-muted-foreground"
          )}>
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";
