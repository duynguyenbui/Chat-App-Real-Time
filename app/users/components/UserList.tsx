'use client';

import { User } from '@prisma/client';
import UserBox from './UserBox';

interface USerListProps {
  items: User[];
}

const UserList: React.FC<USerListProps> = ({ items }) => {
  return (
    <aside className="fixed inset-y-0 pb-20 lg:pb-0 lg:w-80 lg:left-20 lg:block overflow-y-auto border-r border-gray-100 block w-full left-0">
      <div className="px-5">
        <div className="flex flex-col">
          <div className="text-2xl font-bold text-neutral-800 py-4">People</div>
        </div>
        {items.map((item) => (
          <UserBox key={item.id} data={item} />
        ))}
      </div>
    </aside>
  );
};

export default UserList;
