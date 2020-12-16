import { useContext } from 'react';
import { RouterContext } from './RouterProvider';

export default function useRouter() {
    const {navigate, pathname, current} = useContext(RouterContext);

    return {
        navigate,
        pathname,
        current
    }
}
