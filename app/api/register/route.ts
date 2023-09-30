import bcrypt from 'bcrypt';

import prismadb from '@/app/libs/prismadb';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, name, password } = body;

    if (!email || !name || !password) {
      return new NextResponse('Missing email or password', { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prismadb.user.create({
      data: {
        email,
        name,
        hashedPassword,
      },
    });

    return NextResponse.json(user);
  } catch (error) {
    console.log('REGISTRATION ERRORS', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
