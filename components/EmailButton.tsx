'use client';

import { Check, Mail } from 'lucide-react';
import { useState } from 'react';

type EmailButtonProps = {
  email: string;
  label: string;
  className: string;
  iconSize?: number;
};

export function EmailButton({ email, label, className, iconSize = 16 }: EmailButtonProps) {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      const input = document.createElement('textarea');
      input.value = email;
      input.setAttribute('readonly', '');
      input.style.position = 'fixed';
      input.style.opacity = '0';
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      document.body.removeChild(input);
    }

    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <button className={className} onClick={copyEmail} type="button" title={`Copy ${email}`}>
      {copied ? <Check size={iconSize} /> : <Mail size={iconSize} />}
      {copied ? 'Copied' : label}
    </button>
  );
}
