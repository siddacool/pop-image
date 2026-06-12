import { createDate } from '@flightlesslabs/time-utils';

export function getProFicDetails(imageUrl: string) {
  const moment = createDate();
  const createdAtDate = moment.format(`YYYY-MM-DDH`);
  const createdAtTime = moment.format(`HH:mm`);
  const createdAt = `${createdAtDate}T${createdAtTime}`;
  const zettleId = moment.format('YYYYMMDDHHmm');
  const formattedDate = moment.format('MMM DD YYYY');

  const details = `---
tags:
  - projectFiction
Created at: ${createdAt}
---
# Pro fic, ${formattedDate}

![image](${imageUrl})

${zettleId}`;

  return details;
}
