//Time Ago moment

import moment from "moment";

export const timeAgo = (timestamp: string) => moment(timestamp).fromNow();
