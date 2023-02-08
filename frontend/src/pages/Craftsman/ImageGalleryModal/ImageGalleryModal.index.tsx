import React, { useEffect, useState } from "react";
import axios from "axios";
import { DialogContent, Grid } from "@mui/material";

import FormDialog from "../../../components/CoreComponents/FormDialog/formDialog.index";

import useStyles from "./ImageGalleryModal.style";
import { IDataProps, IImageGalleryModalProps } from "./ImageGalleryModal.type";

const ImageGalleryModal: React.FC<IImageGalleryModalProps> = ({
  requestId,
  onHide,
}) => {
  const classes = useStyles();
  const [data, setData] = useState<IDataProps[]>([]);

  useEffect(() => {
    axios
      .get(`/Craftsman/GetImageList?requestId=${requestId}`)
      .then((result) => {
        setData(result.data);
      });
  }, []);

  return (
    <FormDialog
      customClassName={classes.majeedpopup}
      //  customClassName={classes.majeedpopup}
      title={"Image galary"}
      isOpen={true}
      onClose={onHide}
    >
      <DialogContent>
        {data.length > 0
          ? data?.map((element, key) => (
              <div>
                <h1> {element.title}</h1>

                <Grid container spacing={2}>
                  {element.imageList.map((item) => (
                    <Grid className={classes.imageListItem}>
                      <img
                        className={classes.image}
                        width={50}
                        height={50}
                        src={`/Upload/ImageGallery/${item.imageName}`}
                        srcSet={`/Upload/ImageGallery/${item.imageName}`}
                        alt={""}
                        loading="lazy"
                      />
                    </Grid>
                  ))}
                </Grid>
              </div>
            ))
          : "no image found"}
      </DialogContent>
    </FormDialog>
  );
};
export default ImageGalleryModal;
