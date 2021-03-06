import { HStack, Text } from '@metafam/ds';
import { PlayerFragmentFragment } from 'graphql/autogen/types';
import React from 'react';
import { FaMedal } from 'react-icons/fa';

import { PlayerBox } from './PlayerBoxe';

// TODO Fake data
type Props = { player: PlayerFragmentFragment; setRemoveBox: () => void };
export const PlayerAchievements: React.FC<Props> = ({
  player,
  setRemoveBox,
}) => {
  const [show, setShow] = React.useState(false);
  const fakeData = [
    'Founding Father of MetaGame',
    'Summoner of Meta Fam',
    'Dragon Quests Quest',
  ];

  return (
    <PlayerBox title="Achievements" setRemoveBox={setRemoveBox}>
      {(fakeData || []).slice(0, show ? 999 : 3).map((title) => (
        <HStack alignItems="baseline" mb={3}>
          <FaMedal color="#FBB112" />
          <Text fontSize="md">{title}</Text>
        </HStack>
      ))}
      {(player.daohausMemberships || []).length > 3 && (
        <Text
          as="span"
          fontFamily="body"
          fontSize="xs"
          color="cyanText"
          cursor="pointer"
          onClick={() => setShow(!show)}
        >
          View {show ? 'less' : 'all'}
        </Text>
      )}
    </PlayerBox>
  );
};
