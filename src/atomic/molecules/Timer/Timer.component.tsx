import { Spacing, Text } from '@atomic';
import dayjs from 'dayjs';
import React, { useCallback, useEffect, useState } from 'react';

import styles from './Timer.module.scss';

type TimerProps = {
  date: Date;
};

export const Timer: React.FC<TimerProps> = ({ date }) => {
  const [hours, setHours] = useState<string>('00');
  const [minutes, setMinutes] = useState<string>('00');
  const [seconds, setSeconds] = useState<string>('00');

  const getTime = useCallback(() => {
    const todaysDate = dayjs();
    const parsedDate = dayjs(date);
    const differenceBetweenDateAndToday = parsedDate.diff(todaysDate);
    const diffHours = dayjs(differenceBetweenDateAndToday).hour();
    const diffMinutes = dayjs(differenceBetweenDateAndToday).minute();
    const diffSeconds = dayjs(differenceBetweenDateAndToday).second();

    setHours(diffHours < 10 ? '0' + diffHours : diffHours.toString());
    setMinutes(diffMinutes < 10 ? '0' + diffMinutes : diffMinutes.toString());
    setSeconds(diffSeconds < 10 ? '0' + diffSeconds : diffSeconds.toString());
  }, [date]);

  useEffect(() => {
    const interval = setInterval(getTime, 1000);
    return () => clearInterval(interval);
  }, [getTime]);

  return (
    <div className={styles.timer}>
      <Spacing bottom='xs'>
        <Text variant='caption' font='spaceMono'>
          Auction ends in:
        </Text>
      </Spacing>

      <div className={styles.time}>
        <Text aria='hours' variant='h3' font='spaceMono'>
          {hours}:
          <Spacing top='xs'>
            <Text variant='caption' font='spaceMono'>
              Hours
            </Text>
          </Spacing>
        </Text>
        <Text aria='minutes' variant='h3' font='spaceMono'>
          {minutes}:
          <Spacing top='xs'>
            <Text variant='caption' font='spaceMono'>
              Minutes
            </Text>
          </Spacing>
        </Text>
        <Text aria='seconds' variant='h3' font='spaceMono'>
          {seconds}
          <Spacing top='xs'>
            <Text variant='caption' font='spaceMono'>
              Seconds
            </Text>
          </Spacing>
        </Text>
      </div>
    </div>
  );
};
