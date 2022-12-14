import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import Navbar from '../../components/Navbar';
import LeftBar from './LeftBar';
import RightBar from './RightBar';
import ProductConteiner from './ProductConteiner';
import Pagination from '../../components/Pagination';

import './App.css'

import { useDispatch, useSelector } from "react-redux";
import { fetchItems, itemsSelector } from "../../features/items";

const AppWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 105px 0 105px;
  background-color: #fafafa;
`;

function App() {

    const [paginationInfo, setPaginationInfo] = useState({
        totalRecords: "",
        totalPages: "",
        pageLimit: "",
        currentPage: "",
        startIndex: "",
        endIndex: ""
    })
    const dispatch = useDispatch();
    const { loading, error, items, sortingBy, selectedTags, selectedBrands, activeItemType } = useSelector(itemsSelector);

    useEffect(() => {
        dispatch(fetchItems(sortingBy, selectedTags, selectedBrands, activeItemType));
    }, [dispatch, sortingBy, selectedTags, selectedBrands, activeItemType]);

    const onChangePage = (data) => {
        setPaginationInfo({
            pageLimit: data.pageLimit,
            totalPages: data.totalPages,
            currentPage: data.page,
            startIndex: data.startIndex,
            endIndex: data.endIndex
        })
    }

    return (
        <>
            <Navbar />
            <AppWrapper>
                <div className='AppContainer'>
                    <LeftBar />
                    <ProductConteiner items={items} loading={loading} error={error} startIndex={paginationInfo.startIndex} endIndex={paginationInfo.endIndex} />
                    <RightBar />
                </div>
                <div className='PaginationContainer'>
                    <Pagination totalRecords={items.length}
                        pageLimit={16}
                        initialPage={1}
                        pagesToShow={10}
                        onChangePage={onChangePage} />
                </div>
                <div className='Footer'>
                    <p>??2019 Market</p>
                    <p>???</p>
                    <p>Privacy Policy</p>
                </div>
            </AppWrapper>

        </>
    );
}

export default App;
