'use client'
import { useState } from "react"
import { signIn, signUp } from "../utils/auth"
import { useRouter } from 'next/navigation'
export default function Register() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [error, setError] = useState('')
    const [showError, setShowError] = useState(false)
    const router = useRouter()

    const registerUser = async (e) => {
        if (email && password && name) {
            const data = await signUp(email, password, name)
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
                <input className="p-3 rounded" type="name" onChange={(e) => setName(e.target.value)} placeholder="Username" />
                <input className="p-3 rounded" type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                <input className="p-3 rounded" type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                <button onClick={async (e) => await registerUser(e)}>
                    Register
                </button>
            </div>

        </div>

    )
}