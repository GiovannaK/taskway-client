/* eslint-disable no-useless-return */
/* eslint-disable no-shadow */
/* eslint-disable no-nested-ternary */
import {
  Avatar,
  Box, Card, CardContent, Grid, IconButton, LinearProgress, TextField, Typography,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import SendIcon from '@material-ui/icons/Send';
import { useRouter } from 'next/router';
import {
  gql, useMutation, useQuery, useSubscription,
} from '@apollo/client';
import { toast } from 'react-toastify';
import useStyles from './styles';
import { Loading } from '../Loading';
import { MESSAGE_SUBSCRIPTION } from '../../utils/queries/messagesSubscriptions';
import { messageValidation } from '../../utils/messageValidation';

const QUERY_MESSAGES = gql`
  query messages($roomId: ID!, $workspaceId: ID!){
    messagesPerRoom(roomId: $roomId, workspaceId: $workspaceId){
      id
      userId
      body
      messages_user{
        firstName
        lastName
        profile{
          imageUrl
        }
      }
    }
}
`;

const CREATE_MESSAGE = gql`
  mutation createMessage($roomId: ID!, $body: String! $workspaceId: ID!){
  createMessage(roomId: $roomId, body: $body, workspaceId: $workspaceId){
    id
    roomId
    userId
    body
  }
}
`;

export const ChatMessage = () => {
  const classes = useStyles();
  const router = useRouter();
  const { id, roomId } = router.query;
  const [messages, setMessages] = useState([]);
  const [variables, setVariables] = useState({
    body: '',
  });

  const {
    error: errorSubscription, loading: loadingSubscription,
    data: { addMessage } = {},
  } = useSubscription(MESSAGE_SUBSCRIPTION, {
    variables: {
      roomId,
    },
  });

  const {
    error: errorQuery, loading: loadingQuery,
    data: { messagesPerRoom } = {},
  } = useQuery(QUERY_MESSAGES, {
    variables: {
      workspaceId: id,
      roomId,
    },
  });

  if (errorQuery) {
    <Loading />;
  }

  useEffect(() => {
    if (messagesPerRoom) {
      setMessages([...messagesPerRoom]);
    }
  }, [messagesPerRoom, addMessage]);

  useEffect(() => {
    if (addMessage) {
      addMessage.message.messages_user = addMessage.messages_user;
      addMessage.message.messages_user.profile = addMessage.profile;
      setMessages((messagesPerRoom) => [addMessage.message, ...messagesPerRoom]);
    }
  }, [addMessage]);

  const [messageCreate, { loading }] = useMutation(CREATE_MESSAGE, {
    update(_, __) {
      toast.info('Mensagem enviada!');
    },
    onError(err) {
      toast.error('Não foi possível enviar mensagem!');
    },
    refetchQueries: [
      {
        query: QUERY_MESSAGES,
        variables: {
          workspaceId: id,
          roomId,
        },
      },
    ],
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const hasInvalidFields = messageValidation(variables.body);

    if (hasInvalidFields) {
      return;
    }

    messageCreate({
      variables: {
        roomId,
        body: variables.body,
        workspaceId: id,
      },
    });
  };

  return (
    <Grid container justify="center">
      <Grid item xs={12} sm={12} md={10} lg={10} xl={10}>
        <Card variant="outlined" className={classes.card} square>
          <CardContent className={classes.cardContent}>
            <Box className={classes.messageBox}>
              <Grid container spacing={2}>
                {loadingQuery ? (<LinearProgress color="primary" />) : (
                  messages && messages.length ? (
                    messages.map((message) => (

                      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Card variant="outlined" className={classes.messageCard}>
                          <CardContent>
                            <Box display="flex" alignItems="center">
                              <Avatar
                                className={classes.avatar}
                                src={
                                  message.messages_user.profile
                                  && message.messages_user.profile.imageUrl
                                }
                              />
                              <Typography variant="h6" className={classes.messageText}>
                                {message && message.body}
                              </Typography>
                            </Box>
                          </CardContent>
                        </Card>
                      </Grid>
                    ))

                  ) : (
                    <Box
                      pt={10}
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      flexDirection="column"
                    >
                      <img className={classes.svg} src="../../../noMessages.svg" alt="message fallback" />
                      <Typography variant="h6" className={classes.fallback}>Sem mensagens</Typography>
                    </Box>
                  )
                )}
              </Grid>
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={12} md={10} lg={10} xl={10}>
        <Card square variant="outlined">
          <CardContent>
            <form onSubmit={handleSubmit}>
              <Grid container alignItems="center">
                <Grid item xs={10} sm={10} md={10} lg={10} xl={10}>
                  <TextField
                    className={classes.messageInput}
                    id="outlined-basic"
                    variant="outlined"
                    autoComplete="off"
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
      </Grid>
    </Grid>
  );
};
