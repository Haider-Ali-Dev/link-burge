'use client'
import { useState } from "react"
import { useRouter } from 'next/navigation'
import { signIn } from "../utils/auth"
export default function SignIn() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [showError, setShowError] = useState(false)
    const router = useRouter()

    const signInUser = async (e) => {
        if (email && password) {
            const data = await signIn(email, password)
            if (data) {
                router.push('/')
            }
        } else {
            setError('Please fill all fields')
            setShowError(true)
        }
    }
    return (
        <div className="mt-5 w-[100%] h-[100vh] flex justify-center">
            <div className="flex gap-3 flex-col">
                {
                    showError ? <p className="bg-red-400 text-white font-bold p-2 rounded text-center">{error}</p> : null
                }
                <input className="p-3 rounded" type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                <input className="p-3 rounded" type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                <button onClick={async (e) => await signInUser(e)}>
                    Sign in
                </button>
            </div>

        </div>

    )
}