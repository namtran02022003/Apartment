import { FC } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faEdit, faTrash, faInfo } from '@fortawesome/free-solid-svg-icons'
import { listApartment } from './Apartmentjson'
const ApartmentStyled = styled.div`
  .apartment-flex {
    display: flex;
    justify-content: space-between;
    padding: 15px 10px;
    align-items: center;
    &-item {
      form {
        margin: 0 10px;
        border: 1px solid #ccc;
        border-radius: 40px;
        position: relative;
        input {
          border: none;
          padding: 10px 15px;
          border-radius: 40px;
          &:focus-within {
            outline: 1px solid #6666;
          }
        }
        button {
          border: none;
          position: absolute;
          top: 0;
          right: 0;
          height: 100%;
          cursor: pointer;
          padding: 0px 15px 0px 10px;
          box-sizing: none;
          border-radius: 0 40px 40px 0;
          &:hover {
            background: #ccc;
          }
        }
      }
      .btn-create {
        border: none;
        padding: 10px 15px;
        border-radius: 40px;
        color: white;
        background: rgb(23, 53, 139);
        cursor: pointer;
        &:hover {
          background: rgb(19 32 68);
        }
      }
    }
  }
  .apartment-content {
    background: #fff;
    min-height: 500px;
    table {
      width: 100%;
      border-collapse: collapse;
      & th:nth-child(1) {
        width: 10%;
      }
      & th:nth-child(2) {
        width: 30%;
      }
      & th:nth-child(3) {
        width: 15%;
      }
      & th:nth-child(4) {
        width: 10%;
      }
      & th:nth-child(5) {
        width: 10%;
      }
      & th:nth-child(6) {
        width: 25%;
      }
      .td-action {
        display: flex;
        justify-content: space-around;
        svg {
          display: block;
          width: 17px;
          height: 17px;
          border-radius: 50%;
          padding: 5px;
          cursor: pointer;
        }
        & svg:nth-child(1) {
          color: blue;
          border: 1px solid blue;
          background: rgb(241 234 234);
        }
        & svg:nth-child(2) {
          color: #dd3939;
          border: 1px solid #dd3939;
          background: rgb(241 234 234);
        }
        & svg:nth-child(3) {
          color: blue;
          border: 1px solid blue;
          background: rgb(241 234 234);
        }
      }
    }
    table,
    th,
    td {
      border: 1px solid #ccc;
      padding: 5px 10px;
    }
  }
`
const Apartment: FC = () => {
  return (
    <ApartmentStyled>
      <div className="apartment-flex">
        <div className="apartment-flex-item">
          <h4>Apartment list / Create new Apartment</h4>
        </div>
        <div className="apartment-flex-item apartment-flex">
          <form>
            <input type="text" placeholder="Enter search..." />
            <button className="btn-search">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </form>
          <button className="btn-create">Create new Apartment</button>
        </div>
      </div>
      <div className="apartment-content">
        <table>
          <tbody>
            <tr>
              <th>Id</th>
              <th>Hosted name</th>
              <th>Area</th>
              <th>Status</th>
              <th>Num/Apartment</th>
              <th colSpan={2}>Action</th>
            </tr>
            {listApartment.map((apartment) => {
              return (
                <tr key={apartment.id}>
                  <td>#{apartment.id}</td>
                  <td>{apartment.name}</td>
                  <td>{apartment.area}</td>
                  <td>{apartment.status}</td>
                  <td>{apartment.number_of_room}</td>
                  <td className="td-action">
                    <FontAwesomeIcon icon={faEdit} />
                    <FontAwesomeIcon icon={faTrash} />
                    <FontAwesomeIcon icon={faInfo} />
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </ApartmentStyled>
  )
}

export default Apartment