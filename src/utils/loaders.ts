import {json, redirect} from "@remix-run/node"

const AUTHENTICATED = false

const authLoader = () => {
    if (!AUTHENTICATED) {
        throw redirect("/login")
    }

    const user = {username: "bradgarropy"}
    return json({user})
}

const requireAuth = () => {
    if (!AUTHENTICATED) {
        throw redirect("/login")
    }

    const user = {username: "bradgarropy"}
    return user
}

export {authLoader, requireAuth}
