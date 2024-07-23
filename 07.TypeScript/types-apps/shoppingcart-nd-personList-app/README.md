## React Redux Toolkit with TypeScript

- Source code:
  https://github.com/vahid-nejad/redux-toolkit-example

# Part I

https://www.youtube.com/watch?v=EqbwHO6Vgbg&t=766s

1. Install react typescript app:
   npx create-react-app my-app --template typescript

2. Install redux
   npm install react-redux

3. Create the folders (component and store). I call store as redux. File inside the store are .ts

3.1 - Set type for the array of data that I will fetch
export interface Person {
id: number;
name: string;
}

interface PersonState {
persons: Person[];
}

const initialState: PersonState = {
persons: [],
};

3.2 - Reducer:
export const PersonSlice = createSlice({
name: "person",
initialState,
reducers: {
addPerson: (state, action: PayloadAction<{ name: string }>) => {
state.persons.push({
id: state.persons.length,
name: action.payload.name,
});
},
}
})

- Here the id property is set nevertheless, that it is not necesary coz the database creates the id automatically

4. Create the store (store.ts). I prefer to name the folder redux and this file store to prevent confusing.

- This is similar to other store I have created, just to the extra feature of typescript:

import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

- Wtih typescript, the useSelector and useDispatch wont't work so this is very important!!!!

5. Add.tsx component.

- This is a form with an input field and a botton with a onChange function attatched to it in order to grab the input value and send it to the store
- useRef is used here:
  const name = useRef<string>("");
  onChange={(e) => (name.current = e.target.value)}
  onClick={() => dispatch(addPerson({ name: name.current }))}

- Explanation of useRef:

  https://www.robinwieruch.de/typescript-react-useref/

- Also use of useDispatch:
  const dispatch = useAppDispatch();
  onClick={() => dispatch(addPerson({ name: name.current }))}

* In this example dispatch is placed in the return statemente. I usually create a function that I place on the element (button). This way save some space but is less eye friendly

6. tailwind is used to CSS of this app

Check documentation:
https://tailwindcss.com/docs/installation

7. List component.

- This will display the list of persons.
- For the CSS, "table" is used
- use of useSelector with typescript:
  import { useAppSelector } from "../redux/store";
  const persons = useAppSelector((state) => state.person.persons);
  <tbody>
  {persons.map((person) => (
  <tr className="even:bg-slate-50" key={person.id}>
  <td className="p-2">{person.id}</td>
  <td className="p-2">{person.name}</td>
  </tr>
  ))}
  </tbody>

8. containers/App.tsx. Render components:

  <div>
    <Add />
    <List />
  </div>

# Part II

https://www.youtube.com/watch?v=qedcu9UqHzw

1. src/redux/features/personSlice.ts : fetch data using asynThunk

export const fetchPerson = createAsyncThunk(
"person/fetch",
async (thunkAPI) => {
const response = await fetch("http://localhost:8000/person", {
method: "GET",
});
const data = response.json();
return data;
},
);

- That (thunkAPI) I don't really understand what is the use of it!

2. src/redux/features/personSlice.ts : Extra reducer for fetch data:
   extraReducers: (builder) => {
   builder.addCase(fetchPerson.fulfilled, (state, action) => {
   state.persons = action.payload;
   });
   }

3. src/redux/features/personSlice.ts : POST data using asynThunk
   export const savePerson = createAsyncThunk(
   "person/save",
   async (name: string, thunkAPI) => {
   const response = await fetch("http://localhost:8000/person", {
   method: "POST",
   headers: {
   "Content-Type": "application/json",
   },
   body: JSON.stringify({
   name,
   }),
   });
   const data = await response.json();
   return data;
   },
   );

4. src/redux/features/personSlice.ts : Extra reducer for POST data:
   builder.addCase(savePerson.fulfilled, (state, action) => {
   state.persons.push(action.payload);
   });

5. src/components/Add.tsx : Implement the savePerson function that post data to the backend:

import { savePerson } from "../redux/features/personSlice";
onClick={() => dispatch(savePerson(name.current))}

- This is one could be confusing cos before it was implemented to save data in the machine memory and it was sligtly different... in real life I don't I need to go thru this 2 steps, step I implement the fetch right away.

6. src/containers/App.tsx : Implement useEffect to fetch data:
   import { useEffect } from "react";
   import { useAppDispatch } from "../redux/store";
   import { fetchPerson } from "../redux/features/personSlice";

const dispatch = useAppDispatch();
useEffect(() => {
dispatch(fetchPerson());
});

# Part III. Create the cartSlice

https://www.youtube.com/watch?v=cJMigay5wzk

1. src/redux/features/cartSlice.tsCreate 3 interfaces to describe the array of products:
   export interface Product {
   id: number;
   name: string;
   price: number;
   }
   export interface CartItem {
   product: Product;
   qty: number;
   }

interface CartState {
items: CartItem[];
}

2. Inital state
   const initialState: CartState = {
   items: [],
   };

3. function to add items to the cart:
   export const CartSlice = createSlice({
   name: "cart",
   initialState,
   reducers: {
   addToCart: (state, action: PayloadAction<CartItem>) => {
   state.items.push(action.payload);
   },
   },
   });

4. src/redux/features/cartSlice.ts: Export the reducers and the functions:

export default CartSlice.reducer;
export const { addToCart } = CartSlice.actions;

5. src/redux/store.ts : Implement the cartSlice in the store
   import { CartSlice } from "./features/cartSlice";
   cart: CartSlice.reducer,

6. src/components/Product.tsx: Import the data from dummyData.ts

import { products } from "../dummyData";

7.  src/components/Product.tsx: Map over th array of products:

    {products.map((product) => (
    <div
          key={product.id}
          className="rounded-md border shadow hover:shadow-md transition cursor-pointer w-40 p-2 flex flex-col justify-center items-center "
        >
    <img src="/vite.svg" alt="" className="w-24" />
    <p className="text-gray-700">{product.name}</p>
    <p className="text-green-500">{product.price} $</p>
    <button
    className="rounded-md shadow bg-violet-600 hover:bg-violet-700 text-white cursor-pointer py-2 px-4 "
    onClick={() => dispatch(addToCart({ product, qty: 1 }))} >
    Add To Cart
    </button>
    </div>

8.  Implement the action dispatch to add items to the cart:
    import { addToCart } from "../redux/features/cartSlice";
    import { useAppDispatch } from "../redux/store";

                onClick={() => dispatch(addToCart({ product, qty: 1 }))}

9.  src/components/Cart.tsx : Implement product quantity

import {
totalItemQtySelector,
totalQtyLimitSelector,
} from "../redux/features/cartSlice";
import { useAppSelector } from "../redux/store";

const totalItemQty = useAppSelector(totalItemQtySelector);

10. src/redux/features/cartSlice.ts: Implement cart amount

const items = (state: RootState) => state.cart.items;

export const totalItemQtySelector = createSelector([items], (items) => {
console.log("custom selector runned");
return items.reduce(
(total: number, curr: CartItem) => (total += curr.qty),
0,
);
});

- This is a unnecesary "boiles plate", I cound implement this easily with forEach

11. src/redux/features/cartSlice.ts: createSelector function

export const totalQtyLimitSelector = createSelector(
[items, (items, limit: number) => limit],
(items, limit) => {
const total = items.reduce(
(total: number, curr: CartItem) => (total += curr.qty),
0,
);
return total > limit;
},
);

12. src/components/Cart.tsx: Apply the function to check if the amoung exceed the limit
    const isExceeded = useAppSelector((state) => totalQtyLimitSelector(state, 5));

13. src/components/Cart.tsx: Render a text depending if the limit is exceded:
    <span>Is Exceed: </span> <span>{isExceeded ? "Yes" : "No"}</span>

# Create a local data base(the net ninja tutorial):

https://www.youtube.com/watch?v=eao7ABGFUXs&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d&index=16

npx json-server --watch data/db.json --port 8000

# Conclusion:

- I believe from topic 9 to 13, it was unnecesary complicated, maybe for teaching reason it is worth it
- This app use "tailwind" for CSS
- Interface are define in the redux slices and then imported so I don't need to define the variables in multiples place in my app. That is smart!
- Use of a fake REST API to fetch (POST) and provide info (POST)
- It does not axios
- It does not have test

* This app is 2 years old and it has already important features decapricated.
