import React, { Component } from 'react';
import axios from 'axios';
import Slide from 'components/Slide';
import LeftArrow from 'components/LeftArrow';
import RightArrow from 'components/RightArrow';

export default class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [],
      size: 6
    };
  }

  componentDidMount() {
    axios
      .get(
        'https://pixabay.com/api/?key=9656065-a4094594c34f9ac14c7fc4c39&q=beautiful+landscape&image_type=photo'
      )
      .then(response => {
        const images = this.filterImages(response.data.hits);
        console.log(images);
        this.setState({
          images
        });
      })
      .catch(error => {
        throw error;
      });

    window.addEventListener('resize', this.updateDimensions);
    console.log(this.state.images);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  filterImages = images => {
    const { size } = this.state;
    return images.slice(0, size).map(image => ({
      url: image.largeImageURL,
      likes: image.likes,
      user: image.user
    }));
  };

  goToPrevSlide = () => {};

  goToNextSlide = () => {};

  render() {
    const { error } = this.state;
    return (
      <div className="slider">
        {this.state.images.map((image, i) => <Slide key={i} image={image} />)}

        <LeftArrow goToPrevSlide={this.goToPrevSlide} />
        <RightArrow goToNextSlide={this.goToNextSlide} />
      </div>
    );
  }
}
