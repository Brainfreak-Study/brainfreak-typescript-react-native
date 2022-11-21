import moment from "moment";

export const dateFormatter = (timestamp: string, format?: string) => {
    return moment(timestamp).format(format ? format : "Do MMMM YYYY");
};
