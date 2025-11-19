import { auth } from '@/lib/better-auth/auth';
import { headers } from 'next/headers';
import { useRouter } from 'next/navigation';
import Header from './sections/header';

const HeaderFixed = async () => {
    const router = useRouter()
    const session = await auth.api.getSession({ headers: await headers() });

    if (!session?.user) return router.refresh;
    const user = {
        id: session.user.id,
        name: session.user.name,
        email: session.user.email,
    }

    return (
        <Header user={user} />
    )
}

export default HeaderFixed