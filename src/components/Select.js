import React, { useEffect, useState } from 'react'
import Select from 'react-select'

const options = [
  { value: 'Ang Mo Kio', label: 'Ang Mo Kio', region:'central'},
  { value: 'Bedok', label: 'Bedok', region:'east' },
  { value: 'Bishan', label: 'Bishan' },
  { value: 'Boon Lay', label: 'Boon Lay' },
  { value: 'Bukit Batok', label: 'Bukit Batok' },
  { value: 'Bukit Merah', label: 'Bukit Merah' },
  { value: 'Bukit Panjang', label: 'Bukit Panjang' },
  { value: 'Bukit Timah', label: 'Bukit Timah' },
  { value: 'Central Water Catchment', label: 'Central Water Catchment' },
  { value: 'Changi', label: 'Changi' },
  { value: 'Choa Chu Kang', label: 'Choa Chu Kang' },
  { value: 'Clementi', label: 'Clementi' },
  { value: 'City', label: 'City' },
  { value: 'Geylang', label: 'Geylang' },
  { value: 'Hougang', label: 'Hougang' },
  { value: 'Jalan Bahar', label: 'Jalan Bahar' },
  { value: 'Jurong East', label: 'Jurong East' },
  { value: 'Jurong Island', label: 'Jurong Island' },
  { value: 'Jurong West', label: 'Jurong West' },
  { value: 'Kallang', label: 'Kallang' },
  { value: 'Lim Chu Kang', label: 'Lim Chu Kang' },
  { value: 'Mandai', label: 'Mandai' },
  { value: 'Marine Parade', label: 'Marine Parade' },
  { value: 'Novena', label: 'Novena' },
  { value: 'Pasir Ris', label: 'Pasir Ris' },
  { value: 'Paya Lebar', label: 'Paya Lebar' },
  { value: 'Pioneer', label: 'Pioneer' },
  { value: 'Pulau Tekong', label: 'Pulau Tekong' },
  { value: 'Pulau Ubin', label: 'Pulau Ubin' },
  { value: 'Punggol', label: 'Punggol' },
  { value: 'Queenstown', label: 'Queenstown' },
  { value: 'Seletar', label: 'Seletar' },
  { value: 'Sembawang', label: 'Sembawang' },
  { value: 'Sengkang', label: 'Sengkang' },
  { value: 'Sentosa', label: 'Sentosa' },
  { value: 'Serangoon', label: 'Serangoon' },
  { value: 'Southern Islands', label: 'Southern Islands' },
  { value: 'Sungei Kadut', label: 'Sungei Kadut' },
  { value: 'Tampines', label: 'Tampines' },
  { value: 'Tanglin', label: 'Tanglin' },
  { value: 'Tengah', label: 'Tengah' },
  { value: 'Toa Payoh', label: 'Toa Payoh' },
  { value: 'Tuas', label: 'Tuas' },
  { value: 'Western Islands', label: 'Western Islands' },
  { value: 'Western Water Catchment', label: 'Western Water Catchment' },
  { value: 'Woodlands', label: 'Woodlands' },
  { value: 'Yishun', label: 'Yishun' }
]

const customStyles = {
    option: (styles) => ({
      ...styles,
      cursor: 'pointer',
    //   color: 'pink'
    })
}
const MyComponent = (props) => {
    
    const result = props.nianSoon;
    // useEffect(() => {
    //     console.log(select);
    // },)

    return(
        <>
    <div className="select">
        <Select
        styles={customStyles}
        defaultValue={result.answer}
        onChange={result.setAnswer}
        options={options}
        />
    </div>
    {result.answer.value}
    <br></br>
    {result.answer.region}
      </>
    );
};

export default MyComponent;