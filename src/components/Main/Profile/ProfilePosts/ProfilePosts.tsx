import React from "react";
import s from "./ProfilePosts.module.scss"
import {Post} from "./Post/Post";
import { postType } from "../../../../store/state";
import {Button, Card, TextField, Typography} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import {addPostAC, ProfileActionTypes, updatePostTextAC} from "../../../../store/profileReducer";


type ProfilePostsPropsType = {
    postList: postType[]
    dispatch: (action: ProfileActionTypes) => void
    newPost: string
}

export const ProfilePosts: React.FC<ProfilePostsPropsType> = ({dispatch, newPost, postList}) => {
    const mappedPosts = postList.map((p: postType) => (

        <Post
            key={p.id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            data={p}
        />


    ))

    const onClickAddPostHandler = () => {
        dispatch(addPostAC())
    }
    const onChangePostHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(updatePostTextAC(e.currentTarget.value))
    }
    return (
        <div className={s.posts__wrapper}>
            <Typography variant="h2" gutterBottom sx={{fontSize: 40}}> My Posts</Typography>
            <Grid container spacing={1}>
                <Grid item xs={4}>
                    <TextField value={newPost} onChange={onChangePostHandler} multiline label="Write new post"
                               rows={5} fullWidth/>
                    <Button sx={{width: '100%'}} onClick={onClickAddPostHandler} variant="contained"
                            endIcon={<SendIcon/>}>
                        Publish
                    </Button>
                </Grid>
                <Grid item xs={8} sx={{alignSelf: 'flex-end'}}>
                    <Card variant="outlined">
                        <List sx={{width: '100%', maxWidth: '700px', bgcolor: 'background.paper'}}>
                            {mappedPosts}
                        </List>
                    </Card>

                </Grid>

            </Grid>

        </div>

    )
}