import {useState} from "react";

export default function useImageUpload(setForm) {

  const [preview, setPreview] = useState(null);
  const [status, setStatus] = useState(null);

  const validateFile = (file, maxSizeMB = 2) => {
    if (!file || !file.type.startsWith("image/")) return "Only images allowed."; // e.dataTransfer/type checks for "image/"
    if (file.size > 1024 * 1024 * maxSizeMB) return "Image too large"; // e.dataTransfer.files[0].size -> 1024 * 1024 bytes = 1 Mb
    return null;
  };

  const handleFile = (file) => {
    const error = validateFile(file);
    if (error) {
      setStatus(error);
      return;
    }

    // creating a temporary url for an image preview
    const objectUrl = URL.createObjectURL(file);
    setPreview(objectUrl);
    setForm((prev) => ({ ...prev, image: objectUrl }));
  };

  return {
    preview,
    status,
    setStatus,
    handleFile,
    setPreview
  };
}