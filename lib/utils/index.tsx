import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// a function to merge styles
export const cn = (...classes: ClassValue[]) => twMerge(clsx(classes));
