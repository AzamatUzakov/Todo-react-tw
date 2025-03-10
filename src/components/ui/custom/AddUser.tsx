import React, { useState } from "react";
import { Input } from "../input";
import { Button } from "../button";
import people from "@/util/Person";

interface Todo {
    id: number;
    userName: string;
    surname: string;
    age: number;
    phone: number;
    completed: boolean;
    created_at: string;
}

const AddUser: React.FC = () => {
    const [users, setUsers] = useState(people);

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const fm = new FormData(e.currentTarget);
        const userName = fm.get("name") as string;
        const surname = fm.get("surname") as string;
        const age = Number(fm.get("age"));
        const phone = Number(fm.get("phone"));

        // Проверка на валидность введенных данных
        if (!userName || !surname || isNaN(age) || isNaN(phone)) {
            alert("Заполните все поля корректно!");
            return;
        }

        const newUser: Todo = {
            id: Math.random(),
            userName,
            surname,
            age,
            phone,
        };

        setUsers((prev) => [...prev, newUser]);
        e.currentTarget.reset();
    }

    console.log(users);

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
