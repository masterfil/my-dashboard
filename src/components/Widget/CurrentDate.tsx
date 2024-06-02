import { Text } from "../Common/Typography";

export const CurrentDate = () => {
    const date = new Date()
    const currentDate = date.toDateString()

    return (
        <Text>{currentDate}</Text>
    );
};

