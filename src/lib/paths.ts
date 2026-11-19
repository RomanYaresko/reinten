export const BASE_PATH = process.env.NODE_ENV === 'production' ? '/reinten' : '';

export const assetPath = (path: string) => `${BASE_PATH}${path}`;
