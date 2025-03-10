import React from "react";
import { Input } from "../input";
import { Button } from "../button";


const AddUser: React.FC = () => {
    return (
        <div className="flex justify-center items-center h-[70%]">
            <div>
                <h1 className="text-black text-center text-3xl font-semibold my-4">Add User</h1>
                <form className="w-[400px] mx-auto">
                    <Input className="mb-2 text-black" type="text" name="name" />
                    <Input className="mb-2 text-black" type="text" name="surname" />
                    <Input className="mb-2 text-black" type="number" name="age" />
                    <Input className="mb-2 text-black" type="number" name="phone" />
                    <Button variant="default" className="cursor-pointer w-[100%] mt-3">Добавить</Button>
                </form>
            </div>
        </div>

    );
}

export default AddUser;