import Select from 'react-select'
import "../styles/Select.css";

const options = [
  { value: 'Ang Mo Kio', label: 'Ang Mo Kio', region: 'north' },
  { value: 'Bedok', label: 'Bedok', region: 'east' },
  { value: 'Bishan', label: 'Bishan', region: 'central' },
  { value: 'Boon Lay', label: 'Boon Lay', region: 'west' },
  { value: 'Bukit Batok', label: 'Bukit Batok', region: 'west' },
  { value: 'Bukit Merah', label: 'Bukit Merah', region: 'south' },
  { value: 'Bukit Panjang', label: 'Bukit Panjang', region: 'west' },
  { value: 'Bukit Timah', label: 'Bukit Timah', region: 'central' },
  { value: 'central Water Catchment', label: 'central Water Catchment', region: 'central' },
  { value: 'Changi', label: 'Changi', region: 'east' },
  { value: 'Choa Chu Kang', label: 'Choa Chu Kang', region: 'west' },
  { value: 'Clementi', label: 'Clementi', region: 'west' },
  { value: 'City', label: 'City', region: 'south' },
  { value: 'Geylang', label: 'Geylang', region: 'south' },
  { value: 'Hougang', label: 'Hougang', region: 'north' },
  { value: 'Jalan Bahar', label: 'Jalan Bahar', region: 'west' },
  { value: 'Jurong east', label: 'Jurong east', region: 'west' },
  { value: 'Jurong Island', label: 'Jurong Island', region: 'west' },
  { value: 'Jurong west', label: 'Jurong west', region: 'west' },
  { value: 'Kallang', label: 'Kallang', region: 'central' },
  { value: 'Lim Chu Kang', label: 'Lim Chu Kang', region: 'north' },
  { value: 'Mandai', label: 'Mandai', region: 'north' },
  { value: 'Marine Parade', label: 'Marine Parade', region: 'south' },
  { value: 'Novena', label: 'Novena', region: 'central' },
  { value: 'Pasir Ris', label: 'Pasir Ris', region: 'east' },
  { value: 'Paya Lebar', label: 'Paya Lebar', region: 'east' },
  { value: 'Pioneer', label: 'Pioneer', region: 'west' },
  { value: 'Pulau Tekong', label: 'Pulau Tekong', region: 'north' },
  { value: 'Pulau Ubin', label: 'Pulau Ubin', region: 'north' },
  { value: 'Punggol', label: 'Punggol', region: 'north' },
  { value: 'Queenstown', label: 'Queenstown', region: 'south' },
  { value: 'Seletar', label: 'Seletar', region: 'north' },
  { value: 'Sembawang', label: 'Sembawang', region: 'north' },
  { value: 'Sengkang', label: 'Sengkang', region: 'north' },
  { value: 'Sentosa', label: 'Sentosa', region: 'south' },
  { value: 'Serangoon', label: 'Serangoon', region: 'north' },
  { value: 'southern Islands', label: 'southern Islands', region: 'south' },
  { value: 'Sungei Kadut', label: 'Sungei Kadut', region: 'north' },
  { value: 'Tampines', label: 'Tampines', region: 'east' },
  { value: 'Tanglin', label: 'Tanglin', region: 'south' },
  { value: 'Tengah', label: 'Tengah', region: 'west' },
  { value: 'Toa Payoh', label: 'Toa Payoh', region: 'central' },
  { value: 'Tuas', label: 'Tuas', region: 'west' },
  { value: 'western Islands', label: 'western Islands', region: 'west' },
  { value: 'western Water Catchment', label: 'western Water Catchment', region: 'west' },
  { value: 'Woodlands', label: 'Woodlands', region: 'north' },
  { value: 'Yishun', label: 'Yishun', region: 'north' }
]

const customStyles = {
  option: (styles) => ({
    ...styles,
    cursor: 'pointer',
    //color: 'pink'
  })
}
const AreaInput = (props) => {
  const input = props.result;

  return (
    <>
      <div className="select">
        <Select
          styles={customStyles}
          defaultValue={input.weather}
          onChange={input.setWeather}
          options={options}
        />
      </div>
      {/* {input.weather.value} */}
    </>
  );
};

export default AreaInput;