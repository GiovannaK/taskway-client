import React, { useContext, useState } from 'react';
import {
  Grid, Card, CardContent, Box, Avatar,
  Typography, Toolbar, Button, Input, CircularProgress,
} from '@material-ui/core';
import { gql, useMutation } from '@apollo/client';
import { DropzoneDialog } from 'material-ui-dropzone';
import { toast } from 'react-toastify';
import useStyles from './styles';
import { GridComponent } from '../../GridComponent';
import { ProfileContext } from '../../../context/ProfileContext';

const UPLOAD_PROFILE_PICTURE = gql`
  mutation singleUpload($file: Upload!) {
    singleUpload(file: $file) {
      imageUrl
    }
  }

`;

export const ProfileInfoCard = ({ userProfile }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const { USER_PROFILE } = useContext(ProfileContext);
  const [uploadPicture, { loading }] = useMutation(UPLOAD_PROFILE_PICTURE, {
    update(_, __) {
      toast.info('Imagem adicionada com sucesso');
    },
    onError(err) {
      toast.error('Não foi possível adicionar imagem');
    },
    refetchQueries: [
      { query: USER_PROFILE },
    ],
  });
  return (
    <>
      <GridComponent>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
        >
          <Card className={classes.card} variant="outlined">
            <Grid container justify="center" alignItems="center">
              <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                <Card elevation={0}>
                  <CardContent>
                    {loading ? (
                      <CircularProgress />
                    ) : (

                      <Avatar
                        className={classes.avatar}
                        src={!userProfile.imageUrl ? '' : userProfile.imageUrl}
                        onClick={() => setOpen(true)}
                      />
                    )}
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                <Card elevation={0}>
                  <CardContent>
                    {!userProfile.user ? (
                      <></>
                    ) : (

                      <Typography
                        variant="h5"
                        className={classes.title}
                      >
                        {`${!userProfile.user.firstName ? '' : userProfile.user.firstName} ${!userProfile.user.lastName ? '' : userProfile.user.lastName}`}
                      </Typography>
                    )}
                    <Toolbar />
                    <Typography
                      variant="h6"
                      className={classes.bio}
                    >
                      {!userProfile.bio ? 'Escreva sobre você' : userProfile.bio}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </GridComponent>
      <DropzoneDialog
        acceptedFiles={['image/*']}
        cancelButtonText="cancelar"
        submitButtonText="enviar"
        maxFileSize={3145728}
        open={open}
        filesLimit={1}
        onClose={() => setOpen(false)}
        onSave={(files) => {
          const file = files[0];
          uploadPicture({ variables: { file } });
          setOpen(false);
        }}
        showPreviews
        showFileNamesInPreview
      />
    </>
  );
};
