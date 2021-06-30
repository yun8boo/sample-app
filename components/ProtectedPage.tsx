import { ReactNode } from 'react';
import { signIn, useSession } from 'next-auth/client';

type Props = {
  children?: ReactNode
}

const ProtectedPage = ({children}: Props) => {
  const [session, loading] = useSession()
  if(loading) return null

  if(!loading && !session) {
    return <button  onClick={() => signIn('google')}>Sign in with Google</button>
  }
  return (
    <div>
      {children}
    </div>
  )
}

export default ProtectedPage