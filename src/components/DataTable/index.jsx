import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import {CBCheckbox} from '../../styled-components';
import Icon from './img/qroni-icon.svg';
import LinkIcon from './img/link-icon.svg';
import { FiSearch } from 'react-icons/fi';

const DataTable =()=> {
  const [isOpen, setIsOpen] = useState(null);
  const [laptop, setLaptop] = useState(window.matchMedia("(min-width: 778px)").matches);
  
    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
      const handler = e => setLaptop(e.matches);
      window.matchMedia("(min-width: 778px)").addEventListener('change', handler);
    });

  const onClickRowOpenHandle = ( $id ) => {
    setIsOpen($id);
  }

  const onClickRowCloseHandle = ( ) => {
    setIsOpen(null);
  }

  const data = [
    {
      id: 1,
      list: [
        {
          icon: Icon,
        },
        {
          title: "Earn Qroni",
          content: "Qroni-BNB LP",
        },
        {
          title: "Earned",
          content: "0",
        },
        {
          title: "APR",
          content: "41.68%",
        },
        {
          title: "Total Staked",
          content: "$6,881,690",
        },
        {
          title: "Earned",
          content: "$0.00",
        },
      ]
    },
    {
      id: 1,
      list: [
        {
          icon: Icon,
        },
        {
          title: "Earn Qroni",
          content: "Qroni-BNB LP",
        },
        {
          title: "Earned",
          content: "0",
        },
        {
          title: "APR",
          content: "41.68%",
        },
        {
          title: "Total Staked",
          content: "$6,881,690",
        },
        {
          title: "Earned",
          content: "$0.00",
        },
      ]
    },
    {
      id: 1,
      list: [
        {
          icon: Icon,
        },
        {
          title: "Earn Qroni",
          content: "Qroni-BNB LP",
        },
        {
          title: "Earned",
          content: "0",
        },
        {
          title: "APR",
          content: "41.68%",
        },
        {
          title: "Total Staked",
          content: "$6,881,690",
        },
        {
          title: "Earned",
          content: "$0.00",
        },
      ]
    },
    {
      id: 1,
      list: [
        {
          icon: Icon,
        },
        {
          title: "Earn Qroni",
          content: "Qroni-BNB LP",
        },
        {
          title: "Earned",
          content: "0",
        },
        {
          title: "APR",
          content: "41.68%",
        },
        {
          title: "Total Staked",
          content: "$6,881,690",
        },
        {
          title: "Earned",
          content: "$0.00",
        },
      ]
    },
    {
      id: 1,
      list: [
        {
          icon: Icon,
        },
        {
          title: "Earn Qroni",
          content: "Qroni-BNB LP",
        },
        {
          title: "Earned",
          content: "0",
        },
        {
          title: "APR",
          content: "41.68%",
        },
        {
          title: "Total Staked",
          content: "$6,881,690",
        },
        {
          title: "Earned",
          content: "$0.00",
        },
      ]
    },
    {
      id: 1,
      list: [
        {
          icon: Icon,
        },
        {
          title: "Earn Qroni",
          content: "Qroni-BNB LP",
        },
        {
          title: "Earned",
          content: "0",
        },
        {
          title: "APR",
          content: "41.68%",
        },
        {
          title: "Total Staked",
          content: "$6,881,690",
        },
        {
          title: "Earned",
          content: "$0.00",
        },
      ]
    },
    {
      id: 1,
      list: [
        {
          icon: Icon,
        },
        {
          title: "Earn Qroni",
          content: "Qroni-BNB LP",
        },
        {
          title: "Earned",
          content: "0",
        },
        {
          title: "APR",
          content: "41.68%",
        },
        {
          title: "Total Staked",
          content: "$6,881,690",
        },
        {
          title: "Earned",
          content: "$0.00",
        },
      ]
    },
    {
      id: 1,
      list: [
        {
          icon: Icon,
        },
        {
          title: "Earn Qroni",
          content: "Qroni-BNB LP",
        },
        {
          title: "Earned",
          content: "0",
        },
        {
          title: "APR",
          content: "41.68%",
        },
        {
          title: "Total Staked",
          content: "$6,881,690",
        },
        {
          title: "Earned",
          content: "$0.00",
        },
      ]
    },
  ]
  const Section = styled.section`

  `
  const TableBox = styled.div`
    width: 100%;
    background-color: #FDFDFD;
    color: #333333;
    border-radius: 8px;

    .btn{
      font-size: 13px;
      line-height: 16px;
      letter-spacing: 0.2px;
      padding: 10px 20px;
      border-radius: 4px;
      color: #fff;
    }

    h6{
      color: #4F4F4F;
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;
    }
    h5{
      font-size: 16px;
      line-height: 1;
      letter-spacing: 0.2px;
    }

    table{
      width: 100%;

      td{
        padding: 10px 15px;
        border-bottom: 1px solid rgba(102, 112, 133, 0.2);
        @media(min-width: 991px){
          padding: 20px;
        }

        &:last-child{
          text-align: center;
        }

        &:nth-child(2){
          h4{
            font-size: 12px;
            font-weight: 500;
            line-height: 1;
          }
        }
        &:not(:nth-child(2)){
          h4{
            font-size: 16px;
            font-weight: 500;
            line-height: 1;
          }
        }

      }
    }
  `
  const ButtonBox = styled.div`
    display: inline-block;
    background-color: #F0EFF0;
    border-radius: 4px;
    padding: 15px;
    text-align: start;
  `
  const HeadingFilter = styled.div`
    display: flex;
    align-items: stretch;
    gap: 1rem;
    margin: 50px 0;

    .search-group{
      display: inline-flex;
      align-items: center;
      background-color: #fff;
      color: #000;
      padding: 10px 20px;
      border-radius: 8px;

      svg{
        font-size: 16px;
        min-width: 15px
      }

      input{
        border: 0;
        outline: none;
        box-shadow: none;
        width: 100%;
      }
    }
    .select-group select{
        height: 100%;
        padding: 10px 20px;
        border-radius: 8px;
    }
  `
  const Details = styled.tr`
  `
  const ListHeading = styled.div`
    font-size: 12px;
    line-height: 2;
    font-weight: 500;
    color: #364073;
  `

  return (
    <Section>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {/* Heading */}
            <HeadingFilter>
              {/* Input Group */}
              <div className="search-group">
                <FiSearch className='me-1 me-md-3'/>                
                <input type="text" placeholder='Search'/>
              </div>
              {/* Input Select */}
              <div className="select-group">
                <select name="" id="">
                  <option value="">Choose One</option>
                  <option value="item-1">Item 1</option>
                  <option value="item-2">Item 2</option>
                  <option value="item-3">Item 3</option>
                  <option value="item-4">Item 4</option>
                  <option value="item-5">Item 5</option>
                </select>
              </div>
              {/* Input Select */}
              <div className="checkbox-group align-self-center">
                <CBCheckbox>
                  <input id='checkbox-1' type="checkbox" />
                  <label htmlFor="checkbox-1" className='cb-checkbox'>Staked</label>
                </CBCheckbox>
              </div>
              
            </HeadingFilter>
            <TableBox>
              <table>
                <tbody>
                  {data && data.map((item, i) =>(
                    <>
                    {!laptop ? (
                      <>
                    <tr key={i} onClick={isOpen !== null && isOpen === i ? onClickRowCloseHandle : () => onClickRowOpenHandle(i)}>
                      {item.list && item.list.slice(0, 2).map((sub, subIdx) =>(
                        <td key={subIdx} className={sub.icon ? "pe-0" : "text-start" } width={sub.icon ? 53 : ""} colSpan={sub.icon ? 1 : 5}>
                          {sub.icon && <img src={sub.icon} width={53} alt="" />}
                          {sub.title && <h6>{sub.title}</h6>}
                          {sub.content && <h4>{sub.content}</h4>}
                        </td>
                      ) )}
                    </tr>
                    <tr key={i} onClick={isOpen !== null && isOpen === i ? onClickRowCloseHandle : () => onClickRowOpenHandle(i)}>
                      {item.list && item.list.slice(2, 5).map((sub, subIdx) =>(
                      // {item.list && item.list.map((sub, subIdx) =>(
                        <td key={subIdx} className={sub.icon ? "pe-0" : "" } width={sub.icon ? 53 : ""}>
                          {sub.icon && <img src={sub.icon} width={53} alt="" />}
                          {sub.title && <h6>{sub.title}</h6>}
                          {sub.content && <h4>{sub.content}</h4>}
                        </td>
                      ) )}
                    </tr>
                    </>
                    )
                    :
                    <tr key={i} onClick={isOpen !== null && isOpen === i ? onClickRowCloseHandle : () => onClickRowOpenHandle(i)}>
                      {item.list && item.list.map((sub, subIdx) =>(
                      // {item.list && item.list.map((sub, subIdx) =>(
                        <td key={subIdx} className={sub.icon ? "pe-0" : "" } width={sub.icon ? 53 : ""}>
                          {sub.icon && <img src={sub.icon} width={53} alt="" />}
                          {sub.title && <h6>{sub.title}</h6>}
                          {sub.content && <h4>{sub.content}</h4>}
                        </td>
                      ) )}
                    </tr>
                    }
                    {isOpen !== null && isOpen === i &&
                    <Details>
                      <td colSpan={6}>
                        <div className="row align-items-center gy-4">
                          <div className="col">
                            <div className="d-flex align-items-start flex-column gap-1">
                              <ListHeading>Total Locked:</ListHeading>
                              <ListHeading>Average Lock Duration:</ListHeading>
                              <ListHeading>Performance Fee:</ListHeading>
                            </div>
                          </div>
                          <div className="col">
                            <div className="d-flex align-items-start flex-column gap-1">
                              <div>
                                <a href="#" className='text-gr-primary text-nowrap'>
                                  <span>Get Qroni-BNB LP</span>
                                  <img src={LinkIcon} className="ms-2" alt="" />
                                </a>
                              </div>
                              <div>
                                <a href="#" className='text-gr-primary text-nowrap'>
                                  <span>View Contract</span>
                                  <img src={LinkIcon} className="ms-2" alt="" />
                                </a>
                              </div>
                              <div>
                                <a href="#" className='text-gr-primary text-nowrap'>
                                  <span>See Pair Info</span>
                                  <img src={LinkIcon} className="ms-2" alt="" />
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="col">
                            <div className="text-lg-center text-start">
                              <ButtonBox>
                                <div className="d-flex flex-wrap gap-2 gap-lg-4">
                                  <div>
                                    <h6>Qroni Earned</h6>
                                    <h5>123.1267989273515344790</h5>
                                  </div>
                                  <div className='align-self-end'>
                                    <button className="btn btn-gr-primary">Harvest</button>
                                  </div>
                                </div>
                              </ButtonBox>
                            </div>
                          </div>
                          <div className="col">
                            <div className="text-lg-center text-start">
                              <ButtonBox>
                                <h6>Start Farming</h6>
                                <button className="btn btn-gr-primary">Connect Wallet</button>
                              </ButtonBox>
                            </div>
                          </div>
                        </div>
                      </td>
                    </Details>
                    }
                  </>
                  ))}
                </tbody>
              </table>
            </TableBox>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default DataTable