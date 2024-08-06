import Image from "next/image";
import Link from "next/link";


export default function Navbar() {
    return (
        <main className="flex justify-between">
            <div>
            <Image src="/images/avatar.svg"
            width="50"
            height="50"
            alt="zainab-avatar" />
            </div>
            <div>
                <Link href="/">Home</Link>
                <Link href="/">Projects</Link>
                <Link href="/">Contacts</Link>
            </div>
        </main>
    );
}
