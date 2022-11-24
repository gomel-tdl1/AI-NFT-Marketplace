import React, { FC, useState } from 'react';

import ASCIIIcon from '../../assets/cards/ASCII.png';
import { FlipCard } from '../../components/common/FlipCard';
import { Input } from '../../components/common/Input';

export const Index: FC = React.memo(() => {
  const [textQuery, setTextQuery] = useState<string>('');
  return (
    <div>
      <Input value={textQuery} onChange={(e) => setTextQuery(e.target.value)} />

      <FlipCard
        icon={ASCIIIcon}
        title="ASCII"
        description="Create NFT from your ASCII image or photo"
        onClick={() => {
          return;
        }}
      />
    </div>
  );
});
