import Image from 'next/image';
import AuthForm from './components/AuthForm';

export default function Home() {
  return (
    <div className="flex min-h-full flex-col justify-center sm:px-6 lg:px-8 bg-gray-100">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Image
          height={60}
          width={60}
          alt="Logo"
          className="mx-auto w-auto rounded-lg"
          src="/images/DuyNguyenBui.jpeg"
        />
        <h2 className="mt-6 text-center text-3xl font-semibold tracking-tight text-gray-900">
          Journey Chat Box
        </h2>
        <div className="text-center mt-2">Connected together</div>
        {/* AuthForm */}
        <AuthForm />
      </div>
    </div>
  );
}
