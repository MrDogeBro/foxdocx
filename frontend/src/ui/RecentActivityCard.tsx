import React from 'react';
import { replaceMultiple } from '@utils/string';

const activityTypes = {
  created: 'You created {document}.',
  deleted: 'You deleted {document}.',
  shared: '{user} shared {document} with you.',
};

type UserProps = {
  id: string;
  username: string;
};

type DocumentProps = {
  id: string;
  name: string;
};

export type RecentActivityCardProps = {
  user: UserProps;
  document: DocumentProps;
  date: Date;
  activity: keyof typeof activityTypes;
  onClick?: () => void;
};

export const RecentActivityCard: React.FC<RecentActivityCardProps> = ({
  user,
  document,
  date,
  activity,
  onClick,
}) => {
  const replaceMap = new Map<string, string>([
    ['{user}', user.username],
    ['{document}', document.name],
  ]);

  let activityString = replaceMultiple(activityTypes[activity], replaceMap);

  return (
    <div className="bg-primary-700 flex rounded-md items-center">
      <p className="text-primary-400 flex py-1 px-2 text-md">
        {activityString}
      </p>
    </div>
  );
};
