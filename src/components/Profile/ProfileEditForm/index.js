import React, { useContext, useState, useEffect } from 'react';
import {
  Grid, Toolbar, Card, CardContent,
  Typography,
  InputLabel,
  InputAdornment,
  Input,
  Icon,
  Button,
} from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import GroupIcon from '@material-ui/icons/Group';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import EditIcon from '@material-ui/icons/Edit';
import EmailIcon from '@material-ui/icons/Email';
import { toast } from 'react-toastify';
import { gql, useMutation } from '@apollo/client';
import useStyles from './styles';
import { ProfileContext } from '../../../context/ProfileContext';
import { updateProfileValidation } from '../../../utils/updateProfileValidation';

const EDIT_USER_INFO = gql`
  mutation profile($bio: String $firstName: String! $lastName: String! $email: String! ) {
  updateProfile(bio: $bio, firstName: $firstName lastName: $lastName email: $email) {
    bio
    user{
      email
      firstName
      lastName
    }
  }
}
`;

export const ProfileEditForm = () => {
  const classes = useStyles();
  const { userProfile, USER_PROFILE } = useContext(ProfileContext);
  const [variables, setVariables] = useState({
    firstName: '',
    lastName: '',
    bio: '',
    email: '',
  });

  const [updateUserInfo, { loading }] = useMutation(EDIT_USER_INFO, {
    update(_, __) {
      toast.info('Informações atualizadas com sucesso');
    },
    onError(err) {
      toast.error('Não foi possível atualizar suas informações');
    },
    refetchQueries: [
      { query: USER_PROFILE },
    ],
  });

  useEffect(() => {
    if (userProfile && userProfile.user) {
      setVariables({
        ...variables,
        email: userProfile.user.email,
        lastName: userProfile.user.lastName,
        bio: userProfile.bio,
        firstName: userProfile.user.firstName,
      });
    }
  }, [userProfile]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const invalidFields = updateProfileValidation(
      variables.firstName,
      variables.lastName,
      variables.email,
    );

    if (invalidFields) {
      return;
    }
    updateUserInfo({ variables });
  };

  return (
    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
      <Card variant="outlined" className={classes.card}>
        <CardContent>
          <Typography
            variant="h6"
            className={classes.infoTitle}
            align="center"
          >
            <Icon>
              <EditIcon />
            </Icon>
            Minhas Informações
          </Typography>
          <Toolbar />
          <form onSubmit={handleSubmit}>
            <Grid
              container
              spacing={1}
              align="center"
              justify="center"
            >
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <InputLabel
                  htmlFor="firstName"
                  className={classes.label}
                >
                  Primeiro Nome
                </InputLabel>
                <Input
                  id="firstName"
                  startAdornment={(
                    <InputAdornment position="start">
                      <PersonIcon className={classes.icon} />
                    </InputAdornment>
                  )}
                  className={classes.input}
                  value={variables.firstName}
                  onChange={(e) => setVariables({ ...variables, firstName: e.target.value })}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <InputLabel
                  htmlFor="lastName"
                  className={classes.label}
                >
                  Último Nome
                </InputLabel>
                <Input
                  id="lastName"
                  startAdornment={(
                    <InputAdornment position="start">
                      <GroupIcon className={classes.icon} />
                    </InputAdornment>
                )}
                  className={classes.input}
                  value={variables.lastName}
                  onChange={(e) => setVariables({ ...variables, lastName: e.target.value })}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <InputLabel
                  htmlFor="email"
                  className={classes.label}
                >
                  E-mail
                </InputLabel>
                <Input
                  id="email"
                  startAdornment={(
                    <InputAdornment position="start">
                      <EmailIcon className={classes.icon} />
                    </InputAdornment>
                )}
                  className={classes.input}
                  value={variables.email}
                  onChange={(e) => setVariables({ ...variables, email: e.target.value })}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <InputLabel
                  htmlFor="bio"
                  className={classes.label}
                >
                  Biografia
                </InputLabel>
                <Input
                  id="bio"
                  multiline
                  startAdornment={(
                    <InputAdornment position="start">
                      <ImportContactsIcon className={classes.icon} />
                    </InputAdornment>
                )}
                  className={classes.input}
                  value={variables.bio}
                  onChange={(e) => setVariables({ ...variables, bio: e.target.value })}
                />
              </Grid>
            </Grid>
            <Toolbar />
            <Button type="submit" variant="outlined" className={classes.button}>
              Atualizar
            </Button>
          </form>
        </CardContent>
      </Card>
    </Grid>
  );
};
