import {stringToColor} from "./stringToColor";

export const stringAvatar = (name: string) => {
    return {
        sx: {
            bgcolor: stringToColor(name),
            width: 56,
            height: 56,
        },
        children: `${name.split(' ')[0][0].toUpperCase()}${name.split(' ')[0][1].toUpperCase()}`,
    };
}