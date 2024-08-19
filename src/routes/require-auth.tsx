import type {MetaFunction} from "@remix-run/node"
import {json, useLoaderData} from "@remix-run/react"

import {requireAuth} from "~/utils/loaders"

export const meta: MetaFunction = () => [
    {
        title: "remix starter | requireAuth",
    },
]

export const loader = () => {
    const user = requireAuth()

    const stats = {
        age: 37,
        weight: 185,
        hobbies: ["coding", "lifting", "running", "gaming"],
    }

    return json({user, stats})
}

const IndexRoute = () => {
    const data = useLoaderData<typeof loader>()

    return (
        <>
            <h2 className="text-2xl font-bold">Home</h2>

            <p className="mb-4">
                Welcome, <code>{data.user.username}</code>!
            </p>

            <pre>{JSON.stringify(data.stats, null, 2)}</pre>
        </>
    )
}

export default IndexRoute
