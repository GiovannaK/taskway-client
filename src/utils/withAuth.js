import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Cookie from 'js-cookie';

export default function withAuth(WrappedComponent) {
  const Wrapper = (props) => {
    const router = useRouter();
    const cook = Cookie.get('logged');
    console.log(cook);
    useEffect(() => {
      const authCookie = Cookie.get('logged');

      if (!authCookie) {
        router.replace('/login');
      }
    }, []);

    return <WrappedComponent {...props} />;
  };

  return Wrapper;
}
