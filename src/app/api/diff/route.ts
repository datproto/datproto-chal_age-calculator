import { NextRequest, NextResponse } from 'next/server';
import moment from 'moment';

import 'moment-precise-range-plugin';

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const day = searchParams.get('day');
  const month = searchParams.get('month');
  const year = searchParams.get('year');

  const passedDate = moment(`${year}-${month}-${day}`);
  const today = moment(new Date());

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const different = moment.preciseDiff(passedDate, today, true);

  return NextResponse.json({ message: 'Hello, Next.js!', different });
}
