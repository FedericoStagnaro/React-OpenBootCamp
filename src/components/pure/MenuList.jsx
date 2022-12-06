import { ListItem, List, ListItemIcon, ListItemText } from "@mui/material";

import { HomeIcon, Settings, TaskSharpIcon } from '@mui/icon-material/'
import { useNavigate } from "react-router-dom";

const getIcon = (icon) => {
    switch (icon) {
        case 'HOME':
            return (<HomeIcon></HomeIcon>)
        case 'SETTINGS':
            return (<Settings></Settings>)
        case 'TASK':
            return (<TaskSharpIcon></TaskSharpIcon>)
        default:
            return (<HomeIcon></HomeIcon>)
    }
}

export default function MenuList({ list }) {
    const navigate = useNavigate

    return (
        <List>
            {list.map(({ text, path, icon }, index) => {
                <ListItem key={index} button onClick={()=> navigate(path)}>
                    <ListItemIcon>{getIcon(icon)}</ListItemIcon>
                    <ListItemText primary={text}></ListItemText>
                </ListItem>
            })}
        </List>
    )
}
