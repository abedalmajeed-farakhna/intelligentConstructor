import React, { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { IFileProps, IFileUploaderProps } from "./fileUploader.types";
import useStyle from "./fileUploader.style";
import classNames from "classnames";
const FileUploader: React.FC<IFileUploaderProps> = ({ onChange, customClassName,label }) => {
  
  const classes = useStyle();
  const [files, setFiles] = useState<IFileProps[]>([]);

  const onDrop = useCallback((acceptedFiles) => {
    setFiles(
      acceptedFiles?.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    );
    onChange(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [],
    },
    onDrop,
  });

  const thumbs = files.map((file) => (
    <div className={classes.thumb} key={file.name}>
     
      <div className={classes.thumbInner}>
        <img
          src={file.preview}
          className={classes.img}
          //style={img}
          // Revoke data uri after image is loaded
          onLoad={() => {
            URL.revokeObjectURL(file.preview);
          }}
        />
      </div>
    </div>
  ));

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, []);

  return (
    <>
     {label &&<label> {label}</label>}
    <section className={ classNames(classes.rsgPreview60,customClassName)}>
      <div className={classes.dropzone} {...getRootProps()}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
      <aside className={classes.thumbsContainer}>{thumbs}</aside>
    </section>
    </>
  );
};
export default FileUploader;