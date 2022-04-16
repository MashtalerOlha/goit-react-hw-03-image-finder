import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ imageCard }) => {
    return (
      <div className="gallery">
        <ul>
          <ImageGalleryItem imageCard={imageCard} />
        </ul>
      </div>
    );
  };
  