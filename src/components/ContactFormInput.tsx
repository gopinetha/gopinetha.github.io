
import React, { useState, useEffect } from 'react';

interface ContactFormInputProps {
  type: 'text' | 'email' | 'textarea';
  name: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  validation?: {
    min?: number;
    max?: number;
    pattern?: string;
  };
  error?: string;
}

const ContactFormInput: React.FC<ContactFormInputProps> = ({
  type,
  name,
  label,
  placeholder,
  value,
  onChange,
  required = false,
  validation,
  error
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    // Real-time validation
    if (value && validation) {
      if (validation.min && value.length < validation.min) {
        setIsValid(false);
      } else if (validation.max && value.length > validation.max) {
        setIsValid(false);
      } else if (validation.pattern && !new RegExp(validation.pattern).test(value)) {
        setIsValid(false);
      } else {
        setIsValid(true);
      }
    } else {
      setIsValid(true);
    }
  }, [value, validation]);

  const inputClasses = `w-full px-4 py-3 border rounded-lg transition-all duration-200 ${
    isFocused 
      ? 'border-primary ring-2 ring-primary ring-opacity-20' 
      : error || !isValid
      ? 'border-red-500'
      : 'border-gray-300 hover:border-primary'
  } focus:outline-none`;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="space-y-2">
      <label htmlFor={name} className="block text-sm font-medium text-neutral-dark">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      
      {type === 'textarea' ? (
        <textarea
          id={name}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          required={required}
          rows={5}
          className={inputClasses}
          aria-describedby={error ? `${name}-error` : undefined}
        />
      ) : (
        <input
          type={type}
          id={name}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          required={required}
          className={inputClasses}
          aria-describedby={error ? `${name}-error` : undefined}
        />
      )}
      
      {error && (
        <p id={`${name}-error`} className="text-sm text-red-500" role="alert">
          {error}
        </p>
      )}
      
      {validation?.max && (
        <p className="text-xs text-muted-foreground text-right">
          {value.length}/{validation.max}
        </p>
      )}
    </div>
  );
};

export default ContactFormInput;
