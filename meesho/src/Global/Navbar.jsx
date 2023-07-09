import React, { useEffect, useState } from 'react'
import '../Css/Navbar.css'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

  const [displayname, setdisplayname] = useState(false);
  console.log(displayname, "displayname");

  const route = useNavigate();

  useEffect(() => {
    var cuser = JSON.parse(localStorage.getItem("currentuser"));
    console.log(cuser, "cuser");

    if (cuser) {
      setdisplayname(true);
    }
  })

  const removeuser = () => {
    localStorage.removeItem("currentuser");
    setdisplayname(false);
    alert("logout successfully");
  }

  const openpage = () => {
    route("/register")
  }

  const [opennewpage, setopennewpage] = useState("false");
  console.log(opennewpage, "opennewpage");

  const opennewdiv = (item) => {
    setopennewpage(item);
  }

  const handleItemClick = () => {
    setopennewpage('');
  }



  return (
    <div className='navbar-fullpage'>
      <nav className='navbar'>
        <div className='navbar-box-one'>
          <div className='navbar-one-item'>
            <svg className='navbar-one-logo' viewBox="0 0 156 36" fill="none" xmlns="http://www.w3.org/2000/svg" width="156" height="36" iconsize="20" class="sc-csDkEv fVBIaS"><g clip-path="url(#meeshoLogo_svg__a)"><path fill="#fff" d="M0 0h156v36H0z"></path><path d="M56.307 23.698c.38-.29.568-.707.568-1.253 0-1.731-.237-3.288-.707-4.675-.47-1.383-1.154-2.56-2.053-3.535a8.967 8.967 0 0 0-3.235-2.232c-1.262-.515-2.685-.774-4.264-.774-2.157 0-4.08.492-5.767 1.48-1.687.99-3.007 2.35-3.969 4.08-.957 1.732-1.436 3.755-1.436 6.063 0 2.372.492 4.42 1.481 6.157.989 1.731 2.394 3.069 4.22 4.013 1.825.944 3.995 1.414 6.518 1.414 1.186 0 2.47-.161 3.852-.479 1.383-.318 2.604-.814 3.669-1.48.546-.336.935-.73 1.163-1.186.228-.457.313-.904.25-1.347a2.007 2.007 0 0 0-.523-1.119c-.29-.304-.675-.478-1.163-.523-.488-.045-1.047.112-1.687.479a9.65 9.65 0 0 1-2.805 1.024c-.989.197-1.88.295-2.667.295-2.281 0-4.004-.613-5.176-1.847-.926-.976-1.481-2.358-1.673-4.125h13.78c.707 0 1.244-.144 1.624-.43Zm-12.72-7.705c.895-.595 1.982-.89 3.262-.89 1.154 0 2.12.25 2.894.752.774.5 1.37 1.226 1.777 2.165.34.783.532 1.732.59 2.828H40.93c.107-.864.304-1.655.603-2.349.475-1.078 1.16-1.915 2.054-2.505ZM81.13 23.698c.38-.29.568-.707.568-1.253 0-1.731-.237-3.288-.707-4.675-.47-1.383-1.154-2.56-2.054-3.535a8.966 8.966 0 0 0-3.234-2.232c-1.262-.515-2.685-.774-4.264-.774-2.157 0-4.08.492-5.767 1.48-1.687.99-3.007 2.35-3.969 4.08-.957 1.732-1.436 3.755-1.436 6.063 0 2.372.492 4.42 1.48 6.157.99 1.731 2.394 3.069 4.22 4.013 1.825.944 3.995 1.414 6.519 1.414 1.185 0 2.47-.161 3.852-.479 1.383-.318 2.604-.814 3.669-1.48.546-.336.935-.73 1.163-1.186.228-.457.313-.904.25-1.347a2.008 2.008 0 0 0-.523-1.119c-.29-.304-.675-.478-1.163-.523-.488-.045-1.047.112-1.687.479a9.65 9.65 0 0 1-2.805 1.024c-.989.197-1.88.295-2.667.295-2.282 0-4.004-.613-5.176-1.847-.931-.976-1.481-2.358-1.674-4.125h13.78c.703 0 1.245-.144 1.625-.43Zm-12.72-7.705c.895-.595 1.982-.89 3.261-.89 1.155 0 2.121.25 2.895.752.774.5 1.37 1.226 1.776 2.165.34.783.533 1.732.591 2.828h-11.18c.106-.864.303-1.655.603-2.349.47-1.078 1.154-1.915 2.054-2.505ZM97.993 21.394l-4.559-.868c-.881-.152-1.535-.438-1.96-.868-.425-.425-.64-.957-.64-1.597 0-.85.358-1.535 1.07-2.054.716-.514 1.816-.774 3.306-.774.792 0 1.62.108 2.483.318.868.215 1.772.564 2.712 1.047.514.241.98.326 1.391.25a1.71 1.71 0 0 0 1.025-.595 2.47 2.47 0 0 0 .546-1.096 1.975 1.975 0 0 0-.112-1.208c-.166-.394-.479-.716-.935-.957a13.835 13.835 0 0 0-3.396-1.347c-1.173-.29-2.425-.434-3.763-.434-1.852 0-3.494.29-4.926.868-1.427.577-2.546 1.4-3.351 2.46-.805 1.066-1.208 2.327-1.208 3.786 0 1.61.492 2.926 1.48 3.942.99 1.02 2.426 1.709 4.31 2.076l4.559.867c.94.184 1.646.466 2.12.842.47.38.707.921.707 1.62 0 .818-.358 1.48-1.07 1.981-.715.501-1.798.752-3.26.752-1.034 0-2.081-.112-3.146-.34-1.065-.228-2.206-.63-3.418-1.208-.488-.242-.936-.318-1.347-.228-.412.09-.747.29-1.002.59-.26.305-.412.662-.457 1.074a2.24 2.24 0 0 0 .228 1.23c.197.412.542.77 1.025 1.07 1.154.671 2.46 1.14 3.92 1.414 1.458.273 2.84.411 4.147.411 2.886 0 5.199-.63 6.93-1.892 1.732-1.262 2.6-3.002 2.6-5.222 0-1.642-.51-2.948-1.526-3.919-1.011-.957-2.51-1.624-4.483-1.99ZM125.603 12.32c-1.155-.666-2.631-1.002-4.421-1.002-1.794 0-3.396.416-4.81 1.253a7.254 7.254 0 0 0-2.483 2.443V4.437c0-.944-.25-1.656-.751-2.143-.501-.488-1.208-.73-2.121-.73s-1.611.242-2.099.73c-.487.487-.729 1.199-.729 2.143v27.082c0 .944.242 1.664.729 2.165.488.501 1.186.752 2.099.752 1.915 0 2.872-.97 2.872-2.917v-9.986c0-1.732.492-3.123 1.481-4.17.989-1.047 2.318-1.575 3.991-1.575 1.369 0 2.38.393 3.034 1.185.653.792.979 2.054.979 3.786v10.76c0 .944.251 1.664.752 2.165.501.501 1.208.752 2.121.752s1.611-.25 2.098-.752c.488-.5.729-1.221.729-2.165V20.486c0-2.067-.29-3.777-.867-5.128-.582-1.355-1.446-2.367-2.604-3.038ZM150.618 12.642c-1.7-.944-3.709-1.413-6.018-1.413-1.731 0-3.297.268-4.698.796-1.396.532-2.599 1.306-3.601 2.326-1.003 1.02-1.772 2.233-2.305 3.647-.532 1.414-.796 3.015-.796 4.81 0 2.37.47 4.429 1.414 6.178.939 1.75 2.264 3.092 3.968 4.036 1.701.944 3.709 1.414 6.018 1.414 1.732 0 3.297-.269 4.698-.797 1.396-.532 2.599-1.306 3.602-2.326 1.002-1.02 1.771-2.242 2.304-3.669.532-1.427.796-3.038.796-4.832 0-2.371-.47-4.42-1.414-6.156-.944-1.736-2.264-3.074-3.968-4.014Zm-1.07 14.201c-.469 1.079-1.132 1.893-1.982 2.439-.85.546-1.838.818-2.961.818-1.701 0-3.07-.613-4.103-1.847-1.034-1.23-1.548-3.047-1.548-5.45 0-1.61.237-2.957.707-4.036.469-1.078 1.132-1.883 1.982-2.416.85-.532 1.839-.796 2.962-.796 1.7 0 3.069.6 4.102 1.799 1.034 1.199 1.548 3.015 1.548 5.45 0 1.614-.237 2.961-.707 4.04ZM15.512 34.431c-1.387 0-2.555-1.167-2.555-2.554V20.18c.013-2.165-1.79-3.915-3.924-3.879-2.134-.036-3.932 1.718-3.924 3.88v11.695a2.557 2.557 0 0 1-2.554 2.554C1.18 34.431 0 33.246 0 31.877V20.22a8.993 8.993 0 0 1 2.649-6.389 8.998 8.998 0 0 1 6.384-2.648 9.012 9.012 0 0 1 6.483 2.742A8.997 8.997 0 0 1 22 11.184a8.982 8.982 0 0 1 6.385 2.648 9.008 9.008 0 0 1 2.649 6.39v11.654c0 1.37-1.181 2.555-2.555 2.555a2.557 2.557 0 0 1-2.555-2.554V20.18c.014-2.165-1.79-3.915-3.924-3.879-2.134-.036-3.932 1.718-3.923 3.88v11.695c-.01 1.387-1.177 2.554-2.564 2.554Z" fill="#570D48"></path></g><defs><clipPath id="meeshoLogo_svg__a"><rect width="100%" height="100%" fill="#fff"></rect></clipPath></defs></svg>
          </div>
          <div className='navbar-one-item1'>
            <div className='navbar-one-icon'>
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#8b8ba3" viewBox="0 0 256 256"><path d="M232.49,215.51,185,168a92.12,92.12,0,1,0-17,17l47.53,47.54a12,12,0,0,0,17-17ZM44,112a68,68,0,1,1,68,68A68.07,68.07,0,0,1,44,112Z"></path></svg>
            </div>
            <div className='navbar-one-input'>
              <input type="search" placeholder='Try Saree, Kurti or Search by Product Code' />
            </div>
          </div>
        </div>
        <div className='navbar-box-two'>
          <div className='navbar-two-item'>
            <div className='navbar-two-left'>
              <svg className='navbar-two-icon' xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#333333" viewBox="0 0 256 256"><path d="M176,12H80A28,28,0,0,0,52,40V216a28,28,0,0,0,28,28h96a28,28,0,0,0,28-28V40A28,28,0,0,0,176,12ZM76,76H180V180H76Zm4-40h96a4,4,0,0,1,4,4V52H76V40A4,4,0,0,1,80,36Zm96,184H80a4,4,0,0,1-4-4V204H180v12A4,4,0,0,1,176,220Z"></path></svg>
              <p className='navbar-two-text'>Download App</p>
              <div className='navbar-two-line'>

              </div>
            </div>
            <div className='navbar-two-mid'>
              <p className='navbar-two-text' style={{ marginLeft: '10%', }}>Become a Supplier</p>
              <div className='navbar-two-line'>

              </div>
            </div>
            <div className='navbar-two-right'>
              {displayname ? <div className='navbar-two-right-one'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#333333" viewBox="0 0 256 256"><path d="M116,216a12,12,0,0,1-12,12H48a20,20,0,0,1-20-20V48A20,20,0,0,1,48,28h56a12,12,0,0,1,0,24H52V204h52A12,12,0,0,1,116,216Zm108.49-96.49-40-40a12,12,0,0,0-17,17L187,116H104a12,12,0,0,0,0,24h83l-19.52,19.51a12,12,0,0,0,17,17l40-40A12,12,0,0,0,224.49,119.51Z"></path></svg>
                <p onClick={() => removeuser()} className='navbar-two-text'>Sign-out</p>
              </div> : <div onClick={() => openpage()} className='navbar-two-right-one'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#333333" viewBox="0 0 256 256"><path d="M234.38,210a123.36,123.36,0,0,0-60.78-53.23,76,76,0,1,0-91.2,0A123.36,123.36,0,0,0,21.62,210a12,12,0,1,0,20.77,12c18.12-31.32,50.12-50,85.61-50s67.49,18.69,85.61,50a12,12,0,0,0,20.77-12ZM76,96a52,52,0,1,1,52,52A52.06,52.06,0,0,1,76,96Z"></path></svg>
                <p className='navbar-two-text'>Profile</p>
              </div>}
              <div className='navbar-two-right-one'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#333333" viewBox="0 0 256 256"><path d="M100,216a20,20,0,1,1-20-20A20,20,0,0,1,100,216Zm84-20a20,20,0,1,0,20,20A20,20,0,0,0,184,196ZM235.47,75.53l-27.29,88.7A27.87,27.87,0,0,1,181.41,184H82.93A28.13,28.13,0,0,1,56,163.69L21.81,44H12a12,12,0,0,1,0-24H24.82A20.08,20.08,0,0,1,44.05,34.51L51.34,60H224a12,12,0,0,1,11.47,15.53ZM207.75,84H58.19l20.89,73.1a4,4,0,0,0,3.85,2.9h98.48a4,4,0,0,0,3.83-2.82Z"></path></svg>
                <p className='navbar-two-text'>Cart</p>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <nav className='navbar-bottom'>
        <ul>
          <li onMouseOver={() => opennewdiv('one')} onMouseLeave={() => handleItemClick('one')}><a href="#">Women Ethnic</a></li>
          <li onMouseOver={() => opennewdiv('two')} onMouseLeave={() => handleItemClick('two')}><a href="#">Women Western</a></li>
          <li onMouseOver={() => opennewdiv('three')} onMouseLeave={() => handleItemClick('three')}><a href="#">Mens</a></li>
          <li onMouseOver={() => opennewdiv('four')} onMouseLeave={() => handleItemClick('four')}><a href="#">Kids</a></li>
          <li onMouseOver={() => opennewdiv('five')} onMouseLeave={() => handleItemClick('five')}><a href="#">Home & Kitchen</a></li>
          <li onMouseOver={() => opennewdiv('six')} onMouseLeave={() => handleItemClick('six')}><a href="#">Beauty & Health</a></li>
          <li onMouseOver={() => opennewdiv('seven')} onMouseLeave={() => handleItemClick('seven')}><a href="#">Jewellery & Accessories</a></li>
          <li onMouseOver={() => opennewdiv('eight')} onMouseLeave={() => handleItemClick('eight')}><a href="#">Bags & Footwear</a></li>
          <li onMouseOver={() => opennewdiv('nine')} onMouseLeave={() => handleItemClick('nine')}><a href="#">Electronics</a></li>
        </ul>
      </nav>

      {opennewpage === 'one' &&
        <div className='hiddendiv'>
          <div className='hiddendivone'>
            <p>All women ethnic</p>
            <ul>
              <li><a href="">View all</a></li>
            </ul>
          </div>
          <div style={{ backgroundColor: "rgb(230, 240, 240)" }} className='hiddendivone'>
            <p>Sarees</p>
            <ul>
              <li><a href="#">All Sarees</a></li>
              <li><a href="#">Silk Sarees</a></li>
              <li><a href="#">Cotton Silk Sarees</a></li>
              <li><a href="#">Cotton Sarees</a></li>
              <li><a href="#">Georgette Sarees</a></li>
              <li><a href="#">Chiffon Sarees</a></li>
              <li><a href="#">Embroidered Sarees</a></li>
              <li><a href="#">Satin Sarees</a></li>
            </ul>
          </div>
          <div className='hiddendivone'>
            <p>Kurtis</p>
            <ul>
              <li><a href="#">All Kurtis</a></li>
              <li><a href="#">Anarkali Kurtis</a></li>
              <li><a href="#">Rayon Kurtis</a></li>
              <li><a href="#">Cotton Kurtis</a></li>
              <li><a href="#">Embroidered Kurtis</a></li>
            </ul>
          </div>
          <div style={{ backgroundColor: "rgb(230, 240, 240)" }} className='hiddendivone'>
            <p>Kurta Sets</p>
            <ul>
              <li><a href="#">All Kurta Sets</a></li>
            </ul>
          </div>
          <div className='hiddendivone'>
            <p>Suits & Dress Material</p>
            <ul>
              <li><a href="#">All Suits & Dress Material</a></li>
              <li><a href="#">Cotton Suits</a></li>
              <li><a href="#">Embroidered Suits</a></li>
              <li><a href="#">Chanderi Suits</a></li>
            </ul>
          </div>
          <div style={{ backgroundColor: "rgb(230, 240, 240)" }} className='hiddendivone'>
            <p>Other Ethnic</p>
            <ul>
              <li><a href="#">Blouses</a></li>
              <li><a href="#">Dupattas</a></li>
              <li><a href="#">Lehanga</a></li>
              <li><a href="#">Gown</a></li>
              <li><a href="#">Ethnic Bottomwear</a></li>
            </ul>
          </div>
        </div>}

      {opennewpage === 'two' &&
        <div className='hiddendiv'>
          <div className='hiddendivone'>
            <p>Topwear</p>
            <ul>
              <li><a href="">Tops</a></li>
              <li><a href="">Dresses</a></li>
              <li><a href="">Sweaters</a></li>
              <li><a href="">Jumpsuits</a></li>
            </ul>
          </div>
          <div style={{ backgroundColor: "rgb(230, 240, 240)" }} className='hiddendivone'>
            <p>Bottomwear</p>
            <ul>
              <li><a href="#">Jeans</a></li>
              <li><a href="#">Jeggings</a></li>
              <li><a href="#">Palazzos</a></li>
              <li><a href="#">Shorts</a></li>
              <li><a href="#">Skirts</a></li>
            </ul>
          </div>
          <div className='hiddendivone'>
            <p>Innerwear</p>
            <ul>
              <li><a href="#">Bra</a></li>
              <li><a href="#">Briefs</a></li>
            </ul>
          </div>
          <div style={{ backgroundColor: "rgb(230, 240, 240)" }} className='hiddendivone'>
            <p>Sleepwear</p>
            <ul>
              <li><a href="#">Nightsuits</a></li>
              <li><a href="#">Babydolls</a></li>
            </ul>
          </div>
        </div>}

      {opennewpage === 'three' &&
        <div className='hiddendiv'>
          <div className='hiddendivone'>
            <p>Topwear</p>
            <ul>
              <li><a href="">Tops</a></li>
              <li><a href="">Dresses</a></li>
              <li><a href="">Sweaters</a></li>
              <li><a href="">Jumpsuits</a></li>
            </ul>
          </div>
          <div style={{ backgroundColor: "rgb(230, 240, 240)" }} className='hiddendivone'>
            <p>Bottomwear</p>
            <ul>
              <li><a href="#">Jeans</a></li>
              <li><a href="#">Jeggings</a></li>
              <li><a href="#">Palazzos</a></li>
              <li><a href="#">Shorts</a></li>
              <li><a href="#">Skirts</a></li>
            </ul>
          </div>
          <div className='hiddendivone'>
            <p>Innerwear</p>
            <ul>
              <li><a href="#">Bra</a></li>
              <li><a href="#">Briefs</a></li>
            </ul>
          </div>
          <div style={{ backgroundColor: "rgb(230, 240, 240)" }} className='hiddendivone'>
            <p>Sleepwear</p>
            <ul>
              <li><a href="#">Nightsuits</a></li>
              <li><a href="#">Babydolls</a></li>
            </ul>
          </div>
        </div>}

      {opennewpage === 'four' &&
        <div className='hiddendiv'>
          <div className='hiddendivone'>
            <p>Topwear</p>
            <ul>
              <li><a href="">Tops</a></li>
              <li><a href="">Dresses</a></li>
              <li><a href="">Sweaters</a></li>
              <li><a href="">Jumpsuits</a></li>
            </ul>
          </div>
          <div style={{ backgroundColor: "rgb(230, 240, 240)" }} className='hiddendivone'>
            <p>Bottomwear</p>
            <ul>
              <li><a href="#">Jeans</a></li>
              <li><a href="#">Jeggings</a></li>
              <li><a href="#">Palazzos</a></li>
              <li><a href="#">Shorts</a></li>
              <li><a href="#">Skirts</a></li>
            </ul>
          </div>
          <div className='hiddendivone'>
            <p>Innerwear</p>
            <ul>
              <li><a href="#">Bra</a></li>
              <li><a href="#">Briefs</a></li>
            </ul>
          </div>
          <div style={{ backgroundColor: "rgb(230, 240, 240)" }} className='hiddendivone'>
            <p>Sleepwear</p>
            <ul>
              <li><a href="#">Nightsuits</a></li>
              <li><a href="#">Babydolls</a></li>
            </ul>
          </div>
        </div>}

      {opennewpage === 'five' &&
        <div className='hiddendiv'>
          <div className='hiddendivone'>
            <p>Topwear</p>
            <ul>
              <li><a href="">Tops</a></li>
              <li><a href="">Dresses</a></li>
              <li><a href="">Sweaters</a></li>
              <li><a href="">Jumpsuits</a></li>
            </ul>
          </div>
          <div style={{ backgroundColor: "rgb(230, 240, 240)" }} className='hiddendivone'>
            <p>Bottomwear</p>
            <ul>
              <li><a href="#">Jeans</a></li>
              <li><a href="#">Jeggings</a></li>
              <li><a href="#">Palazzos</a></li>
              <li><a href="#">Shorts</a></li>
              <li><a href="#">Skirts</a></li>
            </ul>
          </div>
          <div className='hiddendivone'>
            <p>Innerwear</p>
            <ul>
              <li><a href="#">Bra</a></li>
              <li><a href="#">Briefs</a></li>
            </ul>
          </div>
          <div style={{ backgroundColor: "rgb(230, 240, 240)" }} className='hiddendivone'>
            <p>Sleepwear</p>
            <ul>
              <li><a href="#">Nightsuits</a></li>
              <li><a href="#">Babydolls</a></li>
            </ul>
          </div>
        </div>}

      {opennewpage === 'six' &&
        <div className='hiddendiv'>
          <div className='hiddendivone'>
            <p>Topwear</p>
            <ul>
              <li><a href="">Tops</a></li>
              <li><a href="">Dresses</a></li>
              <li><a href="">Sweaters</a></li>
              <li><a href="">Jumpsuits</a></li>
            </ul>
          </div>
          <div style={{ backgroundColor: "rgb(230, 240, 240)" }} className='hiddendivone'>
            <p>Bottomwear</p>
            <ul>
              <li><a href="#">Jeans</a></li>
              <li><a href="#">Jeggings</a></li>
              <li><a href="#">Palazzos</a></li>
              <li><a href="#">Shorts</a></li>
              <li><a href="#">Skirts</a></li>
            </ul>
          </div>
          <div className='hiddendivone'>
            <p>Innerwear</p>
            <ul>
              <li><a href="#">Bra</a></li>
              <li><a href="#">Briefs</a></li>
            </ul>
          </div>
          <div style={{ backgroundColor: "rgb(230, 240, 240)" }} className='hiddendivone'>
            <p>Sleepwear</p>
            <ul>
              <li><a href="#">Nightsuits</a></li>
              <li><a href="#">Babydolls</a></li>
            </ul>
          </div>
        </div>}

      {opennewpage === 'seven' &&
        <div className='hiddendiv'>
          <div className='hiddendivone'>
            <p>Topwear</p>
            <ul>
              <li><a href="">Tops</a></li>
              <li><a href="">Dresses</a></li>
              <li><a href="">Sweaters</a></li>
              <li><a href="">Jumpsuits</a></li>
            </ul>
          </div>
          <div style={{ backgroundColor: "rgb(230, 240, 240)" }} className='hiddendivone'>
            <p>Bottomwear</p>
            <ul>
              <li><a href="#">Jeans</a></li>
              <li><a href="#">Jeggings</a></li>
              <li><a href="#">Palazzos</a></li>
              <li><a href="#">Shorts</a></li>
              <li><a href="#">Skirts</a></li>
            </ul>
          </div>
          <div className='hiddendivone'>
            <p>Innerwear</p>
            <ul>
              <li><a href="#">Bra</a></li>
              <li><a href="#">Briefs</a></li>
            </ul>
          </div>
          <div style={{ backgroundColor: "rgb(230, 240, 240)" }} className='hiddendivone'>
            <p>Sleepwear</p>
            <ul>
              <li><a href="#">Nightsuits</a></li>
              <li><a href="#">Babydolls</a></li>
            </ul>
          </div>
        </div>}

      {opennewpage === 'eight' &&
        <div className='hiddendiv'>
          <div className='hiddendivone'>
            <p>Topwear</p>
            <ul>
              <li><a href="">Tops</a></li>
              <li><a href="">Dresses</a></li>
              <li><a href="">Sweaters</a></li>
              <li><a href="">Jumpsuits</a></li>
            </ul>
          </div>
          <div style={{ backgroundColor: "rgb(230, 240, 240)" }} className='hiddendivone'>
            <p>Bottomwear</p>
            <ul>
              <li><a href="#">Jeans</a></li>
              <li><a href="#">Jeggings</a></li>
              <li><a href="#">Palazzos</a></li>
              <li><a href="#">Shorts</a></li>
              <li><a href="#">Skirts</a></li>
            </ul>
          </div>
          <div className='hiddendivone'>
            <p>Innerwear</p>
            <ul>
              <li><a href="#">Bra</a></li>
              <li><a href="#">Briefs</a></li>
            </ul>
          </div>
          <div style={{ backgroundColor: "rgb(230, 240, 240)" }} className='hiddendivone'>
            <p>Sleepwear</p>
            <ul>
              <li><a href="#">Nightsuits</a></li>
              <li><a href="#">Babydolls</a></li>
            </ul>
          </div>
        </div>}

        {opennewpage === 'nine' &&
        <div className='hiddendiv'>
          <div className='hiddendivone'>
            <p>Topwear</p>
            <ul>
              <li><a href="">Tops</a></li>
              <li><a href="">Dresses</a></li>
              <li><a href="">Sweaters</a></li>
              <li><a href="">Jumpsuits</a></li>
            </ul>
          </div>
          <div style={{ backgroundColor: "rgb(230, 240, 240)" }} className='hiddendivone'>
            <p>Bottomwear</p>
            <ul>
              <li><a href="#">Jeans</a></li>
              <li><a href="#">Jeggings</a></li>
              <li><a href="#">Palazzos</a></li>
              <li><a href="#">Shorts</a></li>
              <li><a href="#">Skirts</a></li>
            </ul>
          </div>
          <div className='hiddendivone'>
            <p>Innerwear</p>
            <ul>
              <li><a href="#">Bra</a></li>
              <li><a href="#">Briefs</a></li>
            </ul>
          </div>
          <div style={{ backgroundColor: "rgb(230, 240, 240)" }} className='hiddendivone'>
            <p>Sleepwear</p>
            <ul>
              <li><a href="#">Nightsuits</a></li>
              <li><a href="#">Babydolls</a></li>
            </ul>
          </div>
        </div>}
    </div>
  )
}

export default Navbar
