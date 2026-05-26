import { useEffect, useState } from "react";
import styled from "styled-components";
import { Flex } from "../../UI/Flex";
import { ImagePreviewSkeleton } from "./ImagePreviewSkeleton";

type ImagePreviewProps = {
    images?: string[];
    isLoading: boolean;
};

export const ImagePreview = ({
    images = [],
    isLoading
}: ImagePreviewProps) => {

    const [selectedImage, setSelectedImage] = useState<string>("");

    useEffect(() => {
        if (images.length > 0) {
            setSelectedImage(images[0]);
        }
    }, [images]);

    if (isLoading) {
        return <ImagePreviewSkeleton />;
    }

    return (
        <ImagePreviewStyled>
            <Flex gap="24px">

                <Flex
                    gap="16px"
                    flexDirection="column"
                >
                    {images.map((img, index) => (
                        <PreviewImage
                            key={index}
                            onClick={() => setSelectedImage(img)}
                        >
                            <img
                                src={img}
                                alt={`Preview ${index + 1}`}
                            />
                        </PreviewImage>
                    ))}
                </Flex>

                {selectedImage && (
                    <Thumbnail
                        src={selectedImage}
                        alt="Main Preview"
                    />
                )}

            </Flex>
        </ImagePreviewStyled>
    );
};

const ImagePreviewStyled = styled.div`
    max-width: 50%;
`;

const Thumbnail = styled.img`
    min-width: 80%;
    max-width: 80%;
    object-fit: contain;
`;

const PreviewImage = styled.button`
    cursor: pointer;
    border: none;
    background: transparent;
    transition: box-shadow .3s ease;

    width: 100px;
    height: 100px;

    display: flex;
    align-items: center;
    justify-content: center;

    box-shadow: rgba(99,99,99,.2) 0px 2px 8px;

    &:hover{
        box-shadow: rgba(100,100,111,.3) 0px 7px 29px;
    }

    img{
        width:100%;
        height:100%;
        object-fit: contain;
    }
`;