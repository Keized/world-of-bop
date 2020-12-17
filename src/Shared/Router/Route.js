import { useContext, useEffect, useState } from 'react';
import { RouterContext } from './RouterProvider';

export default function Route({children, path, exact}) {
    const {pathname} = useContext(RouterContext);
    const [target] = useState(path);

    useEffect(() => {
        const regex = /:[\w]+/g;
        // let matches = [...path.matchAll(regex)]
        let to = path.replaceAll(regex, '([^/]+)')
        let o = [...pathname.matchAll(to)];
        console.log(o);

        // let to = path.replace()
    }, [path])

    if (pathname === target) {
        return children;
    }

    if (!exact && pathname.startsWith(target)) {
        return children;
    }

    return null;
}
