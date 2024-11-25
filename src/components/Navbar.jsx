import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { GiCancel } from "react-icons/gi";
import { Link } from 'react-router-dom';
import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react';

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className='flex items-center justify-between w-full h-16 md:h-20 relative'>
            {/* Logo Section */}
            <Link to="/" className='flex items-center justify-center gap-5'>
                <Image src="logo.png" alt="Lama Logo" w={32} h={32} />
                <span className='font-bold text-lg'>Blog2Explore</span>
            </Link>

            {/* Mobile Menu Toggle */}
            <div className='md:hidden'>
                <div className='cursor-pointer' onClick={() => setOpen((prev) => !prev)}>
                    {open ? <GiCancel /> : <GiHamburgerMenu />}
                </div>
                <div className={`w-full h-screen flex flex-col items-center justify-center gap-8 font-medium absolute top-16 ${open ? 'left-0' : '-right-[100%]'} bg-[#e6e6ff] transition-all ease-in-out`}>
                    <Link to="/">Home</Link>
                    <Link to="/">About</Link>
                    <Link to="/">Most Popular</Link>
                    <Link to="/">Trending</Link>

                    <SignedOut>
                        <Link to="/login">
                            <button className='text-white bg-blue-800 rounded-3xl py-2 px-4'>Login</button>
                        </Link>
                    </SignedOut>

                    <SignedIn>
                        <UserButton afterSignOutUrl="/login" />
                    </SignedIn>
                </div>
            </div>

            {/* Desktop Navigation */}
            <div className='hidden md:flex items-center gap-4 xl:gap-10 font-medium'>
                <Link to="/">Home</Link>
                <Link to="/">About</Link>
                <Link to="/">Most Popular</Link>
                <Link to="/">Trending</Link>

                <SignedOut>
                    <Link to="/login">
                        <button className='text-white bg-blue-800 rounded-3xl py-2 px-4'>Login</button>
                    </Link>
                </SignedOut>

                <SignedIn>
                    <UserButton afterSignOutUrl="/login" />
                </SignedIn>
            </div>
        </div>
    );
};

export default Navbar;
