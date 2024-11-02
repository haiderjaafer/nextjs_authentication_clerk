import { SignInButton } from '@clerk/nextjs';

const Guest = () => {
  return (
    <div className='flex items-center justify-center flex-col h-screen font-extrabold text-fuchsia-600'>
      <h1>Welcome to Guest page</h1>
      
      <SignInButton />
    </div>
  );
};

export default Guest;