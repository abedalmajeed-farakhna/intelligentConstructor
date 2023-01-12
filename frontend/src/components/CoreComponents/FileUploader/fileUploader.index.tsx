import React from "react";
import { IFileUploaderProps } from "./fileUploader.types";
import { useDropzone } from "react-dropzone";
import useStyle from "./fileUploader.style";

const FileUploader: React.FC<IFileUploaderProps> = ({}) => {
  const classes = useStyle();
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map((file) => (
    <li key={file.name}>
      {file.name} - {file.size} bytes
    </li>
  ));
  return (
    <section onDrop={(acceptedFiles) => console.log(acceptedFiles)}>
      <section className={classes.rsgPreview60}>
        <div className={classes.dropzone} {...getRootProps()}>
          <input {...getInputProps()} />
          <p>Drag 'n' drop some files here, or click to select files</p>
        </div>

        <div>
          <aside>
            <h4>Files</h4>
            <ul>{files}</ul>
          </aside>
        </div>
      </section>
    </section>
  );
};
export default FileUploader;
