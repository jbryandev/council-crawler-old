import { format } from 'date-fns';

export default function Intro() {
  return (
    <section className='flex-col md:flex-row flex items-center text-center md:justify-between md:text-left mt-16 mb-16 md:mb-12'>
      <h1 className='text-6xl md:text-8xl font-bold tracking-tight leading-tighter md:pr-8'>
        Council Crawler
      </h1>
      <h4 className='text-center md:text-left text-lg mt-5 md:pl-8'>
        {format(new Date(), 'MMMM d, yyyy')}
      </h4>
    </section>
  );
}
