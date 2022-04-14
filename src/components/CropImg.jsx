import React, { useCallback, useEffect, useState } from "react";
import Cropper from "react-easy-crop";

const CropImg = (props) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedArea, setCroppedArea] = useState({});
  const [croppedAreaPixels, setCroppedAreaPixels] = useState({});
  const [newCroppedImg, setnewCroppedImg] = useState("");
  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedArea(croppedArea);
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  function croppedImg() {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const image = new Image();

    image.src = `${props.uploadedImg}`;
    if (image.height) {
      canvas.height = image.height;
      canvas.width = image.width;
      //   ctx.translate(image.width / 2, image.height / 2);
      //   ctx.translate(-image.width / 2, -image.height / 2);
      ctx.drawImage(image, 0, 0);
      const data = ctx.getImageData(
        croppedAreaPixels.x,
        croppedAreaPixels.y,
        croppedAreaPixels.width,
        croppedAreaPixels.height
      );
      canvas.width = croppedAreaPixels.width;
      canvas.height = croppedAreaPixels.height;
      ctx.putImageData(data, 0, 0);
      setnewCroppedImg(canvas.toDataURL());
    }
  }

  useEffect(() => {
    props.setImg(newCroppedImg);
  }, [newCroppedImg]);

  console.log("imagem", props.uploadedImg);

  return props.showCrop ? (
    <div
      style={{
        position: "absolute",
        height: "100vh",
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
        background: "#333",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "80%",
        }}
      >
        <Cropper
          image={props.uploadedImg}
          crop={crop}
          cropSize={{ width: 300, height: 300 }}
          zoom={zoom}
          aspect={4 / 3}
          onCropChange={setCrop}
          onCropComplete={onCropComplete}
          onZoomChange={setZoom}
        />
      </div>
      <div
        style={{
          padding: 16,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <button
          className="btn btn-primary"
          onClick={(event) => {
            croppedImg();
            props.setShowCrop(false);
          }}
        >
          {" "}
          Recortar imagem
        </button>
      </div>
    </div>
  ) : (
    <img
      src={newCroppedImg === "" ? props.cvImage : newCroppedImg}
      style={{ height: "100px" }}
    />
  );
};

export default CropImg;