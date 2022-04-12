import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Table } from 'react-bootstrap';
import { useState } from 'react';

function App() {

  /* Return Value Input */
  const [name, setNama] = useState('');
  const [born, setBorn] = useState('');
  const [gender, setGender] = useState('');
  const [agama, setAgama] = useState('');
  const [pesan, setPesan] = useState('');
  const [table, setTable] = useState(false);

  /* Return Value Mulitple Checkbox Sumber : https://www.geeksforgeeks.org/how-to-get-multiple-checkbox-values-in-react-js/ */
  const [userinfo, setUserInfo] = useState({
    hobi: [],
    response: [],
  });
  const handleChange = (e) => {
    const { value, checked } = e.target;
    const { hobi } = userinfo;
    if (checked) {
      setUserInfo({
        hobi: [...hobi, value],
        response: [...hobi, value],
      });
    }
    else {
      setUserInfo({
        hobi: hobi.filter((e) => e !== value),
        response: hobi.filter((e) => e !== value),
      });
    }
  };

  /* Submit Value */
  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <div className="container">

      {/* Judul */}
      <div className='judul'>
        <h2>
          <span>
            BIODATA DIRI
          </span>
        </h2>
      </div>

      <form onSubmit={handleSubmit}>

        {/* Text Nama */}
        <li>
          <label htmlFor="name">Nama Lengkap</label>
          <input type="text" name="nama" id="nama" onChange={event => setNama(event.target.value)}></input>
        </li>

        {/* Date Tanggal Lahir */}
        <li>
          <label htmlFor="born">Tanggal Lahir</label>
          <input type="date" name="born" id="born" onChange={event => setBorn(event.target.value)}></input>
        </li>

        {/* Radio Button Gender */}
        <li>
          <label htmlFor="gender">Jenis Kelamin</label>
          <div className='option'>
            <input type="radio" name="gender" value="Laki-laki" onChange={event => setGender(event.target.value)}></input>
            <label htmlFor="gender1">Laki-laki</label>
            <input type="radio" name="gender" value="Perempuan" onChange={event => setGender(event.target.value)}></input>
            <label htmlFor="gender2">Perempuan</label>
            <input type="radio" name="gender" value="Other" onChange={event => setGender(event.target.value)}></input>
            <label htmlFor="gender3">Other</label>
          </div>
        </li>

        {/* Multiple Checkbox Hobi */}
        <li>
          <label htmlFor="hobi">Hobi</label> <br></br>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              name="hobi"
              value="Ngoding, "
              id="inlineCheckbox1"
              onChange={handleChange}
            />
            <label
              className="form-check-label"
              htmlFor="inlineCheckbox1"
            >
              Ngoding
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              name="hobi"
              value="Rebahan, "
              id="inlineCheckbox2"
              onChange={handleChange}
            />
            <label
              className="form-check-label"
              htmlFor="inlineCheckbox2"
            >
              Rebahan
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              name="hobi"
              value="Melamun, "
              id="inlineCheckbox1"
              onChange={handleChange}
            />
            <label
              className="form-check-label"
              htmlFor="inlineCheckbox1"
            >
              Melamun
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              name="hobi"
              value="Baca Buku, "
              id="inlineCheckbox1"
              onChange={handleChange}
            />
            <label
              className="form-check-label"
              htmlFor="inlineCheckbox1"
            >
              Baca Buku
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              name="hobi"
              value="Nonton Youtube, "
              id="inlineCheckbox1"
              onChange={handleChange}
            />
            <label
              className="form-check-label"
              htmlFor="inlineCheckbox1"
            >
              Nonton Youtube
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              name="hobi"
              value="Dengerin Lagu, "
              id="inlineCheckbox1"
              onChange={handleChange}
            />
            <label
              className="form-check-label"
              htmlFor="inlineCheckbox1"
            >
              Dengerin Lagu
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              name="hobi"
              value="Other, "
              id="inlineCheckbox1"
              onChange={handleChange}
            />
            <label
              className="form-check-label"
              htmlFor="inlineCheckbox1"
            >
              Other
            </label>
          </div>
        </li>

        {/* Select Option Agama */}
        <li>
          <label htmlFor="agama">Agama</label>
          <select id='agama' onChange={event => setAgama(event.target.value)}>
            <option value="Islam">Islam</option>
            <option value="Kristen">Kristen</option>
            <option value="Hindu">Hindu</option>
            <option value="Buddha">Buddha</option>
            <option value="Atheis">Atheis</option>
          </select>
        </li>

        {/* Textarea Pesan */}
        <li>
          <label htmlFor="pesan">Pesan</label>
          <textarea name="message" id="pesan" onChange={event => setPesan(event.target.value)}></textarea>
        </li>

        {/* Button Submit */}
        <li>
          <button type="button" onClick={() => setTable(prev => !prev)}>Submit</button>
        </li>
      </form>

      {/* Menampilkan table hasil submit */}
      {' '}
      {table &&
        <Table responsive>
          <thead>
            <tr>
              <th>Label</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Nama</td>
              <td>{name}</td>
            </tr>
            <tr>
              <td>Tanggal Lahir</td>
              <td>{born}</td>
            </tr>
            <tr>
              <td>Jenis Kelamin</td>
              <td>{gender}</td>
            </tr>
            <tr>
              <td>Hobi</td>
              <td>{userinfo.response}</td>
            </tr>
            <tr>
              <td>Agama</td>
              <td>{agama}</td>
            </tr>
            <tr>
              <td>Pesan</td>
              <td>{pesan}</td>
            </tr>
          </tbody>
        </Table>
      }
    </div>
  );
}

export default App;
