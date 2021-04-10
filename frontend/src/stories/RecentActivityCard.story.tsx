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

export const Created: Story<RecentActivityCardProps> = ({
  user = { id: 'test', username: 'Test User' },
  document = { id: 'test', name: 'Example Document' },
  time = '14:30',
  activity = 'created',
}) => (
  <div>
    <RecentActivityCard
      user={user}
      document={document}
      time={time}
      activity={activity}
    />
  </div>
);

export const Deleted: Story<RecentActivityCardProps> = ({
  user = { id: 'test', username: 'Test User' },
  document = { id: 'test', name: 'Example Document' },
  time = '14:30',
  activity = 'deleted',
}) => (
  <div>
    <RecentActivityCard
      user={user}
      document={document}
      time={time}
      activity={activity}
    />
  </div>
);

export const Shared: Story<RecentActivityCardProps> = ({
  user = { id: 'test', username: 'Test User' },
  document = { id: 'test', name: 'Example Document' },
  time = '14:30',
  activity = 'shared',
}) => (
  <div>
    <RecentActivityCard
      user={user}
      document={document}
      time={time}
      activity={activity}
    />
  </div>
);
