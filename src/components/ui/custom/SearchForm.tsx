import React, { useEffect, useState } from "react";
import { Input } from "../input";
import Person from "@/types";

interface SearchFormProps {
    users: Array<Person>;
    setFiltered: (array: any) => void;
}
const SearchForm: React.FC<SearchFormProps> = ({ users, setFiltered }) => {

    const [search, setSearch] = useState<string>("")

    useEffect(() => {
        const filter = users.filter((user) => 
            user.name.toLowerCase().includes(search.toLowerCase().trim())

        )
        setFiltered(filter)
    }, [search])


    return (
        <div>


            <Input className="w-80  text-black m-3 mx-auto" placeholder="User"
                name="search"
                onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>) => {
                    const target = e.target as HTMLInputElement;
                    setSearch(target.value)

                }}
            />

        </div>);
}

export default SearchForm;