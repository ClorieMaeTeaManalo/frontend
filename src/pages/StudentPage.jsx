import { useState } from "react";
import FormContainer from "../Components/FormContainer";
import HeaderContainer from "../Components/HeaderContainer";
import ListContainer from "../Components/ListContainer";

const StudentPage = () => {
    const [data, setData]= useState([]);

    const students =   [
        { id: 1, name: 'Don Steph B. Livin', srcode: '12-45321', program: 'BSIT'},
        { id: 2, name: 'Bruno Mercury', srcode: '12-23712', program: 'BSIT' },
        { id: 3, name: 'Freddy Mars', srcode: '12-87543', program: 'BSIT'},
    ];
    const getData = async () =>{
        const response = await fetch('http://127.0.0.1:3000/student');

        if(!response.ok){
            throw new Error(response.status);
        }
        const data = response.json();

        return data;
    }

    getData().then((result) => {
        setData(result);
    }).catch((e) => {
        console.log(e);
    })

    return(
        <>
            <HeaderContainer />
            <FormContainer />
            <ListContainer data={students} />
        </>
    )
}

export default StudentPage;