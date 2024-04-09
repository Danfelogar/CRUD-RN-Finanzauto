import {Buffer} from 'buffer';

// import CryptoJS from 'crypto-js';

const base64UrlEncode = (value: string): string => {
  let str = Buffer.from(value).toString('base64');
  str = str.replace('+', '-').replace('/', '_').replace(/=+$/, '');
  return str;
};

export const createJwtToken = (payload: unknown, secret: string): string => {
  const header = {
    alg: 'HS256',
    typ: 'JWT',
  };

  const encodedHeader = base64UrlEncode(JSON.stringify(header));
  const encodedPayload = base64UrlEncode(JSON.stringify(payload));
  const signature = base64UrlEncode(
    encodedHeader + '.' + encodedPayload + secret,
  );

  return `${encodedHeader}.${encodedPayload}.${signature}`;
};
