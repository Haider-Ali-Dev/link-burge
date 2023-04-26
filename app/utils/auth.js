import supabase from "../supabase"

const signUp = async (email, password, name) => {
    const authResponse = await supabase.auth.signUp({ email, password })
    if (authResponse.data.user) {
        await supabase
            .from("profile")
            .insert([{ id: authResponse.data.user.id, name }])

        return { ...authResponse.data, name }
    }

    if (authResponse.error) {
        console.error(authResponse.error)
        return {}
    }

}


const signIn = async (email, password) => {
    const authResponse = await supabase.auth.signIn({ email, password })
    if (authResponse.data.user) {
        const name = await supabase.from('profile').select('name').eq('id', authResponse.data.user.id)
        return { ...authResponse.data, name: name.data[0].name }
    }

    if (authResponse.error) {
        console.error(authResponse.error)
        return {}
    }

}


const signOut = async () => {
    const { data, error } = supabase.auth.signOut()
    if (error) {
        console.error(error)
        return false
    }
    return data
}

const getSession = async () => {
    const session = await supabase.auth.getSession()
    return session
}

export { signUp, signIn, signOut, getSession }