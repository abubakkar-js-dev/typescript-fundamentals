// union type

type ID = string | number;

type Admin ={
    id: ID,
    role: 'admin',
    fullControl: boolean,
}

type Manager = {
    id: ID,
    role: 'manager',
}

type User = Admin | Manager;

function doSomething(user: User){
    if(user.role === 'admin'){
        console.log('I have full control',user.fullControl);
    }

    console.log(user.role,"User role");
}

doSomething({id: 1,role: 'admin', fullControl: true});

doSomething({id:2,role: 'manager'});




function formateValue(value: string | number):string{
    if(typeof value === 'string'){
        return value.toUpperCase();
    }

    return value.toFixed(2);
}


console.log(formateValue('user'))
console.log(formateValue(234232));



type ErrorResponse = {
    error: true,
    message: string,
}


type SuccessResponse ={
    error: false,
    data: string,
}


type ApiResponse = ErrorResponse | SuccessResponse;


function handleResponse(response: ApiResponse){
    if(response.error){
        console.log(response.message);
    }else{
        console.log(response.data)
    }
}


// intersection type


type Person = {
    id:ID,
    name: String,
    age: number,
}

type Employee = Person & {
    role: 'emplyee';
    salary: number,
}

type Customer = Person & {
    role: 'customer';
    balance: number,
}


const user:Customer = {
    id:23,
    name: 'Mr Bean',
    age: 38,
    role: "customer",
    balance: 3432,
}