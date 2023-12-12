// https://ui.mantine.dev/category/stats/

import { ThemeIcon, Progress, Text, Group, Badge, Paper, rem } from '@mantine/core';
// import { IconSwimming } from '@tabler/icons-react';
import classes from './StatsCard.module.css';

type StatsCardProps = {
  name?: string;
  target?: string;
  progress: {
    done: number;
    total: number;
    // percentageValue: number;
  },
  timeLeft?: number;

}

export function StatsCard({
  name,
  target, // eg. 32 km / week
  progress,
  timeLeft,

}: StatsCardProps) {
  const progressValue = Math.round(progress?.done / progress?.total * 100);

  return (
    <Paper radius="md" withBorder className={classes.card} mt={20}>
      <ThemeIcon className={classes.icon} size={60} radius={60}>
        {/* <IconSwimming style={{ width: rem(32), height: rem(32) }} stroke={1.5} /> */}
      </ThemeIcon>

      <Text ta="center" fw={700} className={classes.title}>
        {name}
      </Text>
      <Text c="dimmed" ta="center" fz="sm">
        {target}
      </Text>

      <Group justify="space-between" mt="xs">
        <Text fz="sm" c="dimmed">
          Progress
        </Text>
        <Text fz="sm" c="dimmed">
          {progressValue}%
        </Text>
      </Group>

      <Progress value={62} mt={5} />

      <Group justify="space-between" mt="md">
        <Text fz="sm">Tasks: {progress.done} / {progress.total}</Text>
        <Badge size="sm">{timeLeft} left</Badge>
      </Group>
    </Paper>
  );
}