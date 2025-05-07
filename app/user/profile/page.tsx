import { auth } from '@/auth';
import ProfileForm from '@/components/form/profile-form';
import { Metadata } from 'next';
import { SessionProvider } from 'next-auth/react';

const metadata: Metadata = {
  title: 'Profile',
  description: 'Profile',
};

const Profile = async () => {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <div className="max-w-md mx-auto space-y-4">
        <h2 className="h2-bold">Profile</h2>
        <ProfileForm />
      </div>
    </SessionProvider>
  );
};

export default Profile;
