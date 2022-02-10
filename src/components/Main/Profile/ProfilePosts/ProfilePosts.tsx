import React from "react";
import s from "./ProfilePosts.module.scss"
import {Post} from "./Post/Post";
import {postType} from "../../../../store/state";
import {Button, TextField, Typography} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";


type ProfilePostsPropsType = {
    postList: postType[]
    dispatch: (action: any) => void
    newPost: string
}

export const ProfilePosts: React.FC<ProfilePostsPropsType> = ({dispatch ,newPost,  postList}) => {
    const mappedPosts = postList.map((p: postType) => (

        <Post
            key={p.id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            data={p}
        />


    ))

    const onClickAddPostHandler = () => {
        dispatch({type: 'ADD-POST'})
    }
    const onChangePostHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({type: 'UPDATE-POST', newPostText: e.currentTarget.value})
    }
    return (
        <div className={s.posts__wrapper}>
            <Typography variant="h2" gutterBottom sx={{fontSize: 40}}> My Posts</Typography>
            <Grid container spacing={1}>
                <Grid item>
                    <TextField value={newPost} onChange={onChangePostHandler} multiline label="Write new post"
                               rows={2}/>
                </Grid>
                <Grid item sx={{alignSelf: 'flex-end'}}>
                    <Button onClick={onClickAddPostHandler} variant="contained" endIcon={<SendIcon/>}>
                        Send
                    </Button>
                </Grid>

            </Grid>
            <List sx={{width: '100%', maxWidth: 460, bgcolor: 'background.paper'}}>
                {mappedPosts}
            </List>
        </div>

    )
}