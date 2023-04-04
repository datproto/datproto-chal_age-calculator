'use client';

import Image from 'next/image';
import React from 'react';
import axios from 'axios';
import Counter from '@/app/components/Counter';

type InputProps = {
  label: string
  required: boolean
  min: number
  max: number
}

const Input = ({ label, min, max }: InputProps) => (
  <label htmlFor={label} className='flex shrink flex-col gap-1'>
    <h1 className='heading_s uppercase text-cal-gray-main'>{label}</h1>
    <input type='number'
           min={min}
           max={max}
           className='heading_m rounded-md border-0 p-3 ring-1 ring-cal-line'
           required
    />
  </label>
);

export default function Home() {
  const inputs = [
    {
      name: 'Day',
      min: 1,
      max: 31
    },
    {
      name: 'month',
      min: 1,
      max: 12
    },
    {
      name: 'year',
      min: 1000,
      max: 9999
    }
  ];

  const [dayDiff, setDayDiff] = React.useState(null);
  const [monthDiff, setMonthDiff] = React.useState(null);
  const [yearDiff, setYearDiff] = React.useState(null);

  function assertIsFormFieldElement(element: Element): asserts element is HTMLInputElement | HTMLSelectElement | HTMLButtonElement {
    if (!('value' in element)) {
      throw new Error(`Element is not a form field element`);
    }
  }

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const day = e.currentTarget.elements[0];
    const month = e.currentTarget.elements[1];
    const year = e.currentTarget.elements[2];
    assertIsFormFieldElement(day);
    assertIsFormFieldElement(month);
    assertIsFormFieldElement(year);

    const host = 'https://datproto-chal-age-calculator.vercel.app';
    const url = `${host}/api/diff?day=${day.value}&month=${month.value}&year=${year.value}`;

    axios.get(url)
      .then(res => {
        setDayDiff(res.data.different.days);
        setMonthDiff(res.data.different.months);
        setYearDiff(res.data.different.years);
      });
  };

  return (
    <main className='flex h-full w-full items-center justify-center p-4 lg:max-w-7xl'>
      <div
        className='flex flex-col gap-8 rounded-3xl rounded-br-[100px] bg-white px-6 py-12 shadow-lg lg:gap-0 lg:p-14'>
        <div id='header' className='flex-1'>
          <form onSubmit={submitHandler} method='GET'
                className='grid grid-cols-3 gap-x-4 gap-y-8 lg:grid-cols-4 lg:gap-x-8'>
            {inputs.map((i: any, k) => (
              <Input
                key={k}
                label={i.name}
                min={i.min}
                max={i.max}
                required
              />
            ))}
            <div id='divider'
                 className='relative col-span-3 flex items-center justify-center lg:col-span-4 lg:justify-end'>
              <div className='absolute h-px w-full -translate-y-1/2 bg-cal-line' />
              <button type='submit'
                      className='top-1/2 z-10 rounded-full bg-cal-purple p-5 transition-all hover:bg-black focus:bg-black'>
                <div className='relative h-6 w-6 lg:h-12 lg:w-12'>
                  <Image src='/images/icon-arrow.svg' fill alt='submit-button' />
                </div>
              </button>
            </div>
          </form>
        </div>
        <div id='body' className='flex flex-col'>
          <p className='heading_l'><span
            className='text-cal-purple'>{yearDiff ?
            <Counter maxValue={+yearDiff} /> : '--'}</span> {yearDiff && +yearDiff > 1 ? 'years' : 'year'}</p>
          <p className='heading_l'><span
            className='text-cal-purple'>{monthDiff ?
            <Counter maxValue={+monthDiff} /> : '--'}</span> {monthDiff && +monthDiff > 1 ? 'months' : 'month'}
          </p>
          <p className='heading_l'><span
            className='text-cal-purple'>{dayDiff ?
            <Counter maxValue={+dayDiff} /> : '--'}</span> {dayDiff && +dayDiff > 1 ? 'days' : 'day'}
          </p>
        </div>
      </div>
    </main>
  );
}
