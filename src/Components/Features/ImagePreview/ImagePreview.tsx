import styled from "styled-components";
import { Flex } from '../../UI/Flex';
import {useEffect, useState} from "react"



type ImagePreviewProps = {
    images: string[]
}



export const ImagePreview = ({ images }: ImagePreviewProps) => {


   // const imgs = [
   // "https://placehold.co/100/000000/FFF",
    //"https://placehold.co/100/000340/FFF",
    //"https://placehold.co/100/5B1239/FFF",
    //]

    const [selectedImage, setSelectedImage] = useState(images[0]);

    useEffect(() => {
        if (images.length > 0) {
            setSelectedImage(images[0]);
        }
    }, [images]);


    return(
        <ImagePreviewStyled>
            <Flex gap="24px" >

                <Flex gap="16px" flexDirection="column" >
                    {
                    images.map((img, index) => (
                        <PreviewImage key={index} onClick={() => setSelectedImage(img)}>
                            <img src={img} alt={`Preview ${index}`} />
                        </PreviewImage>
                        ))
                    }       
                </Flex>
                <Thumbnail src={selectedImage} alt="Main Preview" />

            </Flex>
        </ImagePreviewStyled>
    )
}

const ImagePreviewStyled = styled.div`
    max-width: 50%;
    

`
const Thumbnail = styled.img`
    min-width: 80%;
    max-width: 80%;
`

const PreviewImage = styled.button`
    
    cursor: pointer;
    border: none;
    background: transparent;
    transition: box-shadow 0.3s ease;
    max-width: 100px;
    height: 100px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    &:hover{
        
        box-shadow: rgba(100, 100, 111, 0.3) 0px 7px 29px 0px;
    }

    img{
        max-height: 100%;
        max-width: 100%;
    }
`


