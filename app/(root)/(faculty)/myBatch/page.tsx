
import MyBatch from "@/components/shared/MyBatch";
import { getUniqueId } from "@/lib/actions/faculty.actions";
import { auth, clerkClient } from "@clerk/nextjs";




export default async function myBatch() {
  const { sessionClaims  } = auth();
  const userId = sessionClaims?.userId as string;
  const user = await clerkClient.users.getUser(userId);
  const userDbId = user.publicMetadata?._id as string;  
  console.log(userDbId)
  const uniqId = await getUniqueId(userDbId) 
  return (
    <>
      <section>
        <MyBatch uniqId={uniqId} />
      </section>
    </>
      
  );
}
