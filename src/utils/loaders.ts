import {json, redirect} from "@remix-run/node"

const AUTHENTICATED = true

const user = {username: "bradgarropy"}

const authLoader = () => {
    if (!AUTHENTICATED) {
        throw redirect("/login")
    }

    return json({user})
}

const requireAuth = () => {
    if (!AUTHENTICATED) {
        throw redirect("/login")
    }

    return user
}

export {authLoader, requireAuth}
