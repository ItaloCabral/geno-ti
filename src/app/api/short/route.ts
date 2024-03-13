import AxiosClient from '@/lib/axios-client';
import { env as apiUrl } from '@/lib/env';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { url } = await request.json();

  const response = await AxiosClient.post('/links', {
    url,
    userId: null
  });

  const data = response.data;

  const link = `${apiUrl}link/${data.endpoint}`

  return NextResponse.json({ link });
}
