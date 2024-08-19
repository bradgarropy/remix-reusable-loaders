import type {MetaFunction} from "@remix-run/node"

export const meta: MetaFunction = () => [
    {
        title: "remix starter | login",
    },
]

const LoginRoute = () => {
    return (
        <>
            <h2 className="text-2xl font-bold">Login</h2>
            <p>You should probably enter your username and password.</p>
        </>
    )
}

export default LoginRoute
