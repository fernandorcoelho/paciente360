import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.indexOf('/certificado/') !== -1) {
    return NextResponse.redirect(
      'https://app.paciente360.com.br' + request.nextUrl.pathname
    );
  } else if (request.nextUrl.pathname.indexOf('/carteirinha/') !== -1) {
    return NextResponse.redirect(
      'https://app.paciente360.com.br' + request.nextUrl.pathname
    );
  }
}
