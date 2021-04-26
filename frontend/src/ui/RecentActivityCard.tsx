import React from 'react';
import { replaceMultiple } from '@utils/string';
import { from24Hour } from '@utils/time';

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
  date: string;
  activity: keyof typeof activityTypes;
  onClick?: () => void;
};

const formatTimestamp = (date: string): string => {
  let now = new Date();
  let storedDate = new Date(date);

  if (
    now.getDate() == storedDate.getDate() &&
    now.getMonth() == now.getMonth()
  ) {
    // @todo
    // get value from db for users profile
    let use24Hour = true;

    if (use24Hour) return `${storedDate.getHours()}:${storedDate.getMinutes()}`;
    else return from24Hour(storedDate.getHours(), storedDate.getMinutes());
  } else if (now.getFullYear() == now.getFullYear()) {
    return `${storedDate.getMonth()}/${storedDate.getDate()}`;
  }
  return `${storedDate.getFullYear()}`;
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
  let formattedTimestamp = formatTimestamp(date);

  return (
    <div className="bg-primary-700 flex rounded-md items-center">
      <p className="text-primary-400 flex py-1 px-2 text-md">
        {activityString}
        {formattedTimestamp}
      </p>
    </div>
  );
};
