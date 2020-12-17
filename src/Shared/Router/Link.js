import useRouter from "./useRouter";

export default function Link({href, title}) {
    const { navigate, pathname } = useRouter()

    return (
        <a
            href={href}
            className={`${pathname === href ? 'active' : ''}`}
            onClick={(e) => {
                e.preventDefault();
                navigate(href);
            }}
            title={title}
        >
            {title}
        </a>
    )
}
