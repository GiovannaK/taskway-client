import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Cookie from 'js-cookie';

export default function withAuth(WrappedComponent) {
  const Wrapper = (props) => {
    const router = useRouter();
    useEffect(() => {
      const authCookie = Cookie.get('isLogged');

      if (!authCookie) {
        router.replace('/login');
      }
    }, []);

    return <WrappedComponent {...props} />;
  };

  return Wrapper;
}
