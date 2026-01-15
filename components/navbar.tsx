import Image from "next/image";

function Navbar() {
  return ( 
    <div className="flex w-full justify-center overflow-x-hidden bg-rose-500 shadow-md py-2">
        <Image src={'/image/koala_pass.webp'} alt="Koala Hugging" width={200} height={200} className="w-20 h-full"/>
    </div>
  );
}

export default Navbar;