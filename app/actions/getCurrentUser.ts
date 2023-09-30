import prismadb from '@/app/libs/prismadb';
import getSession from './getSession';

const getCurrentUser = async () => {
  try {
    const seesion = await getSession();

    if (!seesion?.user?.email) {
      return null;
    }

    const currentUser = await prismadb.user.findUnique({
      where: {
        email: seesion.user.email as string,
      },
    });

    if (!currentUser) {
      return null;
    }

    return currentUser;
  } catch (error) {
    return null;
  }
};

export default getCurrentUser;