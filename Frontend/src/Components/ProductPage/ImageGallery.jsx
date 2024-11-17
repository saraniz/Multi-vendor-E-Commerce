import React, { useState } from "react";

const ImageGallery = () => {
  // Sample images
  const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrw78VZdNIC2FxfdXp2EQZB4nDlY2SXWDGHL55UV3ftjXtoXSeCFb_3e6lDsyJgmw-sFM&usqp=CAU",
    "https://churchcultureph.com/cdn/shop/files/threeinonesf.jpg?v=1706369684&width=1946",
    "https://churchcultureph.com/cdn/shop/files/Praise_The_Father.jpg?v=1728223549",
  ];

  const [selectedImage, setSelectedImage] = useState(images[0]); // Default to the first image

  return (
    <div className="flex space-x-8">
  {/* Thumbnail Images */}
  <div className="flex flex-col justify-between h-full">
    {images.map((image, index) => (
      <img
        key={index}
        src={image}
        alt={`Thumbnail ${index + 1}`}
        className={`w-24 h-24 border rounded-md cursor-pointer ${
          selectedImage === image ? "border-black" : "border-gray-300"
        }`}
        onClick={() => setSelectedImage(image)}
      />
    ))}
  </div>

  {/* Main Image */}
  <div className="flex items-center justify-center border rounded-md w-96 h-96">
    <img
      src={selectedImage}
      alt="Main Display"
      className="object-contain w-full h-full rounded-md"
    />
  </div>
</div>

  );
};

export default ImageGallery;
