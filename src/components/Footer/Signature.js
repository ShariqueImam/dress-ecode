import React from 'react'


const style = {
    wrapper: 'bg-black flex flex-col mx-auto items-center justify-center py-1 md:py-4',
    list: 'block my-4 py-2 px-2 md:px-4 font-sm md:text-md text-gray-100 font-bold hover:text-[#EFC262]  transition duration-[300ms] hover:mx-4 transition-all duration-[300ms]',
    signatureContent: 'text-gray-100 text-xs md:text-sm text-gray-400 py-2',
}
const Signature = () => {
    return (
        <div className={style.wrapper}>
            {/* <ul style={{ fontFamily: 'Poppins, sans-serif' }} className="py-0 md:py-0 flex text-xs md:text-md tracking-wider ">
                <li>
                    <a aria-label="Home" href="#" className={style.list} aria-current="page">Home</a>
                </li>
                <li>
                    <a aria-label="About" href="#" className={style.list}>About</a>
                </li>
                <li>
                    <a  aria-label="Services" href="#" className={style.list}>Services</a>
                </li>
                <li>
                    <a aria-label="Pricing" href="#" className={style.list}>Pricing</a>
                </li>
        <li>
                    <a aria-label="Contact" href="#" className={style.list}>Contact</a>
                </li>
            </ul> */}

            {/* <div className={style.signatureContent} style={{ fontFamily: 'Poppins, sans-serif' }}>&#169; Ducky, Designed by <span className='text-[#EBB43D]'>Sharique </span></div> */}
        </div>
    )
}

export default Signature