import { useState } from "react"
import signIn from "../firbase/signin"
import { toast } from "react-toastify"
import SideIMG from "../components/images/sideIMG.png"
import { useNavigate  } from "react-router-dom"
import { Suspense } from "react"

function Loading() {
    return <h2 className=" text-white flex justify-center items-center">🌀 Loading...</h2>;
  }

export default function SignInPage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleSUbmit = async (e) => {
        e.preventDefault();

        const { result, err} = await signIn(email, password)

        if(err) {
            toast.error(`${err}, Try with Another email`)
            console.log(err)
            return;
        }
        if(result) {
            toast.success(`Sucessfully SignIn ${result.user.email}Sucessfully SignIn`)
        }

        console.log(result.user.email)
        navigate("/")
    }

    return (
        <>
            <Suspense fallback={Loading}>

            <div className=" flex flex-row w-[685px] h-[764px] max-sm:w-[390px] justify-center m-auto max-sm:m-0 items-center">
            <div className="w-[685px] h-[464px] max-sm:hidden">
                    <img src={SideIMG} className=" w-[100%] h-[100%]" />
                </div>
                <div className=" bg-white flex items-center flex-col w-[685px] h-[464px] max-sm:w-[375px] shadow-lg shadow-cyan-500/50">
                    <h3 className=" text-[32px] font-bold text-black mt-[70px] max-sm:text-[24px]">Welcome Back, Login</h3>
                    <p className=" text-black text-base mt-[14px] text-center">Photo Gallery</p>
                    <form className=" mx-2 mt-[36px] flex items-center flex-col" onSubmit={handleSUbmit}>
                        <input type="text" onChange={(e) => setEmail(e.target.value)} name="name" placeholder="Email" required className=" h-[59px] w-[319px] max-sm:w-[300px] text-black shadow-lg shadow-black/50 rounded-lg mb-[15px] px-3" />
                        <input type="password" onChange={(e) => setPassword(e.target.value)} name="name" placeholder="password" required className=" h-[59px] w-[319px] text-black shadow-lg shadow-black/50 rounded-lg px-3  max-sm:w-[300px]" />
                        <button className=" mt-[40px] h-[59px] w-[319px] bg-[#3A3A3A] rounded-2xl">Sign In</button>
                    </form>
                    <p className=" text-black mt-5">@ Amity</p>
                </div>
            </div>
            </Suspense>
        </>
    )
}