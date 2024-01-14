'use client';
import { useSession} from "next-auth/react";

export default function Profile(){
  const session = useSession();

  if(session.data?.user){
    return <div>From Client,  signed In</div>
  }
  return <div> From Client, Not Signed</div>
}
