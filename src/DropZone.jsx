import { useEffect, useState } from "react";

import Dropzone from "react-dropzone";

/* Example custom React-Dropzone component to test image drag and drop/image selection for form input */
function DropZone() {
  const thumbsContainer = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 16,
  };

  const thumb = {
    display: "inline-flex",
    borderRadius: 2,
    border: "1px solid #eaeaea",
    marginBottom: 8,
    marginRight: 8,
    width: 100,
    height: 100,
    padding: 4,
    boxSizing: "border-box",
  };

  const thumbInner = {
    display: "flex",
    minWidth: 0,
    overflow: "hidden",
  };

  const img = {
    display: "block",
    width: "auto",
    height: "100%",
  };
  const [files, setFiles] = useState([]);

  const thumbs = files.map((file) => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img
          src={file.preview}
          style={img}
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
  }, [files]);
  return (
    <Dropzone
      onDrop={(acceptedFiles) => {
        setFiles(
          acceptedFiles.map((file) =>
            Object.assign(file, {
              preview: URL.createObjectURL(file),
            }),
          ),
        );
        console.log(acceptedFiles);
      }}
    >
      {({ getRootProps, getInputProps }) => (
        <section>
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <p>
              Drag &apos;n&apos; drop some files here, or click to select files
            </p>
          </div>
          <aside style={thumbsContainer}>{thumbs}</aside>
        </section>
      )}
    </Dropzone>
  );
}
export default DropZone;
