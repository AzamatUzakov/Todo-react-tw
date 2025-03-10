import React from "react";
import { Input } from "../input";
import { Button } from "../button";
import Person from "@/types";

interface AddUserProps {
    setUsers: React.Dispatch<React.SetStateAction<Person[]>>;
}

const AddUser: React.FC<AddUserProps> = ({ setUsers }) => {
   
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const fm = new FormData(e.currentTarget);
        const userName = fm.get("name") as string;
        const surname = fm.get("surname") as string;
        const age = Number(fm.get("age"));
        const phone = fm.get("phone") as string;

        if (!userName || !surname || isNaN(age) || !(phone)) {
            alert("Заполните все поля корректно!");
            return;
        }

        const newUser: Person = {
            id: Math.random(),
            userName,
            surname,
            age,
            phone
        };

        setUsers((prev) => [...prev, newUser]);
        e.currentTarget.reset();
    }

    return (
        <div className="flex justify-center items-center h-[70%]">
            <div>
                <h1 className="text-black text-center text-3xl font-semibold my-4">Add User</h1>
                <form className="w-[400px] mx-auto" onSubmit={handleSubmit}>
                    <Input className="mb-2 text-black" type="text" name="name" placeholder="Name" />
                    <Input className="mb-2 text-black" type="text" name="surname" placeholder="Surname" />
                    <Input className="mb-2 text-black" type="number" name="age" placeholder="Age" />
                    <Input className="mb-2 text-black" type="tel" name="phone" placeholder="Phone" />
                    <Button variant="default" className="cursor-pointer w-[100%] mt-3">Добавить</Button>
                </form>
            </div>
        </div>
    );
};

export default AddUser;
