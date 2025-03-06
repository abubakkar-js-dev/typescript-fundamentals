// ki type er data asbe ta janina setai ts generic
type ID = number | string;

type User = {
    id: ID;
    firstName: string;
    lastName?: string;
    age: number;
    skills: string[];
    address: {
      street: string;
      city: string;
      country: string;
    };
  };

function functionName<T>(value: T):T{
    console.log(value,typeof value);
    return value;
}



// functionName<number>(3);
// functionName<string>('434');
// functionName<boolean>(true);


function mergeObjects<T,U>(obj1: T, obj2: U): T & U{
    return {...obj1,...obj2};
}


const merged1 = mergeObjects({a:1},{b:2});


const arr = [1,2,3,4];


const mapped = arr.map(item=> item.toString());

console.log(mapped);


type MysteryBox<T> = {
    value: T,
}


const numberBox: MysteryBox<number> = {value: 2343}; 

const userBox: MysteryBox<User | null> = {value: null}

if(userBox?.value){
    console.log(userBox.value.address);
}


type ApiResponse<T>={
    data: T,
    status: number,
    message: string,
}


type User2 = {
    id: string,
    firstName: string,
    lastName?: string,
}

async function fetchUser():Promise<ApiResponse<User>>{
    const response = await fetch('https://api.example.com/users');
    const data = await response.json();

    return {
        data,
        status: response.status,
        message: response.statusText,
    }
}



type Product = {
    id: string,
    name: string,
    price: number,
    discound: number,
}


async function fetchProduct(): Promise<ApiResponse<Product>> {
    const response = await fetch('https://api.example.com/users');
    const data = await response.json();

    return {
        data,
        status: response.status,
        message: response.statusText,
    }
}


const fetchData = async<T>(url: string):Promise<ApiResponse<T>> =>{
    const res = await fetch(url);
    const data = await res.json();
    
    return {
        data,
        status: res.status,
        message: res.statusText,
    }
}

async function main() {
    const user = await fetchData<User2>('https://api.example.com/users');
    console.log(user.data.firstName);

    const product = await fetchData<Product>('https://api.example.com/products');

    console.log(product.data.discound)
}

main();
