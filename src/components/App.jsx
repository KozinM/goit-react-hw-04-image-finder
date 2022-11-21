import { useState, useEffect, useRef } from 'react';
import { Searchbar } from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import s from './styles.module.css';
import { getImages } from '../API/PixaBay/getImages';
import { ThreeDots } from 'react-loader-spinner';

const resultsOnPage = 12;

export const App = () => {
  // states
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [queryPage, setQueryPage] = useState(1);
  const [largeImgSrc, setLargeImgSrc] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  //functions
  //Ok
  const onModalOpen = url => {
    setShowModal(true);
    setLargeImgSrc(url);
  };

  //Ok
/*   const onModalClose = () => {
    setLargeImgSrc('');
  };
 */
  //Ok
  const onFormSubmit = query => {
    if (query.trim().length === 0) {
      alert('Please, enter request');
      return;
    }
    setQuery(query);
    setQueryPage(1);
    setImages([]);
  };

  //Ok
  const onLoadMoreClick = () => {
    //console.log('queryPage value:  '+queryPage);
    setQueryPage(prevState => prevState + 1);
    //console.log("queryPage value:  "+queryPage);
  };

  //Ok
  const toggleModal = () => {
    setShowModal(prevState => !prevState);
  };

  //Ok
  const addImages = async (query, pageNumber, resultsOnPage) => {
    try {
      setIsLoading(true);

      const images = await getImages(query, pageNumber, resultsOnPage);
      //console.log("I'm rendering query: "+query);

      setImages(prevState => {
        if(prevState.length===0) {
          //console.log("I'm getting images");
          return [...images];
        }
        //console.log(prevState);
        return [...prevState, ...images];
      });
      setIsLoading(false);

      if (images.length === 0) {
        alert(
          "Sorry, we can't find anyting for your request. Please, enter another request"
        );
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  
  //Ok
  const mounted = useRef();
  useEffect(()=>{
    if (!mounted.current) {
      // do componentDidMount logic
      mounted.current = true;
    } else {
      // do componentDidUpdate logic
      addImages(query, queryPage, resultsOnPage);
    //console.log("fetched images");
    }
    
  },[query, queryPage]);

  return(
    <div className={s.App}>
    <Searchbar
      onSubmit={onFormSubmit}
      isLoading={isLoading}
    />
    {error && <p>{error}</p>}

    
    {images.length > 0 && (
      <ImageGallery
        images={images}
        onModalOpen={onModalOpen}
      />
    )}
    {isLoading && (
      <ThreeDots
        height="40"
        width="40"
        color="#3f51b5"
        ariaLabel="loading"
      />
    )}

    {showModal && (
      <Modal
        onModalClose={toggleModal}
        largeImg={largeImgSrc}
      />
    )}

    {images.length > 0 && (
      <Button
        onLoadMore={onLoadMoreClick}
        isLoading={isLoading}
      />
    )}
  </div>
  )
};

/* export class oldApp extends Component {
  state = {
    query: '',
    images: [],
    queryPage: 1,
    largeImgSrc: '',
    showModal: false,
    isLoading: false,
    error: null,
  };

  onModalOpen = url => {
    this.setState({
      showModal: true,
      largeImgSrc: url,
    });
  };

  onModalClose = () => {
    this.setState({
      largeImgSrc: '',
    });
  };

  onFormSubmit = query => {
    if (query.trim().length === 0) {
      alert('Please, enter request');
      return;
    }

    this.setState({
      query,
      queryPage: 1,
      images: [],
    });
    console.log('on form submit!');
  };

  onLoadMoreClick = () => {
    this.setState(prevState => ({
      queryPage: prevState.queryPage + 1,
    }));
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  addImages = async (query, pageNumber, resultsOnPage) => {
    try {
      this.setState({
        isLoading: true,
      });
      const images = await getImages(query, pageNumber, resultsOnPage);

      this.setState(prevState => ({
        images: [...prevState.images, ...images],
        isLoading: false,
      }));
      if (images.length === 0) {
        alert(
          "Sorry, we can't find anyting for your request. Please, enter another request"
        );
      }
    } catch (error) {
      this.setState({
        error: error.message,
      });
    } finally {
      this.setState({
        isLoading: false,
      });
    }
  };

  componentDidUpdate(_, prevState) {
    //console.log('component did update');
    if (
      prevState.queryPage !== this.state.queryPage ||
      prevState.query !== this.state.query
    ) {
      //console.log('component did update after if'+this.state.query+"  "+this.state.queryPage+"  "+resultsOnPage);
      this.addImages(this.state.query, this.state.queryPage, resultsOnPage);
    }
  }

  render() {
    return (
      <div className={s.App}>
        <Searchbar
          onSubmit={this.onFormSubmit}
          isLoading={this.state.isLoading}
        />
        {this.state.error && <p>{this.state.error}</p>}

        {this.state.images.length > 0 && (
          <ImageGallery
            images={this.state.images}
            onModalOpen={this.onModalOpen}
          />
        )}
        {this.state.isLoading && (
          <ThreeDots
            height="40"
            width="40"
            color="#3f51b5"
            ariaLabel="loading"
          />
        )}

        {this.state.showModal && (
          <Modal
            onModalClose={this.toggleModal}
            largeImg={this.state.largeImgSrc}
          />
        )}

        {this.state.images.length > 0 && (
          <Button
            onLoadMore={this.onLoadMoreClick}
            isLoading={this.state.isLoading}
          />
        )}
      </div>
    );
  }
}

export default App; */
