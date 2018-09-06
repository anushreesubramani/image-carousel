import React, { Component } from 'react';
import axios from 'axios';
import LeftArrow from 'components/LeftArrow';
import RightArrow from 'components/RightArrow';
import Slide from 'components/Slide';
import config from 'breakpoints.js';
import { API_KEY } from 'secrets.js';
import arrow from 'assets/arrow.svg';
import { ListSlider, Heading, Sliders } from './styles';

export default class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [],
      size: 6,
      slides: 1,
      counter: 0
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
    this.updateDimensions();

    axios
      .get(
        `https://pixabay.com/api/?key=${API_KEY}&q=beautiful+landscape&image_type=photo`
      )
      .then(response => {
        const images = this.filterImages(response.data.hits);
        this.setState({
          images
        });
      })
      .catch(error => {
        throw error;
      });
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

  updateDimensions = value => {
    const clientWidth = document.querySelector('.App').clientWidth;
    const dimension = config.filter(
      item => clientWidth > item.minWidth && clientWidth <= item.maxWidth
    );
    if (dimension.length > 0) {
      this.setState({
        slides: dimension[0].slidesToShow
      });
    } else {
      this.setState({
        slides: 5
      });
    }
  };

  handleNext = () => {
    if (this.state.counter >= this.state.images.length) {
      this.setState({
        counter: 0
      });
    } else {
      this.setState(prevState => ({
        counter: prevState.counter + 1
      }));
    }
  };

  resetCounter = () => {
    this.setState({
      counter: 0
    });
  };

  getSlides = () => {
    let subSlides = [];
    subSlides = this.state.images.reduce((attr, item, index) => {
      if (index > this.state.counter && attr.length < this.state.slides) {
        attr = [...[item], ...attr];
      }
      return attr;
    }, []);
    if (subSlides.length !== this.state.slides) {
      this.state.images.map(item => {
        if (subSlides.length < this.state.slides) {
          subSlides = [...subSlides, ...[item]];
        }
      });
    }
    return subSlides;
  };

  render() {
    return (
      <div>
        <Heading>Caurosel Test</Heading>
        <Sliders>
          <LeftArrow goToPrevSlide={this.handleNext} />
          <ListSlider>
            {this.getSlides().map((item, index) => (
              <Slide image={item} key={index} />
            ))}
          </ListSlider>
          <RightArrow goToNextSlide={this.handleNext}>
            <img src={arrow} alt="leftarrow" />
          </RightArrow>
        </Sliders>
      </div>
    );
  }
}
