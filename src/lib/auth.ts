import { compare, hash } from 'bcryptjs';
import { SignJWT, jwtVerify } from 'jose';
import Cookies from 'js-cookie';

const SALT_ROUNDS = 10;
const AUTH_SECRET = 'your-secret-key'; // In production, use environment variable

export async function hashPassword(password: string) {
  return hash(password, SALT_ROUNDS);
}

export async function comparePasswords(plainText: string, hashed: string) {
  return compare(plainText, hashed);
}

interface SessionData {
  userId: string;
  email: string;
  expires: string;
}

export async function createSession(data: Omit<SessionData, 'expires'>) {
  const expires = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 hours
  const session: SessionData = {
    ...data,
    expires: expires.toISOString(),
  };

  const token = await new SignJWT(session)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime(expires)
    .sign(new TextEncoder().encode(AUTH_SECRET));

  Cookies.set('session', token, {
    expires: 1, // 1 day
    secure: true,
    sameSite: 'strict'
  });

  return token;
}

export async function verifySession(token: string) {
  try {
    const { payload } = await jwtVerify(
      token,
      new TextEncoder().encode(AUTH_SECRET),
      {
        algorithms: ['HS256'],
      }
    );
    return payload as SessionData;
  } catch {
    return null;
  }
}

export async function getSession(): Promise<SessionData | null> {
  const token = Cookies.get('session');
  if (!token) return null;
  return verifySession(token);
}

export function destroySession() {
  Cookies.remove('session');
}