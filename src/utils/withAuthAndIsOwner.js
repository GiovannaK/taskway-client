import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Cookie from 'js-cookie';
import { useQuery } from '@apollo/client';
import { HAS_PERMISSION_TO_ACCESS } from './queries/hasPermissionToAccess';
import { Loading } from '../components/Loading';
import { IS_OWNER } from './queries/queryIsOwner';

export default function withAuthAndIsOwner(WrappedComponent) {
  const Wrapper = (props) => {
    const router = useRouter();
    const { id } = router.query;

    const {
      error: errorIsOwner, loading: loadingIsOwner,
      data: { isOwnerToAccess } = {},
    } = useQuery(IS_OWNER, {
      variables: {
        workspaceId: id,
      },
    });

    if (loadingIsOwner) {
      <Loading />;
    }

    if (errorIsOwner) {
      <Loading />;
    }

    useEffect(() => {
      if (isOwnerToAccess === false) {
        router.replace('/workspaces');
      }
    }, [isOwnerToAccess]);

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
