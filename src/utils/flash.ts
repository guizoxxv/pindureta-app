import { flashMessageStorageId } from '../config';

type FlashMessageObj = {
  level: 'info' | 'warning' | 'error';
  message: string;
}

export function flash(
  messageObj: FlashMessageObj,
): void {
  localStorage.setItem(flashMessageStorageId, JSON.stringify(messageObj));
}

export function clearFlash() {
  localStorage.removeItem(flashMessageStorageId);
}

export function getFlash() {
  return localStorage.getItem(flashMessageStorageId);
}