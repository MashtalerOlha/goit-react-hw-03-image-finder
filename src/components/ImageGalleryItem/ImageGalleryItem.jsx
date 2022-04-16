
export const ImageGalleryItem = ({ imageCard }) => {
    return imageCard.map(({ id, webformatURL, largeImageURL, tags }) => (
      <li key={id}>
        <a href={largeImageURL}>
          <img src={webformatURL} alt={tags} />
        </a>
      </li>
    ));
  };