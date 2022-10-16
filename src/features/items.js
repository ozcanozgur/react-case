import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const initialState = {
    loading: false,
    error: false,
    items: [],
    sortingBy: "priceLowToHigh",
    brands: [],
    tags: [],
    selectedTags: ["All"],
    selectedBrands: ["All"],
    allItemLength: 0,
    basketItems: [],
    totalPrice: 0,
    activeItemType: "mug"
};

const itemSlice = createSlice({
    name: "items",
    initialState,
    reducers: {
        setLoading: (state) => {
            state.loading = true;
        },
        setItems: (state, { payload }) => {
            state.loading = false;
            state.error = false;
            state.items = payload;
            let tags, brands, brand;

            if (state.tags.length == 0 & state.brands.length == 0) {
                state.allItemLength = payload.length

                tags = { "All": state.allItemLength };
                brands = { "All": state.allItemLength };

                payload.map((item) => {
                    item.tags.map((tag) => {
                        if (!tags[tag]) {
                            tags[tag] = 1;
                        }
                        else {
                            tags[tag] = tags[tag] + 1;
                        }
                    })

                    brand = item.manufacturer;

                    if (!brands[brand]) {
                        brands[brand] = 1;
                    }
                    else {
                        brands[brand] = brands[brand] + 1;
                    }
                })
                state.tags = tags;
                state.brands = brands;
            }
            else {
                let allTagCount = 0;

                state.selectedBrands.forEach((brand) => {
                    allTagCount += state.brands[brand]
                })

                tags = { "All": allTagCount };

                payload.map((item) => {
                    item.tags.map((tag) => {
                        if (!tags[tag]) {
                            tags[tag] = 1;
                        }
                        else {
                            tags[tag] = tags[tag] + 1;
                        }
                    })
                })
                state.tags = tags;
            }
        },
        setError: (state) => {
            state.error = true;
        },
        setSorting: (state, { payload }) => {
            state.sortingBy = payload;
        },
        setSelectedTags: (state, { payload }) => {
            if (payload.includes("All") && payload.length > 1) {
                payload.splice(payload.indexOf("All"), 1);
            }
            state.selectedTags = payload
        },
        setSelectedBrands: (state, { payload }) => {
            if (payload.includes("All") && payload.length > 1) {
                payload.splice(payload.indexOf("All"), 1);
            }
            state.selectedBrands = payload
        },
        addBasket: (state, { payload }) => {
            let isAdded = false;

            state.basketItems.forEach((item) => {
                if (item.added == payload.added) {
                    item.qty++;
                    isAdded = true;
                }
            })

            if (!isAdded) {
                let newItem = {
                    "added": payload.added,
                    "name": payload.name,
                    "price": payload.price,
                    "qty": 1,
                }
                state.basketItems.push(newItem)
            }

            state.totalPrice += payload.price
        },
        removeBasket: (state, { payload }) => {
            state.basketItems.forEach((item, index) => {
                console.log(index)
                if (item.added == payload.added) {
                    if (item.qty > 1) {
                        item.qty--;

                    }
                    else {
                        state.basketItems.splice(index, 1)
                    }

                    state.totalPrice = Math.abs(state.totalPrice - payload.price)
                }
            })
        },
        setActiveItemType: (state, { payload }) => {
            state.activeItemType = payload;
        },
    },
});

export const { setLoading, setItems, setError, setSorting, setBrands, setSelectedBrands, setSelectedTags, addBasket, removeBasket, setActiveItemType } = itemSlice.actions;

export const itemsSelector = (state) => state.items;

export default itemSlice.reducer;

const api = axios.create({
    baseURL: "https://getir-fake-server-app.herokuapp.com/",
    withCredentials: false,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
});

export function fetchItems(sortingBy, selectedTags, selectedBrands, activeItemType) {
    let order, sort, tags, brands;

    switch (sortingBy) {
        case "priceLowToHigh":
            sort = "price";
            order = "asc"
            break;
        case "priceHighToLow":
            sort = "price";
            order = "desc"
            break;
        case "newToOld":
            sort = "added";
            order = "desc"
            break;
        case "oldToNow":
            sort = "added";
            order = "asc"
            break;
    }

    let url = 'https://getir-fake-server-app.herokuapp.com/' + `items?_sort=${sort}&_order=${order}&itemType=${activeItemType}`;

    if (selectedBrands[0] !== "All") {
        tags = "&manufacturer_like="
        url += tags + selectedBrands.join("&manufacturer_like=")
    }

    if (selectedTags[0] !== "All") {
        brands = "&tags_like="
        url += brands + selectedTags.join(",")
    }

    console.log(url)
    return async (dispatch) => {
        dispatch(setLoading());
        api
            .get(url)
            .then((response) => {
                dispatch(setItems(response.data));
            })
            .catch((er) => {
                dispatch(setError(er));
            });
    };
}