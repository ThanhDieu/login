import { ITenantType } from "types";

const config = {
  prefix: 'TAIMI',
  accessToken: 'ACCESS_TOKEN',
  refreshToken: 'REFRESH_TOKEN',
  tenantId: 'TENANT',
} as const;
/**
 * Saving data to localStorage.
 */
export const saveToLocalStorage = (name: string, value: unknown) => {
  if (typeof window === 'undefined' || !window.localStorage) return;
  localStorage.setItem(`${config.prefix}:${name}`, JSON.stringify(value));
};

/**
 * Load data from localStorage.
 */
export const loadFromLocalStorage = (name: string) => {
  if (typeof window === 'undefined' || !window.localStorage) return null;
  const serialized = localStorage.getItem(`${config.prefix}:${name}`);
  if (serialized === null || serialized === undefined) return null;
  return JSON.parse(serialized) as any;
};

/**
 * Remove data from localStorage.
 */

const removeFromLocalStorage = (name: string) => {
  if (typeof window === 'undefined' || !window.localStorage) return;
  localStorage.removeItem(`${config.prefix}:${name}`);
};
export const saveAccessToken = (accessToken: string) =>
  saveToLocalStorage(config.accessToken, accessToken);
export const loadAccessToken = () => loadFromLocalStorage(config.accessToken);
export const clearAccessToken = () => removeFromLocalStorage(config.accessToken);

export const saveRefreshToken = (refeshToken: string) =>
  saveToLocalStorage(config.refreshToken, refeshToken);
export const loadRefreshToken = () => loadFromLocalStorage(config.refreshToken);
export const clearRefreshToken = () => removeFromLocalStorage(config.refreshToken);

export const saveTenantId = (tenantId: ITenantType) => saveToLocalStorage(config.tenantId, tenantId);
export const loadTenantId = () => loadFromLocalStorage(config.tenantId);
export const clearTenantId = () => removeFromLocalStorage(config.tenantId);

