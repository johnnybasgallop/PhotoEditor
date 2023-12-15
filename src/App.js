import './App.css';
import {useState} from 'react'
import Slider from './components/Slider'
import SidebarItem from './components/SidebarItem'

const DEFAULT_OPTIONS = [
  {
    name: 'Brightness',
    property: "brightness",
    value: 100,
    range: {
      min: 0,
      max: 200,
    },
    unit: '%'
  },

  {
    name: 'Contrast',
    property: "contrast",
    value: 100,
    range: {
      min: 0,
      max: 200,
    },
    unit: '%'
  },

  {
    name: 'Saturation',
    property: "saturate",
    value: 100,
    range: {
      min: 0,
      max: 200,
    },
    unit: '%'
  },

  {
    name: 'Grayscale',
    property: "grayscale",
    value: 0,
    range: {
      min: 0,
      max: 100,
    },
    unit: '%'
  },

  {
    name: 'Sepia',
    property: "sepia",
    value: 0,
    range: {
      min: 0,
      max: 200,
    },
    unit: '%'
  },

  {
    name: 'Hue Rotate',
    property: "hue-rotate",
    value: 0,
    range: {
      min: 0,
      max: 360,
    },
    unit: 'deg'
  },

  {
    name: 'Blur',
    property: "blur",
    value: 0,
    range: {
      min: 0,
      max: 20,
    },
    unit: 'px'
  },
]

function App() {

  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0)
  const [options,setOptions] = useState(DEFAULT_OPTIONS)
  const [imageURL, setImageURL] = useState('https://firebasestorage.googleapis.com/v0/b/cbstocks-79297.appspot.com/o/paramountplus.jpeg?alt=media&token=c39bd8f0-f1f5-4d53-ba6d-4118c241e2ec')
  const selectedOption = options[selectedOptionIndex]

  const handleSliderChange = ({target}) => {
    setOptions(prevOptions => {
      return prevOptions.map((option, index) => {
        if (index !== selectedOptionIndex) return option
        return {...option, value: target.value}
      })
    })
  }

  const handleImage = (e) => {
    if(e.target.files && e.target.files[0]){
      let reader = new FileReader()


      reader.onload = function(e) {
        setImageURL(e.target.result)
      }

      reader.readAsDataURL(e.target.files[0])
    }
  }

  const getImageStyle = () => {
    const filters = options.map((option) => {
      return `${option.property}(${option.value}${option.unit})`
    })

    return { filter: filters.join('')}
  }

  return (
    <div className="container">
      {/* <div className="nav">Press + to upload an image for editing</div> */}
      <div className="file-container">
            <form>
                <label>
                    <input className="input-hide" type="file" onChange={handleImage}/>
                    <span className="plus">+</span>
                </label>
            </form>
        </div>
      <div className="main-image" style={getImageStyle()}><img className="main-image" src={imageURL} alt="https://firebasestorage.googleapis.com/v0/b/cbstocks-79297.appspot.com/o/paramountplus.jpeg?alt=media&token=c39bd8f0-f1f5-4d53-ba6d-4118c241e2ec"/></div>
      <div className="sidebar">
      {options.map((option,index) => {
        return(
          <SidebarItem
          key={index}
          name={option.name}
          active={index === selectedOptionIndex}
          handleClick={() => setSelectedOptionIndex(index)}
          />

        )
        
      })}
      </div>
      <Slider
      min={selectedOption.range.min}
      max={selectedOption.range.max}
      value={selectedOption.value}
      handleChange={handleSliderChange}

      />

    </div>
  );
}

export default App;
