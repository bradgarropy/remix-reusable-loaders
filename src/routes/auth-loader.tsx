import type {MetaFunction} from "@remix-run/node"
import {useLoaderData} from "@remix-run/react"

import {authLoader} from "~/utils/loaders"

export const meta: MetaFunction = () => [
    {
        title: "remix starter | authLoader",
    },
]

export const loader = authLoader

const IndexRoute = () => {
    const data = useLoaderData<typeof loader>()

    return (
        <>
            <h2 className="text-2xl font-bold">Home</h2>

            <p className="mb-4">
                Welcome, <code>{data.user.username}</code>!
            </p>
        </>
    )
}

export default IndexRoute
