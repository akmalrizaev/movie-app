import Head from 'next/head';
import Image from 'next/image';
import { useContext, useState } from 'react';
import { TextField } from 'src/components';
import AuthComponent from 'src/components/AuthComponent';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { AuthContext } from 'src/context/auth.context';
import { useRouter } from 'next/router';

const Auth = () => {
  const [auth, setAuth] = useState<'signup' | 'signin'>('signin');
  const { error, isLoading, signIn, signUp, user, setIsLoading } =
    useContext(AuthContext);
  const toggleAuth = (state: 'signup' | 'signin') => {
    setAuth(state);
  };

  const router = useRouter();

  if (user) router.push('/');

  // if (isLoading) return <>Loading...</>;

  const onSubmit = async (formData: { email: string; password: string }) => {
    if (auth === 'signup') {
      setIsLoading(true);
      const response = await fetch('/api/customer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: formData.email }),
      });
      await response.json();
      signUp(formData.email, formData.password);
    } else {
      signIn(formData.email, formData.password);
    }
  };
  const validation = Yup.object({
    email: Yup.string()
      .email('Enter valid email')
      .required('Email is required'),
    password: Yup.string()
      .min(6, '6 minimum character')
      .required('Password is required'),
  });
  return (
    <div className="relative flex h-screen w-screen flex-col md:items-center md:justify-center bg-black md:bg-transparent">
      <Head>
        <title>Auth</title>
        <meta
          name="description"
          content="For watching movies you should sign to app"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Image
        src={'https://rb.gy/p2hphi'}
        alt={'bg'}
        fill
        className="object-cover -z-10 !hidden sm:!inline opacity-60"
      />

      <Image
        src={'/logo.svg'}
        alt={'logo'}
        width={70}
        height={70}
        className={' absolute left-4 top-4 cursor-pointer object-contain'}
      />
      <div className="relative mt-24 space-y-8 rounded bg-black/75 py-10 px-6 md:mt-0 md:max-w-md md:px-14">
        <h1 className="text-4xl font-semibold">
          {auth === 'signup' ? 'Sign Up' : 'Sign In'}
        </h1>
        {error && (
          <p className="text-red-500 font-semibold text-center">{error}</p>
        )}
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={onSubmit}
          validationSchema={validation}
        >
          <Form>
            <div className="space-y-4">
              <TextField name="email" placeholder="Email" type={'text'} />
              <TextField
                name="password"
                placeholder="Password"
                type={'password'}
              />
              {/* <label className="inline-block w-full">
            <input type="password" placeholder="Password" className="input" />
          </label> */}
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#E10856] py-3 font-semibold mt-4"
            >
              {isLoading
                ? 'Loading...'
                : auth === 'signin'
                ? 'Sign In'
                : 'Sign Up'}
            </button>
          </Form>
        </Formik>
        {auth === 'signin' ? (
          <div className="text-[gray]">
            Not yet account?
            <button
              type="button"
              className="text-white hover:underline"
              onClick={() => toggleAuth('signup')}
            >
              Sign Up Now
            </button>
          </div>
        ) : (
          <div className="text-[gray]">
            Already have account?
            <button
              type="button"
              className="text-white hover:underline"
              onClick={() => toggleAuth('signin')}
            >
              Sign In
            </button>
          </div>
        )}
      </div>
      <AuthComponent />
    </div>
  );
};

export default Auth;
