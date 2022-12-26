import React, { useState } from 'react'
let arrayData = []
const App = () => {
  let [firstname, setFirstname] = useState("");
  let [lastname, setLastname] = useState("");
  let [item, setItem] = useState(arrayData);
  let [toggle, setToggle] = useState(true)
  let [editIndex, setEditIndex] = useState()


  let inputValue1 = (event) => {
    setFirstname(event.target.value);
  }
  let inputValue2 = (event) => {
    setLastname(event.target.value);
  }

  let AddInputValue = () => {

    if (firstname.trim() === "") {
      alert("plz enter firstname and lastname");
    }
    else if (lastname.trim() === "") {
      alert("plz enter firstname and lastname");
    }

    else {
      let isDuplicate = true;
      item.forEach(ele => {
        if (ele.lastname === lastname && ele.firstname === firstname) isDuplicate = false;
      })

      if (!isDuplicate) {
        alert("user already exist")
      } else {
        let newData = {
          firstname,
          lastname
        }
        setItem((olDData) => {

          return (
            [...olDData, newData]
          )
        });
        setFirstname("");
        setLastname("");
      }
    }

  }

  let deleteItem = (id) => {
    let newArray = item.filter((arr, index) => {
      return id !== index
    })
    setItem(newArray);
  }

  let editeItem = (arr, index) => {

    setFirstname(arr.firstname);
    setLastname(arr.lastname)
    setToggle(false)
    setEditIndex(index);
  }

  let updateData = () => {

    if (firstname.trim() === "") {
      alert("plz enter firstname and lastname");
    }
    else if (lastname.trim() === "") {
      alert("plz enter firstname and lastname");
    }
    else {
      let copyitem = item;
      let newData = {
        firstname,
        lastname
      }
      copyitem[editIndex] = newData
      setItem([...copyitem]);
      setToggle(true)
    }
  }
  return (
    <div>
      <input type='text' name='firstname' placeholder='firstname' value={firstname} onChange={inputValue1} ></input>
      <input type='text' name='lastname' placeholder='lastname' value={lastname} onChange={inputValue2} ></input>
      {
        toggle ? <button onClick={AddInputValue}>Add</button> : <button onClick={() => updateData()} >Update</button>
      }

      <table>
        <tbody>
          {
            item.map((arrayItem, index) => {
              return (
                <tr key={index}>
                  <td>{arrayItem.firstname}</td>
                  <td>{arrayItem.lastname}</td>
                  <td>
                    <button onClick={() => editeItem(arrayItem, index)}>Edit</button>
                    <button onClick={() => deleteItem(index)}>Delete</button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default App