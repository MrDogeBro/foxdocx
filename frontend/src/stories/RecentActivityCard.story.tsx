import React from 'react';
import { Story } from '@storybook/react';
import {
  RecentActivityCard,
  RecentActivityCardProps,
} from '@ui/RecentActivityCard';

export default {
  title: 'RecentActivityCard',
  component: RecentActivityCard,
};

let today = new Date();
let testDate = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate(),
  14,
  25,
  51,
  0
).toISOString();

export const Created: Story<RecentActivityCardProps> = ({
  user = { id: 'test', username: 'Test User' },
  document = { id: 'test', name: 'Example Document' },
  date = testDate,
  activity = 'created',
}) => (
  <div className="storybook-w-17">
    <RecentActivityCard
      user={user}
      document={document}
      date={date}
      activity={activity}
    />
  </div>
);

export const Deleted: Story<RecentActivityCardProps> = ({
  user = { id: 'test', username: 'Test User' },
  document = { id: 'test', name: 'Example Document' },
  date = testDate,
  activity = 'deleted',
}) => (
  <div className="storybook-w-17">
    <RecentActivityCard
      user={user}
      document={document}
      date={date}
      activity={activity}
    />
  </div>
);

export const Shared: Story<RecentActivityCardProps> = ({
  user = { id: 'test', username: 'Test User' },
  document = { id: 'test', name: 'Example Document' },
  date = testDate,
  activity = 'shared',
}) => (
  <div className="storybook-w-17">
    <RecentActivityCard
      user={user}
      document={document}
      date={date}
      activity={activity}
    />
  </div>
);
