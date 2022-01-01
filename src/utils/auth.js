
export let authenticate = (user, cb) => {
    if (typeof window !== "undefined") {
        localStorage.setItem("user", JSON.stringify(user))
    }
}

export const isAuthenticated = () => {
    if (typeof window === "undefined") return false
    if (localStorage.getItem("user")) {
        return true

    } else return false
}

export const userInfo = () => {
    const user = JSON.parse(localStorage.getItem("user"))
    return user
}

export const signOut = () => {
    if (typeof window !== "undefined") {
        localStorage.removeItem("user")
    }
}