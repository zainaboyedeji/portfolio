import Image from "next/image";
import avatar from '/public/images/avatar.svg';
import Link from "next/link";


export default function AboutMe() {
    return (
        <main className="p-20 text-center">
            <h6>Hi,I&apos;m Zainab</h6>
            <p className="mt-5">I design apps, and websites that blows your mind</p>

            <div>
                <button>My Work</button>
                <button>About Me</button>

            </div>
        </main>
    );
}
