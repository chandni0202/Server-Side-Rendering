import Link from 'next/link';
import Image from '../components/images';
const Index = () => {
    return<div>
        test

        <Link href="/name">
        <a>Name</a></Link>
        <Image />
        <Link href="/robots">
        <a>Robots</a></Link>
        <Image />
    </div>
}

export default Index;