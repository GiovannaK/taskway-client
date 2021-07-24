import {
  Box, CardContent, Grid, Card, Chip, Avatar,
  Typography,
  CardHeader,
  Divider,
} from '@material-ui/core';
import React from 'react';
import { useRouter } from 'next/router';
import useStyles from '../../../styles/permissions';
import { PaperComponent } from '../../../components/PaperComponent';
import Layout from '../../../components/Layout';
import { TopBar } from '../../../components/TopBar';
import { AddPermissionForm } from '../../../components/permissions/AddPermissionForm';

const permissions = () => {
  const router = useRouter();
  const { id } = router.query;
  const classes = useStyles();
  const permission = `Permission ${id}`;
  return (
    <>
      <PaperComponent>
        <TopBar />
        <Layout>
          <Box pt={10}>
            <Grid container spacing={1} justify="center">
              <Grid item xs={12} sm={12} md={10} lg={6} xl={6}>
                <Card className={classes.card}>
                  <CardHeader
                    titleTypographyProps={{ variant: 'h5' }}
                    title="Gerenciar Permissões"
                    align="center"
                    classes={{ title: classes.headerTitle }}
                  />
                  <Divider />
                  <CardContent>
                    <Box align="center" pb={2}>
                      <Typography
                        variant="h6"
                        className={classes.title}
                        align="center"
                      >
                        Pode adicionar
                      </Typography>
                      <Chip
                        className={classes.avatar}
                        avatar={<Avatar>M</Avatar>}
                        label="Allan A"
                        clickable
                      />
                      <Chip
                        className={classes.avatar}
                        avatar={<Avatar>M</Avatar>}
                        label="Allan A"
                        clickable
                      />
                      <Chip
                        className={classes.avatar}
                        avatar={<Avatar>M</Avatar>}
                        clickable
                        label="Allan A"
                      />
                    </Box>
                    <Box align="center" pb={2}>
                      <Typography
                        variant="h6"
                        className={classes.title}
                        align="center"
                      >
                        Pode editar
                      </Typography>
                      <Chip
                        className={classes.avatar}
                        avatar={<Avatar>M</Avatar>}
                        label="Allan A"
                        clickable
                      />
                      <Chip
                        className={classes.avatar}
                        avatar={<Avatar>M</Avatar>}
                        label="Allan A"
                        clickable
                      />
                      <Chip
                        className={classes.avatar}
                        avatar={<Avatar>M</Avatar>}
                        clickable
                        label="Allan A"
                      />
                    </Box>
                    <Box align="center">
                      <Typography
                        variant="h6"
                        className={classes.title}
                        align="center"
                      >
                        Pode excluir
                      </Typography>
                      <Chip
                        className={classes.avatar}
                        avatar={<Avatar>M</Avatar>}
                        label="Allan A"
                        clickable
                      />
                      <Chip
                        className={classes.avatar}
                        avatar={<Avatar>M</Avatar>}
                        label="Allan A"
                        clickable
                      />
                      <Chip
                        className={classes.avatar}
                        avatar={<Avatar>M</Avatar>}
                        clickable
                        label="Allan A"
                      />
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={12} md={10} lg={6} xl={6}>
                <AddPermissionForm />
              </Grid>
            </Grid>
          </Box>
        </Layout>
      </PaperComponent>
    </>
  );
};

export default permissions;
