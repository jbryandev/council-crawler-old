export default function Header({ children }) {
  return (
    <h2 className='text-xl md:text-2xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8'>
      {children}
    </h2>
  );
}
