/* eslint-disable no-shadow */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-useless-return */
import React, { useState, useEffect } from 'react';
import {
  Box, Grid, Card, Toolbar,
  CardContent, Avatar, Typography, TextField, Button,
  IconButton,
} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import { useRouter } from 'next/router';
import {
  gql, useMutation, useQuery, useSubscription,
} from '@apollo/client';
import { toast } from 'react-toastify';
import moment from 'moment';
import useStyles from './styles';
import { COMMENT_SUBSCRIPTIONS } from '../../../utils/queries/commentsSubscription';
import { Loading } from '../../Loading';
import { commentValidation } from '../../../utils/createCommentValidation';

const COMMENTS_BY_TASK = gql`
  query commentsByTask($taskId: ID!, $workspaceId: ID!){
  commentsByTask(taskId: $taskId, workspaceId: $workspaceId){
    id
    body
    createdAt
    updatedAt
    author{
      firstName
      lastName
      profile{
        imageUrl
      }
    }

  }
}
`;

const CREATE_COMMENT = gql`
  mutation createComment($workspaceId: ID!, $taskId: ID!, $body: String!){
  createComment(workspaceId: $workspaceId, taskId: $taskId body: $body){
    id
  }
}
`;

export const CommentsCard = () => {
  const classes = useStyles();
  const router = useRouter();
  const [variables, setVariables] = useState({
    body: '',
  });
  const [comments, setComments] = useState([]);
  const { id, taskId } = router.query;

  const {
    error: errorSubscription, loading: loadingSubscription,
    data: { addComment } = {},
  } = useSubscription(COMMENT_SUBSCRIPTIONS, {
    variables: {
      taskId,
    },
  });

  const {
    error: errorQuery, loading: loadingQuery,
    data: { commentsByTask } = {},
  } = useQuery(COMMENTS_BY_TASK, {
    variables: {
      workspaceId: id,
      taskId,
    },
  });

  useEffect(() => {
    if (commentsByTask) {
      setComments([...commentsByTask]);
    }
  }, [commentsByTask, addComment]);

  useEffect(() => {
    if (addComment) {
      addComment.comment.author = addComment.author;
      addComment.comment.author.profile = addComment.profile;
      setComments((commentsByTask) => [addComment.comment, ...commentsByTask]);
    }
  }, [addComment]);

  if (errorQuery) {
    <Loading />;
  }

  const [commentCreate, { loading }] = useMutation(CREATE_COMMENT, {
    update(_, __) {
      toast.info('Comentário adicionado');
    },
    onError(err) {
      toast.error('Não foi possível adicionar comentário');
    },
    refetchQueries: [
      {
        query: COMMENTS_BY_TASK,
        variables: {
          workspaceId: id,
          taskId,
        },
      },
    ],
  });

  if (errorSubscription) {
    <Loading />;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const hasInvalidFields = commentValidation(variables.body);

    if (hasInvalidFields) {
      return;
    }

    commentCreate({
      variables: {
        workspaceId: id,
        body: variables.body,
        taskId,
      },
    });
  };
  return (
    <>
      <Card className={classes.card} variant="outlined">
        <CardContent>
          {loadingQuery ? (<Loading />) : (

            commentsByTask && commentsByTask.length ? (
              comments.map((comment) => (

                <div key={comment.id}>
                  <Box display="flex" alignItems="center">
                    <Avatar
                      className={classes.avatar}
                      src={comment.author.profile
                    && comment.author.profile.imageUrl}
                    />
                    <Typography variant="h6" className={classes.name}>
                      {comment && `${comment.author.firstName} ${comment.author.lastName}`}
                    </Typography>
                    <Typography variant="h6" className={classes.date}>
                      {comment && moment.unix(comment.createdAt / 1000).format('DD/MM/YYYY')}
                    </Typography>
                  </Box>
                  <Typography align="left" className={classes.message}>
                    {comment && comment.body}
                  </Typography>
                </div>
              ))

            ) : (
              <Typography variant="h6">Nenhum comentário adicionado</Typography>
            )
          )}
        </CardContent>
      </Card>
      <Card variant="outlined" className={classes.card}>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <Grid container alignItems="center">
              <Grid item xs={10} sm={10} md={10} lg={10} xl={10}>
                <TextField
                  className={classes.messageInput}
                  id="outlined-basic"
                  variant="outlined"
                  value={variables.body}
                  onChange={(e) => setVariables({ ...variables, body: e.target.value })}
                />
              </Grid>
              <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
                <IconButton
                  className={classes.button}
                  type="submit"
                >
                  <SendIcon />
                </IconButton>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </>
  );
};
