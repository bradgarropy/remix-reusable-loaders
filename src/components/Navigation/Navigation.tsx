import {NavLink} from "@remix-run/react"

const Navigation = () => {
    return (
        <nav className="flex gap-4 font-bold">
            <NavLink to="/" prefetch="intent">
                Home
            </NavLink>

            <NavLink to="/auth-loader" prefetch="intent">
                Auth Loader
            </NavLink>

            <NavLink to="/require-auth" prefetch="intent">
                Require Auth
            </NavLink>

            <NavLink to="/login" prefetch="intent">
                Login
            </NavLink>
        </nav>
    )
}

export default Navigation
