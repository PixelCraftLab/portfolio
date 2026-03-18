import { useState } from "react"


const CopyEmailButton = () => {
    const [copied, setCopied] = useState(false);
    const email ="vishalgowdask65@gmail.com"

    const copytoclipboard = ()=>{
        navigator.clipboard.writeText(email);
        setCopied(true);

        setTimeout(()=>{
            setCopied(false)
        },1000)

        alert("Lets goo, email coppied successfully :(vishalgowdask65@gmail.com)")

    }
  return (
    <button onClick={copytoclipboard}
    className="relative px-1 py-4 text-sm text-center rounded-full font-extralight bg-primary w-[15rem] cursor-pointer overflow-hidden hover:scale-105 transition-transform duration-300 flex justify-center ">
        <p className="flex items-center justify-center gap-2">
        Copy Email address</p>
        <img 
        className="w-5 h-5 m-2 cursor-pointer"
        alt="copy icon"
        src="assets/copy.svg"
        />
        </button>
  )
}

export default CopyEmailButton