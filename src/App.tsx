import React from 'react';
import './App.scss';
import Carousel from './components/Carousel';

class App extends React.Component {
  state = {
    images: Array.from({ length: 10 }, (_, i) => `./img/${i + 1}.png`),
    itemWidth: 130,
    frameSize: 3,
    step: 3,
  };

  render() {
    const { images, itemWidth, frameSize, step } = this.state;

    return (
      <div className="App">
        <h1 data-cy="title">Carousel with {images.length} images</h1>

        {/* Контрол для ширини картинки */}
        <label htmlFor="itemId">Item Width</label>
        <input
          id="itemId"
          type="number"
          value={itemWidth}
          onChange={e => this.setState({ itemWidth: +e.target.value })}
        />

        {/* Контрол для frameSize */}
        <label htmlFor="frameId">Frame Size</label>
        <input
          id="frameId"
          type="number"
          value={frameSize}
          onChange={e => this.setState({ frameSize: +e.target.value })}
        />

        {/* Контрол для step */}
        <label htmlFor="stepId">Step</label>
        <input
          id="stepId"
          type="number"
          value={step}
          onChange={e => this.setState({ step: +e.target.value })}
        />

        {/* Сам карусель */}
        <Carousel
          images={images}
          itemWidth={itemWidth}
          frameSize={frameSize}
          step={step}
          data-cy="carousel"
        />
      </div>
    );
  }
}

export default App;
