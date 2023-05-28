import React, { useState, useEffect, useCallback } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Paper, CardActionArea, CardMedia, Grid, TableContainer, Table, TableBody, TableHead, TableRow, TableCell, Button, CircularProgress } from '@material-ui/core';
import cblogo1 from '../src/cblogo1.png';
import image from '../src/bg3.jpg';
import { DropzoneArea } from 'material-ui-dropzone';
import { common } from '@material-ui/core/colors';
import Clear from '@material-ui/icons/Clear';
import Remedies from './Remedies';
import Reminder from './Reminder';
import axios from 'axios';



const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(common.white),
    backgroundColor: common.white,
    '&:hover': {
      backgroundColor: '#945049',
      transform: 'translateY(-2px)', // Adjust the value as needed
      transition: 'transform 0.2s ease', // Adjust the transition duration as needed
    },
  },
}))(Button);


const useStyles = makeStyles((theme) => ({
  
  grow: {
    flexGrow: 1,
  },
  clearButton: {
    width: '-webkit-fill-available',
    borderRadius: '15px',
    padding: '15px 22px',
    color: '#000000a6',
    fontSize: '20px',
    fontWeight: 900,
  },
  root: {
    maxWidth: 345,
    flexGrow: 1,
  },
  media: {
    height: 400,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  gridContainer: {
    justifyContent: 'center',
    padding: '4em 1em 0 1em',
  },
  mainContainer: {
    backgroundImage: `url(${image})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    height: '93vh',
    marginTop: '8px',
  },
  imageCard: {
    margin: 'auto',
    maxWidth: 400,
    height: 'auto', // Allow the image card height to adjust based on the content
    backgroundColor: 'transparent',
    boxShadow: '0px 9px 70px 0px rgb(0 0 0 / 30%) !important',
    borderRadius: '15px',
    [theme.breakpoints.down('xs')]: {
      maxWidth: '100%', // Adjust the maximum width to fit smaller screens
    },
  },
  imageCardEmpty: {
    height: 'auto',
  },
  noImage: {
    margin: 'auto',
    width: 400,
    height: '400 !important',
  },
  input: {
    display: 'none',
  },
  uploadIcon: {
    background: 'white',
  },
  tableContainer: {
    backgroundColor: 'transparent !important',
    boxShadow: 'none !important',
  },
  table: {
    backgroundColor: 'transparent !important',
  },
  tableHead: {
    backgroundColor: 'transparent !important',
  },
  tableRow: {
    backgroundColor: 'transparent !important',
  },
  tableCell: {
    fontSize: '22px',
    backgroundColor: 'transparent !important',
    borderColor: 'transparent !important',
    color: '#000000a6 !important',
    fontWeight: 'bolder',
    padding: '1px 24px 1px 16px',
  },
  tableCell1: {
    fontSize: '14px',
    backgroundColor: 'transparent !important',
    borderColor: 'transparent !important',
    color: '#000000a6 !important',
    fontWeight: 'bolder',
    padding: '1px 24px 1px 16px',
  },
  tableBody: {
    backgroundColor: 'transparent !important',
  },
  text: {
    color: 'white !important',
    textAlign: 'center',
  },
  buttonGrid: {
    maxWidth: '416px',
    width: '100%',
  },
  detail: {
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  appbar: {
    background: '#68a24e',
    boxShadow: 'none',
    color: 'white',
  },
  loader: {
    color: '#be6a77 !important',
  },
  centerContent: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
  },
  diseaseBox: {
    backgroundColor: '#fe584c',
    padding: theme.spacing(2),
    borderRadius: theme.spacing(1),
    marginBottom: theme.spacing(2),
  },
  remedyBox: {
    
    padding: theme.spacing(2),
    borderRadius: theme.spacing(1),
    backgroundColor: '#fe584c ', 
  },
  text3D: {
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
    color: 'blue',
  },
  
}));

const ImageUpload = () => {
  const classes = useStyles();
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();
  const [data, setData] = useState();
  const [image, setImage] = useState(false);
  const [isLoading, setIsloading] = useState(false);
  const [disease, setDisease] = useState(null);

  const clearData = () => {
    setData(null);
    setImage(false);
    setSelectedFile(null);
    setPreview(null);
    setDisease(null);
  };

  const sendFile = useCallback(async () => {
    if (image) {
      let formData = new FormData();
      formData.append('file', selectedFile);
      try {
        const res = await axios.post('https://mango-detection.herokuapp.com/predict', formData);
        if (res.status === 200) {
          setData(res.data);
          setDisease(res.data.class);
        }
      } catch (error) {
        console.error('Error occurred while making the request:', error);
      }
      setIsloading(false);
    } else {
      setIsloading(false);
      setDisease('Unable to detect if not leaves of mango are uploaded.');
    }
  }, [image, selectedFile]);

  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }
    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);
  }, [selectedFile]);

  useEffect(() => {
    if (!preview) {
      return;
    }
    setIsloading(true);
    sendFile();
  }, [preview, sendFile]);


  const onSelectFile = (files) => {
    if (!files || files.length === 0) {
      setSelectedFile(undefined);
      setImage(false);
      setData(undefined);
      setDisease(null);
      return;
    }
    setSelectedFile(files[0]);
    setData(undefined);
    setImage(true);
  };

  let confidence = 0;
  if (data) {
    confidence = (parseFloat(data.confidence) * 100).toFixed(2);
  }

  return (
    <React.Fragment>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            Mango Leaf Disease Detection
          </Typography>
          <div className={classes.grow} />
          <Avatar src={cblogo1} />
        </Toolbar>
      </AppBar>
      <Container maxWidth={false} className={classes.mainContainer} disableGutters={true}>
        <Grid
        
          className={classes.gridContainer}
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <Grid item xs={12}>
            <Card className={`${classes.imageCard} ${!image ? classes.imageCardEmpty : ''}`}>
              {image && (
                <CardActionArea>
                  <CardMedia component="img" alt="Selected" height="100%" image={preview} title="Selected" />
                </CardActionArea>
              )}
              {!image && (
                <CardContent className={classes.noImage}>
                  <Reminder />
                  {/* ... Existing code */}
                </CardContent>
              )}
              {!image && (
                <CardContent className={classes.noImage}>
                  <DropzoneArea
                    dropzoneText="Drag and drop an image here or click"
                    onChange={(files) => onSelectFile(files)}
                    acceptedFiles={['image/*']}
                    filesLimit={1}
                    showPreviewsInDropzone={false}
                    showPreviews={true}
                    previewText=""
                    showAlerts={false}
                    dropzoneClass={classes.dropzone}
                    dropzoneParagraphClass={classes.dropzoneText}
                    previewGridClasses={{ container: classes.previewContainer }}
                    previewChipProps={{
                      classes: { root: classes.previewChip },
                    }}
                  />
                </CardContent>
              )}
            </Card>
          </Grid>
          {isLoading && (
            <Grid item xs={12}>
              <div className="loader-wrapper">
                <CircularProgress className={classes.loader} size={80} />
              </div>
            </Grid>
          )}
          {!isLoading && data && (
            <Grid item xs={12}>
              <div className={classes.detail}></div>

              <TableContainer className={classes.tableContainer} component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                  <TableHead className={classes.tableHead}>
                    <TableRow className={classes.tableRow}>
                      <TableCell className={classes.tableCell} align="left">
                      
                      </TableCell>
                      <TableCell className={classes.tableCell} align="left">
                        
                      </TableCell>
                      <TableCell className={classes.tableCell} align="left">
                       
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody className={classes.tableBody}>
                    <TableRow>
                      <TableCell className={classes.tableCell} align="left">
                       
                      </TableCell>
                      <TableCell className={classes.tableCell} align="left">
                        
                      </TableCell>
                      <TableCell className={classes.tableCell} align="left">
                        
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          )}
           {!isLoading && data && (
            <Grid item xs={12} md={6}>
              <div className={classes.diseaseBox}>
                <Typography variant="h6" gutterBottom>
                  Disease Detected: {disease}
                </Typography>
                <Typography variant="subtitle1">Confidence: {confidence}%</Typography>
              </div>
              <div className={classes.remedyBox}>
                <Typography variant="h6" gutterBottom>
                  Remedies:
                </Typography>
                <Remedies disease={disease} />
              </div>
              <div>
                <div className="thm-btn main-slider__btn" style={{ width: '100%' }}>
                  <ColorButton
                    variant="contained"
                    color="primary"
                    className={classes.clearButton}
                    onClick={() => clearData()}
                    endIcon={<Clear />}
                  >
                    Clear
                  </ColorButton>
                </div>
              </div>
            </Grid>
          )}
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default ImageUpload;
