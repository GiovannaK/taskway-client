import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Cookie from 'js-cookie';
import { useQuery } from '@apollo/client';
import { HAS_PERMISSION_TO_ACCESS } from './queries/hasPermissionToAccess';
import { Loading } from '../components/Loading';

export default function withAuthAndPermission(WrappedComponent) {
  const Wrapper = (props) => {
    const router = useRouter();
    const { id } = router.query;

    const {
      error: errorHasPermission, loading: loadingHasPermission,
      data: { hasPermissionToAccessWorkspace } = {},
    } = useQuery(HAS_PERMISSION_TO_ACCESS, {
      variables: {
        workspaceId: id,
      },
    });

    if (loadingHasPermission) {
      <Loading />;
    }

    useEffect(() => {
      if (hasPermissionToAccessWorkspace === false) {
        router.replace('/workspaces');
      }
    }, [hasPermissionToAccessWorkspace]);

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
