import React, {useState, useRef} from 'react'
import ReactCrop from 'react-image-crop'
import 'react-image-crop/dist/ReactCrop.css'
import Image from '../myImage.jpeg'

const ImageCrop = () => {
    const [crop, setCrop] = useState({unit: "rem", aspect: 1 / 1, width: 80, height: 55});
    
    const [info, setInfo] = useState({src: null, image: null, croppedUrl: "", croppedImage: null, filename: ""})

   const handleFile = e => {
        const fileReader = new FileReader()
        fileReader.onloadend = () => {
            setInfo({...info, src: fileReader.result })
        }   
        fileReader.readAsDataURL(e.target.files[0])
        setInfo({...info, filename: e.target.files[0].name})
    }

    const onImageLoaded = image => {
       setInfo({...info, image: image})
    }
    
   
   function handleComplete(crop, percentCrop){
       console.log(crop)
       if (info.image && crop.width && crop.height) {
        const croppedImageUrl = getCroppedImg(info.image, crop)
        setInfo({...info, croppedUrl: croppedImageUrl })
    }
   }

   function getCroppedImg(image, crop) {
    const canvas = document.createElement("canvas");
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext("2d");
    
    ctx.drawImage(
        image,
        crop.x * scaleX,
        crop.y * scaleY,
        crop.width * scaleX,
        crop.height * scaleY,
        0,
        0,
        crop.width,
        crop.height
     )

    const reader = new FileReader()
    canvas.toBlob(blob => {
        reader.readAsDataURL(blob)
        reader.onloadend = () => {
           // setInfo({...info, croppedImage: reader.result })
            dataURLtoFile(reader.result, info.filename)
        }
    })
}

    function dataURLtoFile(dataurl, filename) {
    let arr = dataurl.split(','),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), 
        n = bstr.length, 
        u8arr = new Uint8Array(n);
            
    while(n--){
        u8arr[n] = bstr.charCodeAt(n);
    }
    let croppedImage = new File([u8arr], filename, {type:mime});
    setInfo({...info, croppedImage: URL.createObjectURL(croppedImage), croppedUrl: croppedImage }) 
}
    return(
        <div>
            <p>Crop Image</p>
            <div >
            <input type='file' id='profile_pic'
            onChange={handleFile} />
            <ReactCrop 
            imageStyle={{ width: "300px", height: "550px"}} 
            src={info.src} 
            crop={crop} 
            onChange={newCrop => setCrop(newCrop)} 
            onComplete={(crop, percentCrop) => handleComplete(crop, percentCrop)}
            onImageLoaded={(image)=> onImageLoaded(image)}
            locked 
            />
           <img src={info.croppedImage} style={{width: "18rem", height: "18rem", borderRadius: "50%"}} />
            </div>
        </div>
    )
}

export default ImageCrop